import React, { useState } from 'react'
import './Button.css'
const Button =(props) => {
 
    const [leftButton, setLeftButton] = useState(true)
    const [rightButton, setRightButton] = useState(false)
  
    const style = {
        // backgroundColor:'#041d2d',
        borderRadius: '12px'
    }
    const changeStyle = {
        backgroundColor: '#041d2d',
        borderRadius: '8px',
        border: '2px solid #00d8e2'
    }
    const clickHandlerLeft = () => {
        console.log('i m in left')
        setRightButton(false)
        setLeftButton(true)
        props.clickedButton(leftButton,rightButton)
    }
    const clickHandlerRight = () => {
        console.log('i m in right')
        setLeftButton(false)
        setRightButton(true)
        props.clickedButton(leftButton,rightButton)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div  className='left-button' onClick={clickHandlerLeft} style={leftButton ? changeStyle : style}>
                <p className='mx-4'>Traders</p>
            </div>
            <div  className='right-button' onClick={clickHandlerRight} style={rightButton ? changeStyle : style}>
                <p className='mx-4'>Positions</p>
            </div>
        </div>
    )

}
export default Button