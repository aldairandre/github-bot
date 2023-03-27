import getInputs from "./src/input/index.js"
import comments from "./src/issues/comments.js"
import create_comment_pr from "./src/pull_requests/create_comment.js"

export default async function main() {

  try {
    
    const inputs = await getInputs()

    const { owner, repo } = inputs

    let response = await comments(owner,repo)
    await create_comment_pr(owner,repo)

    return response

  } catch (error) {
    console.log(error)  
  }
}

await main()