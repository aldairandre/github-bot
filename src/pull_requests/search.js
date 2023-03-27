import octokit from "../octokit.js";

const search = async (owner,repo) => {

  try {

    const pulls = await octokit.paginate(octokit.rest.pulls.list,
      {
        owner : owner,
        repo : repo,
        state : "open",
        per_page : 100
      }
    );

    const response = pulls.map( pull => {
      return {
        id : pull.id ,
        pull_number : pull.number,
        user : {
          name : pull.user.login
        }
      }
    })
    
    return response

  } catch (error) {

    console.log(error);
  
  }
}

export default search;