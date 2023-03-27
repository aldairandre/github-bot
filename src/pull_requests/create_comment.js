import { readFile } from 'node:fs';
import search from "./search.js";
import comment from "../issues/commentIssue.js"
import validator from '../issues/checkIfComment.js';

const create_comment_pr = async (owner,repo) => {

  readFile(`./src/text/message.md`, async (err, message) => {
  
    if (err) throw err;

    try {
  
      const pulls  = await search(owner,repo)
  
      for (const pull in pulls) {
        
        if (Object.hasOwnProperty.call(pulls, pull)) {
  
          const { pull_number } = pulls[pull];

          if (await validator(owner,repo,pull_number)) {

            await comment(owner,repo,pull_number,message.toString("utf-8"))

            console.log(`commented in pull request ${pull_number}`)

          }else {
            console.log(`You already commented in pull request ${pull_number}`)
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

export default create_comment_pr