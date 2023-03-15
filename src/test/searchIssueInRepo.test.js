import search from "../searchIssueInRepo";
import { test,expect } from "vitest";

test('should retun an array with all issues', async () => {

  const owner = "florinpop17"
  const repo = "app-ideas"

  const issues = await search(owner,repo)
  
  expect(issues).toBeInstanceOf(Array)


},10000)
