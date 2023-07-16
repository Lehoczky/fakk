#!/usr/bin/env node
import { execSync } from "child_process"
import { consola } from "consola"
import minimist from "minimist"

const argv = minimist(process.argv.slice(2))

if (argv._.includes("hooks")) {
  removeGitHooks()
} else {
  undoLastCommit()
}

function removeGitHooks() {
  try {
    execSync("git config --unset core.hooksPath", {
      stdio: ["pipe"],
      windowsHide: true,
    })
    consola.success("Git hooks had been removes successfully")
  } catch (error) {
    const errorMessage: string = error.toString()

    if (errorMessage.includes("not a git repository")) {
      consola.error("You can only run this command from a git repository")
    }

    process.exit(1)
  }
}

function undoLastCommit() {
  try {
    execSync("git reset HEAD~", {
      stdio: ["pipe"],
      windowsHide: true,
    })
    consola.success("Last commit has been undone successfully")
  } catch (error) {
    const errorMessage: string = error.toString()

    if (errorMessage.includes("not a git repository")) {
      consola.error("You can only run this command from a git repository")
    } else if (
      errorMessage.includes("unknown revision or path not in the working tree")
    ) {
      consola.error(
        "You must have at least 2 commits on this branch to use this command"
      )
    }

    process.exit(1)
  }
}
