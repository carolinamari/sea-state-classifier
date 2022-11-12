import React from 'react'

import './defaultButton.css'

const DefaultButton = ({ name, onClick }) => {
    return (
        <button className='default-button' onClick={onClick}>{name}</button>
    )
}

export default DefaultButton