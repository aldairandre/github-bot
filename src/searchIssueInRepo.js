import octokit from "./octokit.js";

const search = async (url,owner,repo) => {

  try {

    const issues = []

    const { data } = await octokit.request(
      `GET ${url}`,
      {
        owner : owner,
        repo : repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    );
    
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