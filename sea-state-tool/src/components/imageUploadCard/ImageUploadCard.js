import React from 'react'
import { useState, useRef } from 'react'

import './imageUploadCard.css'
import 'primeicons/primeicons.css';
import { UPLOAD_IMAGE_TITLE, SUPPORTED_FORMATS, DRAG_AND_DROP_TEXT, UPLOAD_IMAGE_BUTTON, MAX_FILE_NAME_LENGTH } from '../../utils/constants'
import { FileUpload } from 'primereact/fileupload';
import DefaultButton from '../defaultButton/DefaultButton';
import validateSelectedImage from '../../utils/validateSelectedImage'
import ImageUploadErrorModal from '../imageUploadErrorModal/ImageUploadErrorModal';


const ImageUploadCard = ({ setHasUploaded, setImageURL }) => {
    const [hasSelected, setHasSelected] = useState(false)
    const [error, setError] = useState(false)

    const fileUploadRef = useRef(null);

    const chooseOptions = { icon: 'pi pi-image', iconOnly: true, className: 'custom-button custom-choose-button' };
    const cancelOptions = { icon: 'pi pi-times', iconOnly: true, className: 'custom-button custom-cancel-button' };
    
    const buttonStyle = {
        fontWeight: 500,
        fontSize: '1.2vw'
    }

    const onErrorModalHide = () => {
        setError(false)
    }

    const headerTemplate = (options) => {
        const { chooseButton, cancelButton } = options;

        return (
            <div className='custom-buttons-container' style={ hasSelected ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                {chooseButton}
                {cancelButton}
            </div>
        );
    };

    const emptyTemplate = (props) => {
        return (
            <div className='empty-content-wrapper'>
                <div className='empty-content'>
                    <p className='empty-content-text'>{DRAG_AND_DROP_TEXT}</p>
                    <div>
                        <i className="pi pi-image empty-content-icon"></i>
                    </div>
                    <DefaultButton name={UPLOAD_IMAGE_BUTTON} onClick={() => fileUploadRef.current.getInput().click()} style={buttonStyle} />
                </div>
            </div>
        )
    }

    const itemTemplate = (file, props) => {
        return (
            <div className='item-content-wrapper'>
                <div className="item-content-summary">
                    <img alt={file.name} role="presentation" src={file.objectURL} className='item-preview' />
                    <div className="item-info">
                        <div className='item-name'>{file.name.length > MAX_FILE_NAME_LENGTH ? file.name.substring(0, MAX_FILE_NAME_LENGTH) + '...' : file.name}</div>
                        <div className='item-size'>{props.formatSize}</div>
                        <DefaultButton name='Classificar' onClick={onTemplateUpload} style={buttonStyle} />
                    </div>
                    
                </div>
            </div>
        );
    };

    const onTemplateSelect = (e) => {
        const file = e.files[0]
        if (validateSelectedImage(file)) {
            setImageURL(file.objectURL)
            setHasSelected(true)
        } else {
            fileUploadRef.current.clear()
            setError(true)
        }
    }

    const onTemplateRemove = (e) => {
        setHasSelected(false)
    }

    const onTemplateClear = (e) => {
        setHasSelected(false)
    }

    const onTemplateUpload = (e) => {
        // add logic to handle loader
        setHasUploaded(true)
        fileUploadRef.current.upload()
    }

    return (
        <div className='upload-card'>
            <h1 className='upload-card-heading'>{UPLOAD_IMAGE_TITLE}</h1>
            <p className='upload-card-formats'>{SUPPORTED_FORMATS}</p>
            <FileUpload
                ref={fileUploadRef}
                name="demo[]"
                url="./upload"
                accept="image/*"
                //maxFileSize={1000000}
                //onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}
                //onError={onTemplateClear}
                onClear={onTemplateClear}
                onRemove={onTemplateRemove}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                cancelOptions={cancelOptions}
            />
            <ImageUploadErrorModal error={error} onHide={onErrorModalHide} />
        </div>
    )
}

export default ImageUploadCard