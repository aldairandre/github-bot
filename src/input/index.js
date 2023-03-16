import pkg from 'enquirer';
import validate from './validate.js';

const { prompt } = pkg;

const main = async () => {
  try {
    
    const inputs = await prompt([
      {
        type : "input",
        name : "owner",
        message : "Owner of repositorio: "
      },
      {
        type : "input",
        name : "repo",
        message : "The repository name: "
      },
      {
        type : "input",
        name : "msg",
        message : "The Message: "
      }
    ])
    
    return validate(inputs)

  } catch (error) {
    console.log(error)
  }
}

export default main