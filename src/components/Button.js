import React from 'react';
import './Button.css';


export const Button = ({ chartValuesP }) => {
                 
    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          const sendUp = () => chartValuesP(text)
          sendUp();
        };
        reader.readAsText(e.target.files[0])
      }


    return (
        <form> 
            <input 
                type='file' 
                name='filename' 
                id='file-upload'
                onChange={showFile} 
                style={{ display: 'none' }} 
            />
            <label className={`btn btn--outline`} for="file-upload">
                Upload
            </label>
        </form>
    )
};
