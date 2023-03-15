import octokit from "./octokit.js"

const comment = async (url,owner,repo,issue_number,body) => {
  
  try {
    
    
    const response = await octokit.request(`POST ${url}`, {
      owner: owner,
      repo: repo,
      issue_number: issue_number,
      body: body,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    return response.status

  } catch (error) {

    console.log(error)
    
  }

}

export default comment;