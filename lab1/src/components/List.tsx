
import { ListGroup } from 'react-bootstrap'

function List(props: {splittedData: string[]}) {

const {splittedData} = props

  return (
    <div>

        <ListGroup>
        {splittedData.map((listValue) =>{
            return <ListGroup.Item key={listValue}>{listValue}</ListGroup.Item>
        })}
        </ListGroup>
    </div>
  )
}

export default List