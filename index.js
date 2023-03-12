import searchIssues from './src/searchIssueInRepo.js'


const url = "/repos/florinpop17/app-ideas/issues"
const url2 = "/repos/aldairandre/github-bot/issues"
const response = await searchIssues(url2)

console.log("")
console.log("=============================");
console.log("")
console.log(response)
console.log("")