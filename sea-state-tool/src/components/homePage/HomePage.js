import React from 'react'

import './homePage.css'
import { TITLE, DESCRIPTION, START_BUTTON_NAME, TUTORIAL_TITLE, TUTORIAL_STEP_1, TUTORIAL_STEP_2, TUTORIAL_STEP_3, TUTORIAL_STEP_4 } from '../../utils/constants'
import placeholder from '../../assets/placeholder.png'
import DefaultButton from '../defaultButton/DefaultButton'
import TutorialStepBlock from '../tutorialStepBlock/TutorialStepBlock'

const HomePage = () => {

    const onClickHandler = (e) => {
        e.preventDefault();
        window.location.href='/tool';
    }

    return (
        <>
            <div className='intro-section'>
                <div className='intro-text'>
                    <h1 className='home-title'>{TITLE}</h1>
                    <p className='home-description'>{DESCRIPTION}</p>
                    <DefaultButton name={START_BUTTON_NAME} onClick={onClickHandler} />
                </div>
                <div className='intro-img-wrapper'>
                    <img className='intro-img' src={placeholder} alt=''></img>
                </div>
            </div>
            <div className='tutorial-section'>
                <h2 className='tutorial-subtitle'>{TUTORIAL_TITLE}</h2>
                <TutorialStepBlock textFirst={false} stepNumber='1' stepText={TUTORIAL_STEP_1} />
                <TutorialStepBlock textFirst={true} stepNumber='2' stepText={TUTORIAL_STEP_2} />
                <TutorialStepBlock textFirst={false} stepNumber='3' stepText={TUTORIAL_STEP_3} />
                <TutorialStepBlock textFirst={true} stepNumber='4' stepText={TUTORIAL_STEP_4} />
            </div>
        </>
    )
}

export default HomePage