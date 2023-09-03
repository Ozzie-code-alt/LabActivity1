
import { ListGroup } from 'react-bootstrap'
import { useEffect, useRef } from 'react';
import anime from 'animejs'

function List(props: {splittedData: string[]}) {

const {splittedData} = props
const listGroupRef = useRef(null);

  useEffect(() => {
    // Fade in animation configuration
    if(listGroupRef.current){
      anime.timeline({
       loop: false
      })
      
    .add({
      targets: listGroupRef.current.children,
      opacity: [0, 1],
      duration: 5000, // Animation duration in milliseconds
      easing: 'easeOutQuad', // Animation easing function
      delay: anime.stagger(600), // Delay between animations for each item
    })
    
   .add({
    targets: listGroupRef.current.children,
    opacity: [1, 0],
    duration: 1000, // Animation duration in milliseconds
    direction: 'reverse', // Animation easing function
    delay: anime.stagger(600), // Delay between animations for each item
   });


  }
}, [splittedData]);



  return (
    <div>

        <ListGroup ref={listGroupRef}>
        {splittedData.map((listValue, index) =>{
            return <ListGroup.Item key={index} style={{ opacity: 0 }}>{listValue}</ListGroup.Item>
        })}
        </ListGroup>
    </div>
  )
}

export default List