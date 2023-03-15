import { test, expect } from "vitest";
import comments from "./src/comments"

test('should comment in all issues', async () => {

  const owner = "aldairandre"
  const repo = "github-bot"
  const body = "Bot commented"

  const response = await comments(owner,repo,body)
  
  expect(response).toBe(201)

},200000)
