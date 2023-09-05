
import { ListGroup} from 'react-bootstrap'

function PythonList(props: {pythonValue:string[]}) {

    const {pythonValue} = props
  return (
    <div>
        <ListGroup horizontal>
        {pythonValue.map((currPython, currIndex) =>{
            return <ListGroup.Item key={currIndex}>{currPython}</ListGroup.Item>
        })}
        </ListGroup>
    </div>
  )
}

export default PythonList