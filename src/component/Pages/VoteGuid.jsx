import React from 'react'

export default function VoteGuid() {
  return (
    <div className='container'>
 
           <h1 className='text-center text-light mb-5'>How Can You Vote To Your Party??<br/>Watch the video</h1>
            <video width="100%" height="auto" controls>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>


    </div>
  )
}
