import octokit from "./octokit.js";

const search = async (owner,repo) => {

  try {

    const data = await octokit.paginate(
      octokit.rest.issues.listForRepo,
      {
        owner : owner,
        repo : repo,
        per_page : 100,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    );

    const issues = data.filter(issue => !issue.pull_request)

    const response = issues.map( issue => {
      return {
        id : issue.id ,
        issue_number : issue.number,
        user : {
          name : issue.user.login
        }
      }
    })
    
    return response

    /* const issues = response.map(issue => {
      
      if(!issue.pull_request){
        return {
          id : issue.id ,
          issue_number : issue.number,
          user : {
            name : issue.user.login
          }
        }
      }

    })

    return issues.filter(i => i) */

  } catch (error) {

    console.log(error);
  
  }
}

export default search;