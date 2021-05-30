import React from 'react'

export const GifGridItem = ( {url , title} ) => {
   
   
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s animate__slower">
            <img src={url} alt={title}></img>
            <p className='animate__animated animate__fadeIn'>{title}</p>
        </div>
    )
}
