import React from 'react'
import { useState } from 'react'

import './toolPage.css'
import ImageUploadCard from '../imageUploadCard/ImageUploadCard';
import ImageClassificationCard from '../imageClassificationCard/ImageClassificationCard';
 

const ToolPage = () => {
    const [hasUploaded, setHasUploaded] = useState(false)
    const [imageURL, setImageURL] = useState(null)

    const classId = 1
    const classRange = '0 - 3'
    const description = 'Calmo a brisa fraca'
    const windSpeed = '0 - 5,4 m/s'
    const meanWaveHeight = '0 - 0,6 m'
    const seaAppearance = {
        from: 'Mar espelhado',
        to: 'Ondulações com cristas que ocasionalmente possuem espuma; rebentações mais frequentes.'
    }
    const probabilities = [{
        range: "Classes 0 - 3",
        p: 50
    },
    {
        range: "Classes 4 - 7",
        p: 40
    },
    {
        range: "Classes 8 - 12",
        p: 10
    }]

    return (
        <div className='tool-page'>
            {!hasUploaded ? 
                <ImageUploadCard setHasUploaded={setHasUploaded} setImageURL={setImageURL} /> : 
                <ImageClassificationCard setHasUploaded={setHasUploaded} imageURL={imageURL} classId={classId} classRange={classRange} description={description} windSpeed={windSpeed} meanWaveHeight={meanWaveHeight} seaAppearance={seaAppearance} probabilities={probabilities} />
            }
        </div>
    )
}

export default ToolPage