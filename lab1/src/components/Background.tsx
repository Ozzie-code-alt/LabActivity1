
import './Styles/background.css'
import anime from 'animejs';
import { useEffect } from 'react';
function Background() {

// splitted text
useEffect(() => {
  // Ensure the element with the class 'text' exists before accessing it
  const text = document.querySelector('.text');
  if (text && text.textContent !== null) {
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    anime.timeline({
      loop: true
    })
    
    .add({
      targets:'.text span',
      translateY:[-600,-0], //[start value, end value  -- documentation
      scale:[10,1],
      opacity:[0,1],
      easing:'easeOutExpo',
      duration:1500,
      delay:anime.stagger(100),

    })


    .add({
      targets:'.text span',
      translateX:[0,-1000], //[start value, end value  -- documentation
      scale:[1,1],
      opacity:[1,0],
      easing:'easeOutExpo',
      duration:2000,
      delay:anime.stagger(100),

    })


    .add({
      targets:'.text span',
      translateX:[1000,0], //[start value, end value  -- documentation
      scale:[1,1],
      opacity:[0,1],
      easing:'easeOutExpo',
      duration:2000,
      delay:anime.stagger(100),

    })

    .add({
      targets:'.text span',
      translateY:[0,0], //[start value, end value  -- documentation
      scale:[1,50],
      opacity:[1,0],
      easing:'easeOutExpo',
      duration:2000,
      delay:anime.stagger(100),

    })

  }
}, []); // Empty dependency array means this effect runs once after initial render

  return (
    <>
    <section>
      <h2 className='text' >Justin Santos Submission</h2>
    </section>
    </>
  )
}

export default Background