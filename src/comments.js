import search from "./searchIssueInRepo.js";
import comment from "./commentIssue.js"

const commented = async (owner,repo,body) => {
  
  try {
    
    let response;

    const issues  = await search(owner,repo)

    for (const issue in issues) {
      
      if (Object.hasOwnProperty.call(issues, issue)) {

        const { issue_number } = issues[issue];
      
        const url = `/repos/${owner}/${repo}/issues/${issue_number}/comments`
      
        response = await comment(url,owner,repo,issue_number,body)
         
      }
    }

    return response


  } catch (error) {
    console.log(error)
  }
  
}

export default commented