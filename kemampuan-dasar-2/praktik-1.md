Microsoft Windows [Version 10.0.17134.1069]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Users\adi_p>cd ..

C:\Users>cd ..

C:\>cd xampp\htdocs\praxis-academy\kemampuan-dasar-1\latihan

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\latihan>Set-ExecutionPolicy Unrestricted
'Set-ExecutionPolicy' is not recognized as an internal or external command,
operable program or batch file.

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\latihan>My First Script.ps1
'My' is not recognized as an internal or external command,
operable program or batch file.

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\latihan>cd ..

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1>cd kasus

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\kasus>dir cari-java.bat
 Volume in drive C has no label.
 Volume Serial Number is 8AF7-4EE3

 Directory of C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\kasus

11/10/2019  13:18                 0 cari-java.bat
               1 File(s)              0 bytes
               0 Dir(s)  71.803.006.976 bytes free

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\kasus>dir cari-java.bat $HOME/src
Parameter format not correct - "src".

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\kasus>rename cari-java.bat  file-ren.bat

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1\kasus>cd ..

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-1>cd ..

C:\xampp\htdocs\praxis-academy>mkdir kemampuan-dasar

C:\xampp\htdocs\praxis-academy>cd ..

C:\xampp\htdocs>cd praxis-academy

C:\xampp\htdocs\praxis-academy>git init
Initialized empty Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar"
[master (root-commit) 9483f33] kemampuan dasar
 6 files changed, 140 insertions(+)
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/kasus/file-ren.bat
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/Directory1/wkwk.txt
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/cmdline.txt
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/My First Script.ps1
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/MyScript.bat
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/Untitled1.ps1

C:\xampp\htdocs\praxis-academy>git remote add origin https://github.com/AdiPrimanto/praxis-academy.git

C:\xampp\htdocs\praxis-academy>git push -u origin master
Logon failed, use ctrl+c to cancel basic credential prompt.
Username for 'https://github.com': adiprimanto
Password for 'https://adiprimanto@github.com':
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 4 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (13/13), 2.32 KiB | 263.00 KiB/s, done.
Total 13 (delta 0), reused 0 (delta 0)
To https://github.com/AdiPrimanto/praxis-academy.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs\praxis-academy>mk dir kemampuan-dasar-2
'mk' is not recognized as an internal or external command,
operable program or batch file.

C:\xampp\htdocs\praxis-academy>mkdir kemampuan-dasar-2

C:\xampp\htdocs\praxis-academy>mkdir wawasan

C:\xampp\htdocs\praxis-academy>cd kemampuan-dasar-2

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>mkdir README.md

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>git init
Initialized empty Git repository in C:/xampp/htdocs/praxis-academy/kemampuan-dasar-2/.git/

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>git add .

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>git commit -m "kemampuan dasar 2"
On branch master

Initial commit

nothing to commit

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>git push -u origin master
error: src refspec master does not match any.
error: failed to push some refs to 'origin'

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>cd ..

C:\xampp\htdocs\praxis-academy>git init
Reinitialized existing Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar2"
[master 7b2ea0e] kemampuan dasar2
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/Directory1/wkwk.txt

C:\xampp\htdocs\praxis-academy>git push -u origin master
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 455 bytes | 113.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/AdiPrimanto/praxis-academy.git
   9483f33..7b2ea0e  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs\praxis-academy>git init
Initialized empty Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar"
[master (root-commit) 36b8b3a] kemampuan dasar
 5 files changed, 140 insertions(+)
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/kasus/file-ren.bat
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/cmdline.txt
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/My First Script.ps1
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/MyScript.bat
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/Untitled1.ps1

C:\xampp\htdocs\praxis-academy>git remote add origin https://github.com/AdiPrimanto/praxis-academy.git

C:\xampp\htdocs\praxis-academy>git push -u origin master
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 4 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (12/12), 2.24 KiB | 254.00 KiB/s, done.
Total 12 (delta 0), reused 0 (delta 0)
To https://github.com/AdiPrimanto/praxis-academy.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar"
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

C:\xampp\htdocs\praxis-academy>git push -u origin master
Everything up-to-date
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs\praxis-academy>cd ..

C:\xampp\htdocs>cd praxis-academy

C:\xampp\htdocs\praxis-academy>git init
Initialized empty Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar"
[master (root-commit) 247e14f] kemampuan dasar
 5 files changed, 140 insertions(+)
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/kasus/file-ren.bat
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/cmdline.txt
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/My First Script.ps1
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/MyScript.bat
 create mode 100644 kemampuan-dasar/kemampuan-dasar-1/latihan/powershellscripts/Untitled1.ps1

C:\xampp\htdocs\praxis-academy>git init
Reinitialized existing Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar"
[master b22905b] kemampuan dasar
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 kemampuan-dasar-2/aa.txt
 create mode 100644 wawasan/aa.txt

C:\xampp\htdocs\praxis-academy>git init
Reinitialized existing Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git init
Reinitialized existing Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar"
[master fab67bf] kemampuan dasar
 2 files changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 kemampuan-dasar-2/aa.txt
 delete mode 100644 wawasan/aa.txt

C:\xampp\htdocs\praxis-academy>git init
Reinitialized existing Git repository in C:/xampp/htdocs/praxis-academy/.git/

C:\xampp\htdocs\praxis-academy>git add .

C:\xampp\htdocs\praxis-academy>git commit -m "kemampuan dasar"
On branch master
nothing to commit, working tree clean

C:\xampp\htdocs\praxis-academy>git remote add origin https://github.com/AdiPrimanto/praxis-academy.git

C:\xampp\htdocs\praxis-academy>git push -u origin master
Enumerating objects: 16, done.
Counting objects: 100% (16/16), done.
Delta compression using up to 4 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (16/16), 2.60 KiB | 242.00 KiB/s, done.
Total 16 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/AdiPrimanto/praxis-academy.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\xampp\htdocs\praxis-academy>cd kemampuan-dasar

C:\xampp\htdocs\praxis-academy\kemampuan-dasar>cd kemampuan-dasar-1

C:\xampp\htdocs\praxis-academy\kemampuan-dasar\kemampuan-dasar-1>cd ..

C:\xampp\htdocs\praxis-academy\kemampuan-dasar>cd ..

C:\xampp\htdocs\praxis-academy>cd kemampuan-dasar-2

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>git README.md
git: 'README.md' is not a git command. See 'git --help'.

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>git init
Initialized empty Git repository in C:/xampp/htdocs/praxis-academy/kemampuan-dasar-2/.git/

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>git add README.md
fatal: pathspec 'README.md' did not match any files

C:\xampp\htdocs\praxis-academy\kemampuan-dasar-2>cd ..

C:\xampp\htdocs\praxis-academy>cd ..

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

C:\xampp\htdocs\rhymes>