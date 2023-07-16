# Fakk

Shortcut for undoing your last commit or removing git hooks. Don't use this, there are probably better solutions.

## Install

```sh
npm i -g @lehoczky/fakk
```

## Usage

Undoing last commit:

```sh
$ git commit -m "Something terribly misguided"
$ fakk
```

Remove git hooks:

```sh
$ fakk hooks
```
