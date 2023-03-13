import comment from './src/commentIssue.js';
import searchIssues from './src/searchIssueInRepo.js';
//import getAuth from './src/getAuth.js'

/* const owner = "florinpop17"
const repo = "app-ideas"
const body = "Bot commented" */

const owner = "aldairandre"
const repo = "github-bot"
const body = "Bot commented"

const url = "/repos/aldairandre/github-bot/issues"
//const url2 = "/repos/florinpop17/app-ideas/issues"

const issues = await searchIssues(url,owner,repo)
let commented = false;

for (const issue in issues) {
  if (Object.hasOwnProperty.call(issues, issue)) {
    const { issue_number } = issues[issue];

    const url = `/repos/${owner}/${repo}/issues/${issue_number}/comments`

    await comment(url,owner,repo,issue_number,body)

    commented = true
  }
}



console.log("")
console.log("=============================");
console.log("")

if(commented && issues.length >= 2){
  console.log(`I just finish my task, commented in ${issues.length} issues`)
}if (commented && issues.length === 1) {
  console.log(`I just finish my task, commented in ${issues.length} issue`)
} else {
  console.log("No tasks to do")
}

console.log("")
console.log("=============================")