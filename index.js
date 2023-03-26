import getInputs from "./src/input/index.js"
import comments from "./src/issues/comments.js"

export default async function main() {

  try {
    
    const inputs = await getInputs()

    const { owner, repo } = inputs

    let response = await comments(owner,repo)

    return response

  } catch (error) {
    console.log(error)  
  }
}

await main()