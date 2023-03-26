import octokit from '../octokit.js'
import search from "./searchIssueInRepo.js";
import  input from '../input/index.js'

const inputs = await input()
const {owner, repo} = inputs

const deleteComments = async (owner,repo) => {

  try {
    const issues = await search(owner,repo)
    
    const ids = issues.map( issue => issue.issue_number )
    
    const issue_number = ids.map( issue_number =>  issue_number )

    const comments = [] 
    
    for await (const id of issue_number) {

      const data = await octokit.rest.issues.listComments({
        owner : `${owner}`,
        repo : `${repo}`,
        issue_number : `${id}`
      })

      comments.push(data.data)
    
    }

    comments.forEach(async c => {
      
      c.map(async c => {
        if(c.user.login === `${owner}`){
          await octokit.rest.issues.deleteComment({
            owner : `${owner}`,
            repo : `${repo}`,
            comment_id : c.id
          })
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

deleteComments(owner,repo)

export default deleteComments;