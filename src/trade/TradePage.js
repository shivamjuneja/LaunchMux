import React from 'react';
import './TradePage.css'
import TradeLeftSideComp from './TradeLeftSideComp';
import TradeMain from './TradeMain';
import LaunchYdexNav from '../navbar/LaunchYdexNav';

export default function TradePage() {
  return (
    <>
    <LaunchYdexNav />
    <div className='container-fluid' style={{background:'#040818', height:'150%'}} >
        <div className='row'>
        <div className='col-xxl-9 col-xl-9' style={{padding:'0px'}}>
            <TradeMain/>
        </div>
            <div className='col-xxl-3 col-xl-3 left-container' style={{marginTop:'65px', paddingLeft:'0px', paddingRight:'0px', background:'#0f1529', height:'135%'}}>
            <TradeLeftSideComp/>
            </div>
        </div>
    </div>
    </>
  )
}
