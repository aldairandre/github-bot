import { Octokit } from "octokit";
import * as dotenv from 'dotenv'
dotenv.config()

const octokit = new Octokit({
  auth : process.env.GH_TOKEN
});


export default octokit;