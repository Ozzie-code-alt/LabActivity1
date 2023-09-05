import { ListGroup } from "react-bootstrap"

function Javalist(props: {javaValue:string[]}) {

    const {javaValue} = props
  return (
    <div>
         <ListGroup horizontal>
            {javaValue.map((javaValuesm, index)=>{
                return <ListGroup.Item key={index}>{javaValuesm}</ListGroup.Item>
            })}
            </ListGroup>   


    </div>
  )
}

export default Javalist