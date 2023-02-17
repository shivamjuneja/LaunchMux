import React from 'react'
import StakeLeftSide from '../components/StakeLeftSide'
import LaunchYdexNav from '../navbar/LaunchYdexNav'

export default function Mux() {
    return (
        <>
            <LaunchYdexNav />
            <div className="main pt-5" style={{ backgroundColor: "#040818", height: '160vh' }}>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-lg-2 stake-left  mt-5 px-4'>
                            <StakeLeftSide />
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-5">
                            <div className="mux-right-heading1">
                                <h4 style={{ color: "white" }}>MUX Vesting</h4>
                            </div>
                            <div className="mux-content" style={{color:'#6678a9'}}>
                                Convert MUX to MCB through the Quota and/or Capacity channels. Learn More
                                <br />Please read vesting details before using this feature.
                            </div>
                            <div className='aboutmcb-cards'>
                                <div className='aboutmcb-left-card' style={{ width: '50%' }}>
                                    <div class="card aboutmcb-card-inside" style={{ backgroundColor: '#152033', marginTop: '24px', borderRadius: '16px' }}>
                                        <div style={{
                                            padding: '24px'
                                            , backgroundColor: '#182f47', borderRadius: '16px'
                                        }}>
                                            <h6 style={{ color: 'white' }}>Quota Channel</h6>
                                            <p style={{ color: '#6678a9', fontSize: '14px', marginTop: '24px' }}>Vest MUX allowed by quota. The quota increases as<br /> veMUX generate new MUX and decreases as MUX <br />converts into MCB.</p>
                                        </div>
                                        <div class="card-body">
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ color: '#6678a9', marginTop: '20px', fontSize: '13px' }}>Quota</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: 'white', marginTop: '20px', fontSize: '13px' }}>0.00 MUX</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ color: '#6678a9', fontSize: '13px' }}>Vesting Progress</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: 'white', fontSize: '13px' }}>0.00 / 0.00 MUX</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ color: '#6678a9', fontSize: '13px' }}>Claimable</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: 'white', fontSize: '13px' }}>0.00 MCB</p>
                                                </div>
                                            </div>
                                            <div class="mb-4" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '45px', alignItems: 'center' }}>
                                                <div style={{ background: 'linear-gradient(90deg,#04a7b4,#4990c5)', borderRadius: '12px', width: '48%' }}>
                                                    <p className='mt-2' style={{ color: '#fff', textAlign: 'center', alignItems: 'center' }}>Vest</p>
                                                </div>
                                                <div style={{ backgroundColor: '#0e3346', borderRadius: '12px', width: '48%' }}>
                                                    <p className='mt-2' style={{ color: '#00d8e2', textAlign: 'center', alignItems: 'center' }}>Claim MCB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='aboutmcb-right-card mx-3' style={{ width: '45%' }}>
                                    <div class="card aboutmcb-card-inside" style={{ backgroundColor: '#152033', marginTop: '24px', borderRadius: '16px' }}>
                                        <div style={{
                                            padding: '24px'
                                            , backgroundColor: '#182f47', borderRadius: '16px'
                                        }}>
                                            <h6 style={{ color: 'white' }}>Capacity Channel</h6>
                                            <p style={{ color: '#6678a9', fontSize: '14px', marginTop: '24px' }}>Vest MUX allowed by capacity. The capacity is<br/> determined by staked MUXLP and won’t change if your MUXLP remain staked.</p>
                                        </div>
                                        <div class="card-body">
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ color: '#6678a9', marginTop: '20px', fontSize: '13px' }}>Capacity</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: 'white', marginTop: '20px', fontSize: '13px' }}>0.00 MUX</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ color: '#6678a9', fontSize: '13px' }}>Vesting Progress</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: 'white', fontSize: '13px' }}>0.00 / 0.00 MUX</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ color: '#6678a9', fontSize: '13px' }}>Reserved MUXLP</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: 'white', fontSize: '13px' }}>0.00 MUXLP</p>
                                                </div>
                                            </div>
                                            {/* <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}} >
                                                <div style={{position:'relative'}}>
                                                    <div style={{color:'#6678a9',marginBottom:'12px',display:'flex', alignItems:'center'}} >Vesting Progress
                                                        <div class="line top" style={{marginLeft:'4px',flex:'1 1 0%', minWidth:'2em', height:'0px',borderBottom:'1px dotted var(--muxing-text-color)',position: 'relative'}}>
                                                        </div>
                                                    </div>
                                                    <div style={{color:'#6678a9',marginBottom:'12px',display:'flex', alignItems:'center'}} >
                                                        <span >Reserved MUXLP</span>
                                                        <div style={{marginLeft:'4px',flex:'1 1 0%', minWidth:'2em', height:'0px',borderBottom:'1px dotted var(--muxing-text-color)',position: 'relative'}}></div>
                                                    </div>
                                                    <div class="help" >
                                                        <i class="iconfont icon-qestion" ></i>
                                                    </div>
                                                </div>
                                                <div class="values" >
                                                    <div class="value" >
                                                        <span class="tooltip-element__white" >0.00 / 0.00 MUX</span>
                                                    </div>
                                                    <div class="value" >0.00 MUXLP</div>
                                                </div>
                                            </div> */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ color: '#6678a9', fontSize: '13px' }}>Claimable</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: 'white', fontSize: '13px' }}>0.00 MCB</p>
                                                </div>
                                            </div>
                                            <div class="mb-4" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', alignItems: 'center' }}>
                                                <div style={{ background: 'linear-gradient(90deg,#04a7b4,#4990c5)', borderRadius: '12px', width: '48%' }}>
                                                    <p className='mt-2' style={{ color: '#fff', textAlign: 'center', alignItems: 'center' }}>Vest</p>
                                                </div>
                                                <div style={{ backgroundColor: '#0e3346', borderRadius: '12px', width: '48%' }}>
                                                    <p className='mt-2' style={{ color: '#00d8e2', textAlign: 'center', alignItems: 'center' }}>Claim MCB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
