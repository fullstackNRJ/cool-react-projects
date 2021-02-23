import React from 'react'

function Image({id, url}) {
    return (
        <div className='image_wrapper'>
            <img src={url} alt={id}/>
        </div>
    )
}

export default Image
