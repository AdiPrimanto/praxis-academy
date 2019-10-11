C:\xampp\htdocs>mkdir rhymes

C:\xampp\htdocs>cd rhymes

C:\xampp\htdocs\rhymes>git init
Initialized empty Git repository in C:/xampp/htdocs/rhymes/.git/

C:\xampp\htdocs\rhymes>touch README.txt
'touch' is not recognized as an internal or external command,
operable program or batch file.

C:\xampp\htdocs\rhymes>git add README.txt
fatal: pathspec 'README.txt' did not match any files

C:\xampp\htdocs\rhymes>git add README.txt

C:\xampp\htdocs\rhymes>git commit -m 'First commit.'
error: pathspec 'commit.'' did not match any file(s) known to git

C:\xampp\htdocs\rhymes>git commit -m "First Commit"
[master (root-commit) a80d57b] First Commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt

C:\xampp\htdocs\rhymes>echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt

C:\xampp\htdocs\rhymes>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

C:\xampp\htdocs\rhymes>git diff
diff --git a/README.txt b/README.txt
index e69de29..28264bd 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+'This repo is a collection of my favorite nursery rhymes.'

C:\xampp\htdocs\rhymes>git add README.txt

C:\xampp\htdocs\rhymes>git commit -m "Added project overview to README.txt"
[master 50e8064] Added project overview to README.txt
 1 file changed, 1 insertion(+)

C:\xampp\htdocs\rhymes>wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
'wget' is not recognized as an internal or external command,
operable program or batch file.

C:\xampp\htdocs\rhymes>brew install wget
'brew' is not recognized as an internal or external command,
operable program or batch file.

C:\xampp\htdocs\rhymes>wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
'wget' is not recognized as an internal or external command,
operable program or batch file.

C:\xampp\htdocs\rhymes>git remote add origin https://github.com/adiprimanto/rhymes.git

C:\xampp\htdocs\rhymes>git push -u origin master
remote: Repository not found.
fatal: repository 'https://github.com/adiprimanto/rhymes.git/' not found

C:\xampp\htdocs\rhymes>git init
Reinitialized existing Git repository in C:/xampp/htdocs/rhymes/.git/

C:\xampp\htdocs\rhymes>git add .

C:\xampp\htdocs\rhymes>git commit -m "first commit"
On branch master
nothing to commit, working tree clean

C:\xampp\htdocs\rhymes>git remote add origin https://github.com/AdiPrimanto/rhymes.git
fatal: remote origin already exists.

C:\xampp\htdocs\rhymes>git push -u origin master
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (6/6), 507 bytes | 63.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
remote: This repository moved. Please use the new location:
remote:   https://github.com/AdiPrimanto/rhymes.git
To https://github.com/adiprimanto/rhymes.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs\rhymes>cd ..

C:\xampp\htdocs>cd praxis-academy

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "Kemampuan Dasar"
[master a6d5804] Kemampuan Dasar
 4 files changed, 353 insertions(+)
 create mode 100644 kemampuan-dasar-2/README.md
 create mode 100644 kemampuan-dasar-2/praktik-1.md
 create mode 100644 kemampuan-dasar-2/praktik-2.md
 create mode 100644 wawasan/README.md

C:\xampp\htdocs\praxis-academy>git push -u origin master
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 2.68 KiB | 343.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/AdiPrimanto/praxis-academy.git
   fab67bf..a6d5804  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs\praxis-academy>cd ..

C:\xampp\htdocs>echo "# hello-praxis" >> README.md

C:\xampp\htdocs>git init
Initialized empty Git repository in C:/xampp/htdocs/.git/

C:\xampp\htdocs>echo "# hello-praxis" >> README.md

C:\xampp\htdocs>git init
Initialized empty Git repository in C:/xampp/htdocs/.git/

C:\xampp\htdocs>git add README.md

C:\xampp\htdocs>git commit -m "first commit"
[master (root-commit) fcdeb4b] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

C:\xampp\htdocs>git remote add origin git@github.com:hello-praxis/hello-praxis.git

C:\xampp\htdocs>git push -u origin master
Warning: Permanently added the RSA host key for IP address '52.74.223.119' to the list of known hosts.
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 228 bytes | 20.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:hello-praxis/hello-praxis.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs>git clone git@github.com:hello-praxis/hello-praxis.git praktik2
Cloning into 'praktik2'...
Warning: Permanently added the RSA host key for IP address '13.250.177.223' to the list of known hosts.
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.

C:\xampp\htdocs>cd praktik2

C:\xampp\htdocs\praktik2>git checkout -b [new-feature]
fatal: '[new-feature]' is not a valid branch name.

C:\xampp\htdocs\praktik2>git checkout -b
error: switch `b' requires a value

C:\xampp\htdocs\praktik2>git add .

C:\xampp\htdocs\praktik2>git commit -m "information added in readme"
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

C:\xampp\htdocs\praktik2>git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.

C:\xampp\htdocs\praktik2>git branch
* master

C:\xampp\htdocs\praktik2>git remote -v
origin  git@github.com:hello-praxis/hello-praxis.git (fetch)
origin  git@github.com:hello-praxis/hello-praxis.git (push)

C:\xampp\htdocs\praktik2>git push origin readme
error: src refspec readme does not match any.
error: failed to push some refs to 'git@github.com:hello-praxis/hello-praxis.git'

C:\xampp\htdocs\praktik2>git push origin readme
error: src refspec readme does not match any.
error: failed to push some refs to 'git@github.com:hello-praxis/hello-praxis.git'

C:\xampp\htdocs\praktik2>git checkout -b readme
Switched to a new branch 'readme'

C:\xampp\htdocs\praktik2>git add .

C:\xampp\htdocs\praktik2>git commit -m "information added in readme"
On branch readme
nothing to commit, working tree clean

C:\xampp\htdocs\praktik2>git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

C:\xampp\htdocs\praktik2>git branch
* master
  readme

C:\xampp\htdocs\praktik2>git remote -v
origin  git@github.com:hello-praxis/hello-praxis.git (fetch)
origin  git@github.com:hello-praxis/hello-praxis.git (push)

C:\xampp\htdocs\praktik2>git push origin readme
Total 0 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'readme' on GitHub by visiting:
remote:      https://github.com/hello-praxis/hello-praxis/pull/new/readme
remote:
To github.com:hello-praxis/hello-praxis.git
 * [new branch]      readme -> readme

C:\xampp\htdocs\praktik2>



















