import React from 'react'

import './tutorialStepBlock.css'
import placeholder from '../../assets/placeholder.png'

const TutorialStepBlock = ({ textFirst, stepNumber, stepText }) => {
    const text = <>
        <div className='step-description'>
            <div className='step-number'>{stepNumber}</div>
            <p className='step-text'>{stepText}</p>
        </div>
    </>

    const img = <>
        <div className='step-img-wrapper'>
            <img className='step-img' src={placeholder} alt=''></img>
        </div>
    </>

    return (
        <div className='step-wrapper'>
            {textFirst ? <>{text} {img}</> : <>{img} {text}</> }
        </div>
    )
}

export default TutorialStepBlock