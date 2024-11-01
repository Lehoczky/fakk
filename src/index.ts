#!/usr/bin/env node
import { consola } from "consola"
import { $ } from "execa"

const command: string | undefined = process.argv[2]

if (command === "hooks") {
  removeGitHooks()
} else if (command === undefined) {
  undoLastCommit()
} else {
  if (command !== "help") {
    consola.error("Unsupported command.")
  }
  help()
}

/**
 * Source: https://stackoverflow.com/a/76849002/10876366
 */
async function removeGitHooks() {
  try {
    await $("git", ["config", "--unset", "core.hooksPath"])
    consola.success("Git hooks are removed successfully")
  } catch (error) {
    consola.error("Failed to remove git hooks")
  }
}

/**
 * Source: https://stackoverflow.com/a/927386/10876366
 */
async function undoLastCommit() {
  try {
    await $("git", ["reset", "HEAD~"])
    consola.success("Last commit has been undone successfully")
  } catch (error) {
    const errorMessage: string =
      error instanceof Error ? error.toString() : String(error)

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
