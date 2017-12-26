# Git for humans

#### Motivation?

Git is a mighty tool. Some time if things go wrong the syntax can be wired for newbies.
The aim of this project to provide a wrapper for git to do it more readable

Based on [git flight rules](https://github.com/k88hudson)


## Installation
```
npm install -g xreader/git-for-humans
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

```
hgit [command]
```

### See wrapped command(s)

to see what command will be executed use --describe parameter



### Commands

```
  hgit change author                        
```
  Change wrong name and email in last commit
```
  hgit show last commit                     
 ```
 What did I just commit?
```
  hgit remove last commit                   
  ```
Delete or remove last commit
```
  hgit remove file                          
```
  Remove a file from the previous commit. This is particularly useful when you have an open patch and you have committed an unnecessary file, and need to force push to update the patch on a remote.
```
  hgit remove changes for a file            
```
  In order to remove changes for a
                                            file from the previous commit
                                            The commit message is keeped
                                            unchanged.
```
  hgit remove commit                        
```
  Reset Git to the state it was in
                                            before you made your last commit
                                            (while keeping your staged changes).
```
  hgit remove arbitrary commit              
```
  it will irreversibly change your
                                            history, and mess up the history of
                                            anyone else who had already pulled
                                            from the repository. In short, if
                                            you're not sure, you should never do
                                            this, ever.
                                            Do an interactive rebase instead and
                                            remove the line(s) corresponding to
                                            commit(s) you want to see removed
```
  hgit remove pushed commit                 
```
  Remove last commit.
                                            If you need to delete pushed
                                            commits, you can use the following.
                                            However, it will irreversibly change
                                            your history, and mess up the
                                            history of anyone else who had
                                            already pulled from the repository.
                                            In short, if you're not sure, you
                                            should never do this, ever.
```
  hgit push rejected commit                 
```
  push my amended commit to a remote
                                            that was rejected with an error
                                            message.
                                            In general, avoid force pushing. It
                                            is best to create and push a new
                                            commit rather than force-pushing the
                                            amended commit as it will cause
                                            conflicts in the source history for
                                            any other developer who has
                                            interacted with the branch in
                                            question or any child branches.
```
  hgit undo hard reset                      
```
  if you accidentally did a hard
                                            reset, and want the changes back.
```
  hgit commit staged changes                
```
  add staged changes to the previous
                                            commit.
```
  hgit reset added files                    
```
  Reset added files.
```
  hgit reset added file                     
```
  Reset added file.
```
  hgit stage unstaged and unstage staged    
```
  Stage unstaged edits, and unstage
  edits                                     staged edits.
```
  hgit move edits to branch                 
```
  Move unstaged edits to a new branch.
```
  hgit move edits to existing branch        
```
  Move my unstaged edits to a
                                            different, existing branch.
```
  hgit discard changes                      
```
  Discard my local uncommitted changes
                                            (staged and unstaged).
```
  hgit undo add                             
```
  Unstage all files you might have
                                            staged with git add.
```
  hgit revert                               
```
  Revert all local uncommitted changes
                                            (should be executed in repo root).
```
  hgit revert file                          
```
  Revert uncommitted changes to a
                                            particular file or directory.
```
  hgit revert all                           
```
  Another way to revert all
                                            uncommitted changes (longer to type,
                                            but works from any subdirectory).
```
  hgit remove untracked files               
```
  Remove all local untracked files, so
                                            only files tracked by Git remain.
```
  hgit discard specific unstaged changes    
```
  Get rid of some, but not all changes
                                            in your working copy
                                            (interactively).
                                            Checkout undesired changes, keep
                                            good changes.
                                            Answer y to all of the snippets you
                                            want to drop
```
  hgit reapply specific unstaged changes    
```
  Another strategy to discard specific
                                            changes involves using stash. Stash
                                            all the good changes, reset working
                                            copy, and reapply good changes
```
  hgit discard specific unstaged files      
```
  When you want to get rid of one
                                            specific file in your working copy.
```
  hgit create branch from commit            
```
  Create a branch from a commit.
```
  hgit reset branch to commit               
```
  Simply reset your branch back to the
                                            desired commit pulled from/into the
                                            wrong branch.
                                            Use 'git reflog' first  to see where
                                            your HEAD pointed before the bad
                                            pull
```
  hgit reset to branch               
```
  Discard local commits so my branch
                                            is the same as one on the server
```
  hgit move changes to branch               
```
  Move wrongly committed changes to a
                                            new branch.
                                            First find out what the SHA1 of
                                            commit hash you want to set your
                                            master branch with `git log`
```
  hgit delete deleted local branches        
```
  Delete local branches that were
                                            deleted upstream (remote).
```
  hgit delete remote branch                 
```
  Delete a remote branch
```
  hgit delete local not been merged branch  
```
  Delete a local branch that has not
                                            been merged to the current branch or
                                            an upstream
```
  hgit rename current branch                
```
  Rename the current (local) branch
```
  hgit rename branch                        
```
  Rename a different (local) branch
```
  hgit create remote branch                                  
```
  Create a new remote branch from
                                            current local one
```
  hgit set remote branch as upstream                         
```
  Set a remote branch as the upstream
                                            for a local branch
```
  hgit set head to track default remote                      
```
  By checking your remote branches,
  branch                                    you can see which remote branch your
                                            HEAD is tracking.
                                            In some cases, this is not the
                                            desired branch.
```
  hgit set head to track remote master                       
```
  Change origin/HEAD to track
                                            origin/master branch
```
  hgit undo rebase                                           
```
  You may have merged or rebased your
                                            current branch with a wrong branch,
                                            or you can't figure it out or finish
                                            the rebase/merge process. Git saves
                                            the original HEAD pointer in a
                                            variable called ORIG_HEAD before
                                            doing dangerous operations, so it is
                                            simple to recover your branch at the
                                            state before the rebase/merge
```
  hgit undo merge                                            
```
  You may have merged or rebased your
                                            current branch with a wrong branch,
                                            or you can't figure it out or finish
                                            the rebase/merge process. Git saves
                                            the original HEAD pointer in a
                                            variable called ORIG_HEAD before
                                            doing dangerous operations, so it is
                                            simple to recover your branch at the
                                            state before the rebase/merge
```
  hgit rebase without reflecting changes                     
```
  Unfortunately, you have to force
                                            push, if you want those changes to
                                            be reflected on the remote branch.
                                            This is because you have changed the
                                            history. The remote branch won't
                                            accept changes unless you force
                                            push. This is one of the main
                                            reasons many people use a merge
                                            workflow, instead of a rebasing
                                            workflow - large teams can get into
                                            trouble with developers force
                                            pushing. Use this with caution. A
                                            safer way to use rebase is not to
                                            reflect your changes on the remote
                                            branch at all, and instead to do the
                                            following
```
  hgit combine commits                                       
```
  Let's suppose you are working in a
                                            branch that is/will become a
                                            pull-request against master. In the
                                            simplest case when all you want to
                                            do is to combine all commits into a
                                            single one and you don't care about
                                            commit timestamps, you can reset and
                                            recommit. Make sure the master
                                            branch is up to date and all your
                                            changes committed
```
  hgit interactive rebase                                    
```
  Combine commits with more control,
                                            and also to preserve timestamps, you
                                            need to do something called an
                                            interactive rebase
```
  hgit squash commits                                        
```
  If you aren't working against
                                            another branch you'll have to rebase
                                            relative to your HEAD. If you want
                                            to squash the last 2 commits, for
                                            example, you'll have to rebase
                                            against HEAD~2. For the last 3,
                                            HEAD~3, etc
```
  hgit safe merging                                          
```
  Performs the merge but pretends the
                                            merge failed and does not
                                            autocommit, giving the user a chance
                                            to inspect and further tweak the
                                            merge result before committing.
                                            no-ff maintains evidence that a
                                            feature branch once existed, keeping
                                            project history consistent
```
  hgit merge branch into single commit                       
```
Merge a branch into a single commit
```
  hgit combine unpushed commits                              
```
Combine only unpushed commits.
                                            Interactive rebase that lists only
                                            the commits that you haven't already
                                            pushed, so it will be safe to
                                            reorder/fix/squash anything in the
                                            list
```
  hgit abort merge                                           
```
Sometimes the merge can produce
                                            problems in certain files, in those
                                            cases we can use the option abort to
                                            abort the current conflict
                                            resolution process, and try to
                                            reconstruct the pre-merge state.
```
  hgit check commits merged                                  
```
To check if all commits on a branch
                                            are merged into another branch, you
                                            should diff between the heads (or
                                            any commits) of those branche.
```
  hgit list nonshared commits                                
```
This will tell you if any commits
                                            are in one but not the other, and
                                            will give you a list of any
                                            nonshared between the branches.
                                            (Another option is to do this see
                                            "check commits merged").
```
  hgit visual diff editor                                    
```
If the merges are complicated, you
                                            can use a visual diff editor
```
  hgit stash file                                            
```
To stash only one file from your
                                            working directory
```
  hgit stash with message                                    
```
stash with message
```
  hgit remove submodule                                      
```
Remove a submodule
```
  hgit restore file                                          
```
Restore deleted not commited file
```
  hgit restore commited file                                 
```
Restore a deleted file from previous
                                            commit. Finds the commit when the
                                            file last existed then checkouts
                                            that file
```
  hgit remove from git                                       
```
Remove a file from Git but keep the
                                            file
```
  hgit add empty directory                                   
```
Add an empty directory to my
                                            repository
```
  hgit save credentials                                      
```
Cache a username and password for a
                                            repository
```
  hgit cache credentials                                     
```
Cache a username and password for a
                                            repository with timeout

#### Options:

```
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --verbose  Show debug
```

