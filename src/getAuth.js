import octokit from "./octokit.js";

const response = async () => {
  try {
    
    return await octokit.request('GET /user', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

  } catch (error) {
    console.log(error)
  }
}

export default response;