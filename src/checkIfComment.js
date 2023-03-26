import octokit from './octokit.js'

const validator = async (owner,repo,issue_number) => {
  
  try {

    const comments = await octokit.rest.issues.listComments({
      owner : owner,
      repo : repo,
      issue_number : issue_number
    })

    const { data } = comments

    if(data.length === 0){
      return true
    }else {
     
      for (const issue in data) {
        if(data[issue].user.login === owner) {
          return false
        }
      } 
      return true
    }

  } catch (error) {
    console.log(error)
  }

}

export default validator