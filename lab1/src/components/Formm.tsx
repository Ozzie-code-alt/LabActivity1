
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { InputGroup } from 'react-bootstrap'
import { useState } from 'react'
function Formm() {

    const [message, setMessage] = useState('')

    const [update, setUpdate] = useState(message)

    const handleChange = (event)=>{
        setMessage(event.target.value)
        
    }

    const handleClick = ()=>{
        setUpdate(message)
        console.log(message)
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
        </div>
  )
}

export default Formm