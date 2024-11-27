# Fakk

[![Publish](https://github.com/Lehoczky/fakk/actions/workflows/publish.yml/badge.svg)](https://github.com/Lehoczky/fakk/actions/workflows/publish.yml)
[![NPM Version](https://img.shields.io/npm/v/%40lehoczky%2Ffakk)](https://www.npmjs.com/package/@lehoczky/fakk)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40lehoczky%2Ffakk)

This package helps you to undo your last commit or remove git hooks with ease. Don't need to google "undo last commit" ever again!

✅ Use this, if you:

- already have a JavaScript runtime installed
- don't like using shell scripts
- need a cross-platform solution

❌ Don't use this, if you:

- like to configure global shell scripts, and aliases
- know these commands even without looking them up
- are a very responsible developer, who never commits anything unintentionally

## 💿 Installation

```sh
pnpm add -g @lehoczky/fakk
```

## 💻 Usage

### Undo last commit

In case you committed something you shouldn't have.

```sh
$ git commit -m "Something terribly misguided"
$ fakk
```

Shortcut for https://stackoverflow.com/a/927386/10876366

## Remove git hooks

Maybe your company uses silly, or terribly slow git hooks, and you had enough.

```sh
$ fakk hooks
```

Shortcut for https://stackoverflow.com/a/76849002/10876366
