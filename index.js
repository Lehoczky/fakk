#!/usr/bin/env node
import { execSync } from "child_process"

try {
  execSync("git reset HEAD~", {
    stdio: ["pipe"],
    windowsHide: true,
  })
  console.log("Last commit has been undone successfully")
} catch (error) {
  const errorMessage = error.toString()

  if (errorMessage.includes("not a git repository")) {
    console.error("You can only run this command from a git repository")
  } else if (
    errorMessage.includes("unknown revision or path not in the working tree")
  ) {
    console.error(
      "You must have at least 2 commits on this branch to use this command"
    )
  }
}
