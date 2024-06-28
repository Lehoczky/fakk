#!/usr/bin/env node
import { consola } from "consola"
import minimist from "minimist"
import { $ } from "execa"

const argv = minimist(process.argv.slice(2))

if (argv._.includes("hooks")) {
  removeGitHooks()
} else if (isEmpty(argv._)) {
  undoLastCommit()
} else {
  if (!argv._.includes("help")) {
    consola.error("Unsupported command.")
  }
  help()
}

async function removeGitHooks() {
  try {
    await $("git", ["config", "--unset", "core.hooksPath"])
    consola.success("Git hooks are removed successfully")
  } catch (error) {}
}

async function undoLastCommit() {
  try {
    await $("git", ["reset", "HEAD~"])
    consola.success("Last commit has been undone successfully")
  } catch (error) {
    const errorMessage: string = error.toString()

    if (errorMessage.includes("not a git repository")) {
      consola.error("You can only run this command from a git repository")
    } else if (
      errorMessage.includes("unknown revision or path not in the working tree")
    ) {
      consola.error(
        "You must have at least 2 commits on this branch to use this command",
      )
    } else {
      consola.error(errorMessage)
    }

    process.exit(1)
  }
}

function help() {
  consola.box(
    `Usage:

\`fakk\`       - undo last commit
\`fakk hooks\` - removes pre-commit hooks
  `.trim(),
  )
}

function isEmpty(value: unknown[]) {
  return value.length === 0
}
