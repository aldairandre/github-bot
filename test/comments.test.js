import { test, expect } from "vitest";
import comments from "../src/issues/comments"

test('should comment in all issues', async () => {

  const owner = "aldairandre"
  const repo = "github-bot"

  const response = await comments(owner,repo)
  
  expect(response).toBe(201)

},200000)
