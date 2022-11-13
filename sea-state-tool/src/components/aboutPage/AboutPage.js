import React from 'react'

import './aboutPage.css'
import placeholder from '../../assets/placeholder.png'
import { PROJECT_NAME, PROJECT_SUMMARY, MOTIVATION_SECTION_NAME, MOTIVATION_TEXT, OBJECTIVE_SECTION_NAME, OBJECTIVE_TEXT,METODOLOGY_SECTION_NAME, METODOLOGY_TEXT, RESULTS_SECTION_NAME, RESULTS_TEXT,TCC_INFO } from '../../utils/constants'

const AboutPage = () => {
    return (
        <div className='about-page'>
            <h1 className='project-name'>{PROJECT_NAME}</h1>
            <p className='project-summary'>{PROJECT_SUMMARY}</p>
            <div className='section-wrapper section-motivation'>
                <div className='text-motivation'>
                    <h2 className='section-title'>{MOTIVATION_SECTION_NAME}</h2>
                    { MOTIVATION_TEXT.split('\n').map(str => <p>{str}</p>) }
                </div>
                <div className='section-img-wrapper img-wrapper-motivation'>
                    <img className='section-img' src={placeholder} alt=''></img>
                </div>
            </div>
            <div className='section-wrapper section-objective'>
                <div className='section-img-wrapper img-wrapper-objective'>
                    <img className='section-img' src={placeholder} alt=''></img>
                </div>
                <div className='text-objective'>
                    <h2 className='section-title'>{OBJECTIVE_SECTION_NAME}</h2>
                    { OBJECTIVE_TEXT.split('\n').map(str => <p>{str}</p>) }
                </div>
            </div>
            <div className='section-wrapper section-metodology'>
                <div className='text-metodology'>
                    <h2 className='section-title'>{METODOLOGY_SECTION_NAME}</h2>
                    { METODOLOGY_TEXT.split('\n').map(str => <p>{str}</p>) }
                </div>
                <div className='section-img-wrapper img-wrapper-metodology'>
                    <img className='section-img' src={placeholder} alt=''></img>
                </div>
            </div>
            <div className='section-wrapper section-results'>
                <div className='text-results'>
                    <h2 className='section-title title-results'>{RESULTS_SECTION_NAME}</h2>
                    { RESULTS_TEXT.split('\n').map(str => <p>{str}</p>) }
                </div>
                <div className='section-img-wrapper img-wrapper-results'>
                    <img className='section-img' src={placeholder} alt=''></img>
                </div>
            </div>
            <div className='section-wrapper section-tcc'>
                <div className='section-img-wrapper img-wrapper-tcc'>
                    <img className='section-img' src={placeholder} alt=''></img>
                </div>
                <div className='text-tcc'>
                    { TCC_INFO.split('\n').map(str => <p>{str}</p>) }
                </div>
            </div>
        </div>
    )
}

export default AboutPage