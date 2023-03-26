import octokit from "./octokit.js"

const comment = async (owner,repo,issue_number,body) => {
  
  try {
    
    
    const response = await octokit.rest.issues.createComment(
      {
        owner,
        repo,
        issue_number,
        body,
      }
    )

    return response.status

  } catch (error) {

    console.log(error)
    
  }

}

//console.log(await comment('aldairandre','github-bot',18,'teste'))

export default comment;