import React from 'react'
import {BsPauseFill,BsFillPlayFill} from 'react-icons/bs'
import './Intro.css'
import { meal } from '../../constants'

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handlevideo = () => {
    setPlayVideo((prevplayVideo) => !prevplayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  
}

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        Loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handlevideo}
        >
          {
            playVideo
              ? <BsPauseFill  color="#fff" fontSize={30}/> 
              : <BsFillPlayFill color='#fff' fontSize={30}/>
          }
</div>
      </div>
    </div>
  )
}

export default Intro
