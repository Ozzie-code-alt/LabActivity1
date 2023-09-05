
import { ListGroup} from 'react-bootstrap'
import {useEffect, useRef} from 'react'
import anime from 'animejs'
function PythonList(props: {pythonValue:string[]}) {
    const {pythonValue} = props
    const pythonGroupRef = useRef(null)

    useEffect(() => {
        // Fade in animation configuration
        if(pythonGroupRef.current){
          anime.timeline({
           loop: false
          })
          
        .add({
          targets: pythonGroupRef.current.children,
          opacity: [0, 1],
          width:'10%',
        //   duration: 1000, // Animation duration in milliseconds
          easing: 'easeOutQuad', // Animation easing function
          direction: 'alternate',
          loop: true,
        //   delay: anime.stagger(600), // Delay between animations for each item
        })
        
    
    
      }
    }, [pythonValue]);
  return (
    <div>
        <ListGroup horizontal ref={pythonGroupRef}>
        {pythonValue.map((currPython, currIndex) =>{
            return <ListGroup.Item key={currIndex}>{currPython}</ListGroup.Item>
        })}
        </ListGroup>
    </div>
  )
}

export default PythonList