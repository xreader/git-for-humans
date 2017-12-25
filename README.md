# Git for humans

#### Motivation?

Git is a mighty tool. Some time if things go wrong the syntax can be wired for newbies.
The aim of this project to provide a wrapper for git to do cli more readable

Based on [git flight rules](https://github.com/k88hudson)


## Installation
```
npm install -g git-for-humans
```

### List of commands

```
hgit help
```

### Find command

*Example*
```
hgit help | grep remove

```
*output:*
```
  index.js rename current branch            Rename the current (local) branch
  index.js rename branch                    Rename a different (local) branch
```

### Detailed help for command
```
hgit rename branch --help
```
```

hgit rename branch

Rename a different (local) branch

Options:
  --version   Show version number                                      [boolean]
  --help      Show help                                                         [boolean]
  --old-name  Current name of branch                                 [required]
  --new-name  New name of branch                                    [required]
```

