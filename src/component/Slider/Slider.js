import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import './Slider.css'
const Slider = () => {
    let reactSwipeEl;

  return (
    <div>
         <div>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={el => (reactSwipeEl = el)}
            >
                 <img src="images/dress1.jpg" className="img" alt="loading..."/> 
                 <img src="images/dress2.webp" className="img" alt="loading..."/> 
                 <img src="images/dress3.jpg" className="img" alt="loading..."/> 
            </ReactSwipe>
            <div className='btn'>
            <button onClick={() => reactSwipeEl.prev()} className='button'>Previous</button>
            <button onClick={() => reactSwipeEl.next()} className='button'>Next</button>
           
          

            </div>
            </div>
    </div>
  )
}

export default Slider
