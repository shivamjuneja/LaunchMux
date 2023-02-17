import React from 'react'
import StakeLeftSide from '../components/StakeLeftSide'
import LaunchYdexNav from '../navbar/LaunchYdexNav'
import aboutmcblogo6 from '../assets/about_mcb_logo.6.svg'
import './Stake.css'
export default function AboutMCB() {
    return (
        <>
            <LaunchYdexNav />

            <div className="main pt-5" style={{ backgroundColor: "#040818", height: '160vh' }}>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-lg-2  stake-left  mt-5 px-4'>
                            <StakeLeftSide title={'About MCB'} />
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-5">
                            <div className="aboutmcb-right-heading1">
                                <h4 style={{ color: "white" }}>About MCB</h4>
                            </div>
                            <div  className="aboutmcb-content" style={{color:'#6678a9',fontSize:'15px'}}>
                                MCB is the protocol’s main token. Holders can lock MCB to receive veMUX, then earn protocol
                                income(protocol fees and third-
                                <br />party DEX mining rewards) and MUX rewards. Learn More
                            </div>
                            <div className='aboutmcb-cards'>
                                <div className='aboutmcb-left-card' style={{ width: '50%' }}>
                                    <div class="card aboutmcb-card-inside" style={{ height: '100%', backgroundColor: '#152033' }}>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between', padding: '4%'
                                            , backgroundColor: '#182f47', borderRadius: '10px'
                                        }}>
                                            <div>
                                                <h6 style={{ color: 'white' }}>$7.62</h6>
                                                <p style={{ color: '#6678a9' }}>MCB price</p>
                                            </div>
                                            <div style={{ float: 'right' }}>
                                                <img src={aboutmcblogo6} />
                                            </div>

                                        </div>


                                        <div class="card-body">
                                            <div>
                                                <p style={{ color: '#6678a9',marginBottom:'0px' }}>Market Cap</p>
                                                <p style={{ color: 'white',marginBottom:'0px' }}>$29,051,956</p>
                                                <hr style={{ color: '#6678a9' }} />
                                            </div>
                                            <div>
                                                <p style={{ color: '#6678a9',marginBottom:'0px' }}>Market Cap</p>
                                                <p style={{ color: 'white',marginBottom:'0px' }}>$29,051,956</p>
                                                <hr style={{ color: '#6678a9' }} />
                                            </div>
                                            <div>
                                                <div style={{ color: '#6678a9',display:"flex",justifyContent:'space-between' }}>
                                                    <p style={{marginBottom:'0px'}}>Total Locked</p>
                                                    <p>Avg.Lock Time</p>
                                                </div>
                                                <p style={{ color: 'white' }}>$29,051,956</p>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar" style={{width:'70%'}}></div>
                                                </div>
                                            </div>
                                            <button style={{ width: '100%' }} className='btn btn-primary'>Buy MCB</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='aboutmcb-right-card mx-3' style={{ width: '45%' }}>
                                    <div className='mb-2'>
                                        <div class="card for-mobile" style={{ backgroundColor: '#152033' }}>
                                            <div class="card-body">
                                                <h5 class="card-title" style={{ color: 'white' }}>veMUX</h5>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ color: '#6678a9' }}>veMUX APR</p>
                                                        <p style={{ color: '#6678a9' }}>Total Supply</p>
                                                        <p style={{ color: '#6678a9' }}>veRate</p>
                                                    </div>
                                                    <div>
                                                        <p style={{ color: 'white' }}>$6.32%</p>
                                                        <p style={{ color: 'white' }}>1050859 veMUX</p>
                                                        <p style={{ color: 'white' }}>26.17%</p>
                                                    </div>
                                                </div>
                                                <div class="card" style={{ backgroundColor: '#1a2338' }}>
                                                    <div class="card-body">
                                                        <span style={{ color: 'white', fontSize: '.8rem' }}>Earn up to a 35% rebate </span>
                                                        <span style={{ color: '#6678a9', fontSize: '.8rem' }}>by inviting traders to trade on MUX. Referral Program</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="card for-mobile" style={{ backgroundColor: '#152033' }} >
                                            <div class="card-body">
                                                <h6 class="card-title" style={{ color: 'white' }}>About Locked-Staking & veMUX</h6>
                                                <p style={{ fontSize: '.8rem', color: '#6678a9' }} class="card-text">Lock MCB to receive veMUX and earn protocol income
                                                    <br /> and MUX rewards. Longer time locks will be allocated
                                                    <br /> with more distributed veMUX. Learn More</p>

                                                <div class="card" style={{ backgroundColor: '#0e3346' }}>
                                                    <div >
                                                        <p className='mt-2' style={{ color: '#00d8e2', textAlign: 'center', alignItems: 'center' }}>Lock MCB to Recieve veMUX</p>
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
            </div>
        </>
    )
}
