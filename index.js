import getInputs from "./src/input/index.js"
import comments from "./src/comments.js"
import { exit } from "node:process"

export default async function main() {

  try {
    
    const inputs = await getInputs()

    const { owner, repo, msg } = inputs

    let response = await comments(owner,repo,msg)
    
    console.log("")
    console.log("=============================");
    console.log("")
    console.log("I already did my chores.")
    console.log("")
    console.log("=============================")

    return response

  } catch (error) {
    console.log(error)  
  }
}

main()