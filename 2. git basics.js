/**
 * git status : status aapse
 * git log : gitve commit ID with date time author name
 * 
 * ?step1: initialize git
 *   *git init
 * ?step2: add files to git
 *   *git add .    OR  git add file.txt
 * ?step3: commit files that are in staging state
 *   *git commit -m "message"
 * 
 * *checkout
 * git checkout commitID : koi commit prr jai ne code jovaa
 * git checkout branch_name : koi branch prr switch krvaa maate
 * 
 * *branch
 * git branch : kai kai branch che te bataave
 * git branch new-branchname : navi branch banava 
 * 
 * git checkout branch_name : koi branch prr switch krvaa maate
 * git checkout -b new-branchname : create and switch to new branch
 * 
 * => merge abc branch to master
 * 1. go to master branch
 * 2. git merge abc
 * 
 * * HEAD -> abc => j branch prr hoi tryaa HEAD aavi jaaai
 * * detached HEAD => koi branch prr nai hoi but koi commit ne point kree
 * latest commit aa j hto ne paachu ejj commitID(may b koi b commit...) prr checkout kriyuuu etle
 * C:\Users\Manuel Lorenz\Desktop\git-basics>git checkout f95269fe0673d597ef69c5120a2d1322c2922288
        Note: switching to 'f95269fe0673d597ef69c5120a2d1322c2922288'.

            You are in 'detached HEAD' state. You can look around, make experimental
            changes and commit them, and you can discard any commits you make in this
            state without impacting any branches by switching back to a branch.

            If you want to create a new branch to retain commits you create, you may
            do so (now or later) by using -c with the switch command. Example:
            git switch -c <new-branch-name>
 *
 *  git branch
 *     *(HEAD detached at e8244a40) 
 *     master
 * pachi aapde aama kai changes kriye and commit kriye to pachi ene branch ma lava maate
 *  * git branch new-branch-name 4fc6046ef
 * uppr no command nai lakhiyee ne change kree to commit willbe lost
 * 
 * * switch is new command act as checkout used to create new branch or switch branch
 * 
 * git switch branch-name
 * git switch -c new-branch-name
 * 
 * 
 * ? Deleteing files from working directory
 * git ls-files : kai kai files staged or commit thai che te bataav se
 *          agar koi file delete kriye to b a file dekhaase coz a already staged or commit thai gai che
 * 
 * yaa to git add .    krii sakiye or git rm file
 * 
 * 
 * 
 * ? UNDO UNstaged changes
 * 1. suppose kai file ma change kriyu(green highlight) & hvee a nai joituuu
 * git checkout filename.txt :ena initial state pr lai jsee 
 * 
 * git checkout . : j branch no initial state hse tya lai jse
 * 
 * git restore . / git restore file.txt => same uppr jevu
 * 
 * git clean -dn : navi koi file hoi te delete krrse
 * git clean -df : navi koi file hoi te delete krrse forcefullt
 * 
 * 
 * ? UNDO staged changes (pachi delete krvu hoi to unstaged vala cmds run krvaa na)
 * * git add . kriyu hoi a pachi aa krvaa na
 * git reset filename.txt : staged ne unstaged krse 
 * git restore --staged filename.txt : uppr jevu
 * 
 * 
 * ? UNDO/Delete Commit 
 * git reset HEAD~1 => last commit maa j b hoi ene direct unstaged changes ma laavi dei
 * git reset --soft HEAD~1 => only commit delete kree ne staged prr jaai
 * git reset --hard HEAD~1 => commit to working Directory badhu jj delete kree
 * 
 * ?delete Branch
 * git branch -d branch-name1: only merged hoi to jj delete krse
 * git branch -D branch-name1 branch-name2: forcefully deleted.
 * 
 * 
 * ?.gitignore
 *  [*.log] => ignore all the files that end with .log
 * [!test.log] => this will excluded from above(visible commit thse)
 * 
 * web-app/* => ignore all files (underr ni pnnn)
 * 
 */