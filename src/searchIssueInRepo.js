import { Octokit } from "octokit";

const octokit = new Octokit({
  auth : process.env.GH_TOKEN
});



const search = async (issuesURL) => {

  try {

    const issues = []

    const response = await octokit.request(
      issuesURL,
      {
        owner : "florinpop17",
        repo : "app-ideas",
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    );
    
    const data = await response.data
    
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = {
          id_issue : data[key].id,
          issue_number : data[key].number,
          user : data[key].user
        };
        issues.push(element)
      }
    }

    return issues

  } catch (error) {

    console.log(error);
  
  }
}

export default search;