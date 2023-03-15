import comments from "./src/comments.js"

const owner = "aldairandre"
const repo = "github-bot"
const body = "Bot commented"

export default async function main() {

  try {
    
    let response = await comments(owner,repo,body)
    
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