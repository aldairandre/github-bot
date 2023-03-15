import { test, expect } from "vitest";
import comment from "../src/commentIssue";
import search from "../src/searchIssueInRepo";
test('should a comment', async () => {

  const owner = "aldairandre"
  const repo = "github-bot"
  const body = "Bot commented"

  const issues = await search('aldairandre','github-bot')

  const { issue_number } = issues[0]

  const url = `/repos/${owner}/${repo}/issues/${issue_number}/comments`

  const response = await comment(url,owner,repo,issue_number,body)
  
  expect(response).toBe(201)
  
},100000)
