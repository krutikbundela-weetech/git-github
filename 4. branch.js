/**
 * *Fast Forward branch:
 *  a fast-forward is a way to move a branch pointer forward when merging, without creating a new merge commit.
 *      It can occur when the branch you're merging into has no additional commits beyond what is already in the branch being merged.
 * ex: If no commits have been added to main since feature branched off from it, merging feature into main can be done as a fast-forward.
 *      In this case, the main branch pointer is simply moved to the same commit as feature.
 * 
 * *main branch ma jai ne : git merge main
 * 
 * *how to just merge the latest(2-3) commit that are not in main as 1 commit 
 *  new branch ma j nava commits thaya che tene 1 commit ma merge krvaa nu
 * 
 * ?step1: in main branch 
 *  git merge --squash feature(new-branch)
 * (this will not update the HEAD)
 * ? step 2: commit krvaa nu
 * 
 * *Merge by the Recursive Strategy
 *      jyaare main ma kai changes hoi that are not in other branch and agar merge kriye to
 * git merge main (kriye to by default j saaru hse fast forward/ recursive te jaate lai le se)
 * 
 * git merge --no-ff feature
 * 
 * 
 * *Rebase:(use only for local)
 *  suppose main ma 
 *  It does not move commits, it creates new commits, never rebase commits outside your repository!
 * 
 * master => m1, m2 ,m3
 * feature => m1, m2, f1 , f2
 * 
 * now m3 ne feature ma laaava
 * git rebase master
 * feature => m1, m2 , m3 , f1 , f2(f1,f2 ni id b badlaai jse)
 * 
 * 
 * * merge conflicts
 * 
 * git merge --abort : git merge kriyu ne conflict aaviya to..abort krvaaa
 * 
 * git log --merge: j 2 commit merge krvaa na che teni information
 * 
 * git diff : conflict ne terminal ma bataav se
 * 
 * 
 * *cherry-pick
 * koi perticuler commit merge krvu hoi to
 * !but commit id merge pachi change thai jseeeee
 * git cherry-pick commit-id
 * 
 * 
 * 
*/