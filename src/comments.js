import { readFile } from 'node:fs';
import search from "./searchIssueInRepo.js";
import comment from "./commentIssue.js"

const commented = async (owner,repo) => {

  readFile(`./src/text/message.md`, async (err, message) => {
  
    if (err) throw err;

    try {
  
      const issues  = await search(owner,repo)
  
      for (const issue in issues) {
        
        if (Object.hasOwnProperty.call(issues, issue)) {
  
          const { issue_number } = issues[issue];
        
          const url = `/repos/${owner}/${repo}/issues/${issue_number}/comments`
        
          await comment(url,owner,repo,issue_number,message.toString("utf-8"))
           
        }
      }

      console.log("")
      console.log("=============================");
      console.log("")
      console.log("I already did my chores.")
      console.log("")
      console.log("=============================")
      console.log("")
  
    } catch (error) {
      console.log(error)
    }
    
  });
  
  process.on('uncaughtException',err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
  })  

  return 201

}

export default commented