import octokit from '../octokit.js'
import search from "./search.js";
import  input from '../input/index.js'

const inputs = await input()
const { owner, repo, user } = inputs

const deleteComments = async (owner,repo,user) => {

  try {
    
    const comments = []

    const pulls = await search(owner,repo)
    
    const pulls_numbers = pulls.map( pull =>  pull.pull_number )
    
    for await (const id of pulls_numbers) {

      const comment = await octokit.rest.issues.listComments({
        owner : owner,
        repo : repo,
        issue_number : id
      })

      if(comment.data.length > 0 ) comments.push(comment.data)
    
    }

    comments.forEach(async comment => {
      
      comment.map(async comment => {
        if(comment.user.login === user){
          await octokit.rest.issues.deleteComment({
            owner : owner,
            repo : repo,
            comment_id : comment.id
          })
          console.log(`Deleting your comment in pull request ${comment.id}`);
        }
      })
    
    });

    console.log("")
    console.log("=============================");
    console.log("")
    console.log("I already did my chores.")
    console.log("")
    console.log("=============================")
    console.log("")

    return 200

  } catch (error) {
    console.log(error)
  }

}

deleteComments(owner,repo,user)

export default deleteComments;