
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Dropdown, InputGroup, OverlayTrigger, Stack, Tooltip } from 'react-bootstrap'
import { ChangeEvent, useState } from 'react'
import List from './List'
import PythonList from './PythonList'
import Javalist from './Javalist'


function Formm() {

  interface myObject {
    [key:string]: string
  }
    const [message, setMessage] = useState('')
    const [splittedHEHE, setSplitted] = useState<string[]>([]);


    const [dropdownString, setDropdown] = useState('')

    const objectAnswers: myObject ={
      "int": "Identifier",
      "let": "KeyWord",
      "=": "operator",
      "100": "integer",
      '(' : 'OpenParenthesis',
      ')': 'ClosedParenthesis',
      'sum': 'identifier',
      
    }



    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setMessage(event.target.value)
        
    }

    const handleClick = ()=>{
        const printAnswer = labFunction(message)
        setSplitted(printAnswer)
    }


    const labFunction = (word:string)=>{

      let modifiedString = ''
      let valueAdded = ''

        for(let i=0;i<word.length;i++){
        if(word[i] === "(" || word[i] === ")"){
          modifiedString += ' ' + word[i] + ' ' 
        }
        else{
            modifiedString += word[i]
        }
        // console.log(indexPerenthesis)
        }

        // console.log(modifiedString)
        let splitted = modifiedString.split(" ")
        console.log(splitted)

        splitted.forEach((value) =>{

         if(objectAnswers.hasOwnProperty(value)){
          valueAdded += ' ' + value + ":" + objectAnswers[value] + ' '
         }
         else if(value === "(" || value === ")" || value == "="){
          valueAdded+= ' ' + value +' '
         }
         else{
          valueAdded += value
         }
        })
        console.log(valueAdded)

        let heheWorks = valueAdded.split(" ")
        
        console.log(heheWorks)
        // console.log(splitted)
        return heheWorks
        // let wordSeparated = word.split(" ")
        // let indexParenthesis = wordSeparated.indexOf("(")

        // console.log(wordSeparated[indexParenthesis])
        // console.log(wordSeparated)
        
    }


    const UpdateButton = (btnName:string)=>{
        console.log(btnName)
        setDropdown(btnName)
    }

    const renderToolTip = (HEHEHE:string)=>{
     return <Tooltip id='tooltip'>{HEHEHE}</Tooltip>
    }


    const PythonTokenss = ['KeyWords', 'identifier', 'Literals', 'Delimiters', ' Operators']
    const JavaTokenss = ['KeyWords', 'identifier', 'Literals', ' Operators', 'Separator','Comments']
  return (
    <div>
        <Form>

            <Form.Group className='mb-3' controlId='form1'  >

              <Stack gap={3}>
            <Form.Label>Input Text Here</Form.Label>
            <Form.Label > { dropdownString  == 'Python' ? <PythonList pythonValue = {PythonTokenss}/> : dropdownString == 'Java' ? <Javalist javaValue = {JavaTokenss}/> : null }</Form.Label>
            </Stack>

                <InputGroup>
              <Dropdown>
                <Dropdown.Toggle variant='success' > 
                  {dropdownString ? dropdownString : 'Choose a Language'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <OverlayTrigger placement='right' overlay={renderToolTip('Python Tokens: \n Keywords \n identifier \n Literals \n Delimiters \n Operators')}>
                  <Dropdown.Item  onClick={() => UpdateButton('Python')}>Python</Dropdown.Item>
                  </OverlayTrigger>
                  
                  <OverlayTrigger placement='right' overlay={renderToolTip('Java Tokens:  \n Keywords \n identifier \n Literals \n Operators \n Separators \n Comments')}>
                  <Dropdown.Item onClick={()=> UpdateButton('Java')}>Java</Dropdown.Item>
                  </OverlayTrigger>
        
                </Dropdown.Menu>
              </Dropdown>
            <Form.Control type='text' value={message} onChange={handleChange} placeholder='Place assignment query here'/>
            <Button variant='outline-secondary' onClick={handleClick}>Check it Out</Button>
            </InputGroup>
            </Form.Group>
        </Form>
        <List splittedData = {splittedHEHE}/>
        </div>
  )
  


}

export default Formm