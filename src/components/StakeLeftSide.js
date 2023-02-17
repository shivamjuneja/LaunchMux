import React, { useEffect, useState } from 'react'

export default function StakeLeftSide(props) {
    const [colorHeading,setColorHeading]=useState(false);
    const [colorHeadingAboutMCB,setColorHeadingAboutMCB]=useState(false)
    const [colorHeadingVeMux,setColorHeadingVeMux]=useState(false)
    const [colorHeadingMUXLP,setColorHeadingMUXLP]=useState(false)
    const [colorHeadingMux,setColorHeadingMUX]=useState(false)

    useEffect(()=>{
        if(props.title==='Overview') {
            setColorHeading(true);
        }
        if(props.title==='About MCB')
        {
            setColorHeadingAboutMCB(true)
        }
        if(props.title==='Ve Mux')
        {
            setColorHeadingVeMux(true)
        }
        if(props.title==='MUXLP')
        {
            setColorHeadingMUXLP(true)
        }
        if(props.title==='MUX')
        {
            setColorHeadingMUX(true)
        }
    },[])

    return (
        <div>
            <div className="stake-heading mx-2">
                <h5>Overview</h5>
            </div>
            <div className="stake-side-list mt-4 mx-4">
                <div className="mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        data-v-d75abd96=""
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5ZM13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10ZM10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5Z"
                        ></path>
                    </svg>
                    <span className="mx-2" style={{color:colorHeading?'white':'#6678a9'}}>Overview</span>
                </div>
                <div className="mt-4">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-d75abd96=""
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 2C12 1.44772 12.4477 1 13 1C16.3137 1 19 3.68629 19 7C19 7.55228 18.5523 8 18 8C18 8 13.5523 8 13 8C12.4477 8 12 7.55228 12 7V2Z"
                        ></path>
                        <path d="M1.5 11C1.5 6.85786 4.85786 3.5 9 3.5C9.55228 3.5 10 3.94772 10 4.5V8C10 9 11 10 12 10H15.5C16.0523 10 16.5 10.4477 16.5 11C16.5 15.1421 13.1421 18.5 9 18.5C4.85786 18.5 1.5 15.1421 1.5 11Z"></path>
                    </svg>
                    <span className="mx-2 " style={{color:colorHeadingAboutMCB?'white':'#6678a9'}}>About MCB</span>
                </div>
            </div>

            <div className="stake-heading mx-2">
                <h5>Staking</h5>
            </div>
            <div className="stake-side-list mt-4 mx-4">
                <div className="mt-4">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-d75abd96=""
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.7647 2C3.68551 2 2 3.68551 2 5.76469V14.2353C2 16.3144 3.68551 18 5.76469 18H14.2353C16.3144 18 18 16.3144 18 14.2353V5.7647C18 3.68551 16.3144 2 14.2353 2H5.7647ZM8.49994 12.5C9.88065 12.5 10.9999 11.3807 10.9999 10C10.9999 8.61929 9.88065 7.5 8.49994 7.5C7.11923 7.5 5.99994 8.61929 5.99994 10C5.99994 11.3807 7.11923 12.5 8.49994 12.5ZM8.49994 14.5C10.6437 14.5 12.4373 13.001 12.8898 10.994C12.926 10.998 12.9627 11 12.9999 11H14.9999C15.5522 11 15.9999 10.5523 15.9999 10C15.9999 9.44772 15.5522 9 14.9999 9H12.9999C12.9627 9 12.926 9.00204 12.8898 9.006C12.4373 6.999 10.6437 5.5 8.49994 5.5C6.01466 5.5 3.99994 7.51472 3.99994 10C3.99994 12.4853 6.01466 14.5 8.49994 14.5Z"
                        ></path>
                    </svg>
                    <span className="mx-2" style={{color:colorHeadingVeMux?'white':'#6678a9'}}>veMux</span>
                </div>
                <div className="mt-4">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-d75abd96=""
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.7647 2C3.68551 2 2 3.68551 2 5.76469V14.2353C2 16.3144 3.68551 18 5.76469 18H14.2353C16.3144 18 18 16.3144 18 14.2353V5.7647C18 3.68551 16.3144 2 14.2353 2H5.7647ZM8.49994 12.5C9.88065 12.5 10.9999 11.3807 10.9999 10C10.9999 8.61929 9.88065 7.5 8.49994 7.5C7.11923 7.5 5.99994 8.61929 5.99994 10C5.99994 11.3807 7.11923 12.5 8.49994 12.5ZM8.49994 14.5C10.6437 14.5 12.4373 13.001 12.8898 10.994C12.926 10.998 12.9627 11 12.9999 11H14.9999C15.5522 11 15.9999 10.5523 15.9999 10C15.9999 9.44772 15.5522 9 14.9999 9H12.9999C12.9627 9 12.926 9.00204 12.8898 9.006C12.4373 6.999 10.6437 5.5 8.49994 5.5C6.01466 5.5 3.99994 7.51472 3.99994 10C3.99994 12.4853 6.01466 14.5 8.49994 14.5Z"
                        ></path>
                    </svg>
                    <span className="mx-2"  style={{color:colorHeadingMUXLP?'white':'#6678a9'}}>MUXLP</span>
                </div>
            </div>

            <div className="stake-heading mx-2">
                <h5>Vesting</h5>
            </div>
            <div className="stake-side-list mt-4 mx-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white" data-v-d75abd96=""><path d="M19 6V5C19 3.34315 17.6569 2 16 2H15C13.3431 2 12 3.34315 12 5V5V7" class="stroke-link" stroke="white" fill="none" stroke-width="2" stroke-linecap="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C2.34315 7 1 8.34315 1 10V15C1 16.6569 2.34315 18 4 18H14C15.6569 18 17 16.6569 17 15V10C17 8.34315 15.6569 7 14 7H4ZM7.5 12.5C7.5 11.6716 8.17157 11 9 11C9.82843 11 10.5 11.6716 10.5 12.5C10.5 13.3284 9.82843 14 9 14C8.17157 14 7.5 13.3284 7.5 12.5ZM9 9C7.067 9 5.5 10.567 5.5 12.5C5.5 14.433 7.067 16 9 16C10.933 16 12.5 14.433 12.5 12.5C12.5 10.567 10.933 9 9 9Z"></path></svg>
                    <span className="mx-2"  style={{color:colorHeadingMux?'white':'#6678a9'}}>Mux</span>
                </div>

            </div>
        </div>
    )
}
