import { test, expect } from "vitest";
import octokit from "../octokit";
import comment from "../commentIssue";
import search from "../searchIssueInRepo";


test('should a comment', async () => {

  const owner = "aldairandre"
  const repo = "github-bot"
  const body = "Bot commented"

  const issues = await search('aldairandre','github-bot')
  const issue_number = issues[0].issue_number
  const url = `/repos/${owner}/${repo}/issues/${issue_number}/comments`

  const response = await comment(url,owner,repo,issue_number,body)
  
  expect(response).toBe(201)
  
},100000)
