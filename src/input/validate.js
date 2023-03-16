import {exit} from "node:process"

const validate = (inputs) => {

  for (const input in inputs) {

    if (Object.hasOwnProperty.call(inputs, input)) {

      if(inputs[input].length <= 0){

        throw new Error("Not leaked data")
        exit(0)
      }
      
    }
  }
  return inputs

}

export default validate