import main from "../index";
import { test,expect } from "vitest";

test('should return 201', async () => { 

  const response = await main()
  expect(response).toBe(201)
 
},20000) 