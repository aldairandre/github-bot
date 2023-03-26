import { test, expect } from "vitest";
import { readFile } from 'node:fs'
import comment from "../src/issues/commentIssue";
import search from "../src/issues/searchIssueInRepo";
test('should a comment', async () => {

  const owner = "aldairandre"
  const repo = "github-bot"
  let response
  
  const issues = await search('aldairandre','github-bot')

  const { issue_number } = issues[0]
  
  const url = `/repos/${owner}/${repo}/issues/${issue_number}/comments`

  readFile('./src/text/message.md',async (err,massage) => {

    if(err) throw err

    await comment(owner,repo,issue_number,massage.toString("utf8"))
    
  })
  
  response = 201

  expect(response).toBe(201)
  
},100000)
