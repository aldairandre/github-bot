import { readFile } from 'node:fs';
import search from "./searchIssueInRepo.js";
import comment from "./commentIssue.js"
import validator from './checkIfComment.js';

const commented = async (owner,repo) => {

  readFile(`./src/text/message.md`, async (err, message) => {
  
    if (err) throw err;

    try {
  
      const issues  = await search(owner,repo)
  
      for (const issue in issues) {
        
        if (Object.hasOwnProperty.call(issues, issue)) {
  
          const { issue_number } = issues[issue];

          if (await validator(owner,repo,issue_number)) {
            
            await comment(owner,repo,issue_number,message.toString("utf-8"))

          }else {
            console.log(`You already commented in issue ${issue_number}`)
          }
           
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

//console.log(await comment('aldairandre','github-bot'))

export default commented