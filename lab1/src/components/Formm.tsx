
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import List from './List'


function Formm() {

    const [message, setMessage] = useState('')
    const [splitted, setSplitted] = useState<string[]>([]);
   

    const handleChange = (event)=>{
        setMessage(event.target.value)
        
    }

    const handleClick = ()=>{
        const modifiedString = labFunction(message)
        setSplitted(modifiedString)
    }

    const labFunction = (word)=>{
      let modifiedString = ''

        for(let i=0;i<word.length;i++){
        if(word[i] === "(" || word[i] === ")"){
          modifiedString += ' ' + word[i] + ' ' 
        }
        else{
            modifiedString += word[i]
        }
 
     
        // console.log(indexPerenthesis)
        }

        console.log(modifiedString)
        let splitted = modifiedString.split(" ")
        console.log(splitted)
        return splitted
        // let wordSeparated = word.split(" ")
        // let indexParenthesis = wordSeparated.indexOf("(")

        // console.log(wordSeparated[indexParenthesis])
        // console.log(wordSeparated)

    }

   
  return (
    <div>
        <Form>
            <Form.Group className='mb-3' controlId='form1' >
            <Form.Label>Input Text Here</Form.Label>
                <InputGroup>
        
            <Form.Control type='text' value={message} onChange={handleChange} placeholder='Place assignment query here'/>
            <Button variant='outline-secondary' onClick={handleClick}>Check it Out</Button>
            </InputGroup>
            </Form.Group>
        </Form>
        <List splittedData = {splitted}/>
        </div>
  )
  

}

export default Formm