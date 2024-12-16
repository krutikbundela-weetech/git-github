/**
 * *stash : locally commit kre unstaged changes ne
 * file ma kai navu lakhiye then if we type
 * 
 * git stash : it will stash it(save krse and j juno commit hse te state prr lai jse)
 * git stash apply : get back latest stash
 * git stash list : stash ni list dekhaase(0 = always latest waalo hse(decending order ma))
 * git stash 2 : access perticuler stash
 * git stash push -m "msg"
 * git stash pop 0 : (delete from stash and..)paachu working directory maa aavse and then aapde commit kri sakiye
 * git stash drop 0: delete stash
 * git stash clear : delete all stash 
 * 
 * 
 * *reflog
 * git reflog: j b git saathe kriyu te log dekhaase
 * git reflog id aapse to enaa thi paachu lost commit, branch lavaase
 * 
 *
 * git reset --hard d7b4u81(id)// to get commit back
 * 
 * to get deleted branch back
 * ?step 1: create and delete
 *  git chekout -b new-branch(navo content add kri ne commit kriyoo)
 *  git branch -D new-branch(delete branch)
 *  
 * ?step 2:get id of prev commit
 *  git reflog // kri ne j last commit hoi jenaa pachi branch delete kreeli te copy krvaa nu
 * 
 * ?step 3:go to that commit(with copied id)
 * git checkout copied-id(that will lead us to detached head mode)
 * 
 * ?step 4: git switch -c thi navi branch banse with commit 
 * git switch -c deleted-branch-name 
 * 
 * 
 * 
 * 
 * 
 */