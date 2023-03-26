import search from "../src/issues/searchIssueInRepo";
import { test,expect } from "vitest";
test('should retrun an array with all issues', async () => {

  const owner = "aldairandre"
  const repo = "github-bot"

  const issues = await search(owner,repo)
  
  expect(issues).toBeInstanceOf(Array)

},10000)
