import { ListGroup } from "react-bootstrap"
import { useEffect, useRef } from 'react';
import anime from 'animejs'

function Javalist(props: {javaValue:string[]}) {

    const javaGroupRef = useRef(null )
    const {javaValue} = props

    useEffect(() => {
        // Fade in animation configuration
        if(javaGroupRef.current){
          anime.timeline({
           loop: false
          })
          
        .add({
          targets: javaGroupRef.current.children,
          opacity: [0, 1],
          width:'10%',
        //   duration: 1000, // Animation duration in milliseconds
          easing: 'easeOutQuad', // Animation easing function
          direction: 'alternate',
          loop: true,
        //   delay: anime.stagger(600), // Delay between animations for each item
        })
        
    
    
      }
    }, [javaValue]);





  return (
    <div>
         <ListGroup horizontal ref={javaGroupRef}>
            {javaValue.map((javaValuesm, index)=>{
                return <ListGroup.Item key={index}>{javaValuesm}</ListGroup.Item>
            })}
            </ListGroup>   


    </div>
  )
}

export default Javalist