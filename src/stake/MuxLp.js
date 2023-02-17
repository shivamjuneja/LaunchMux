import Button from '../components/Button'
import React from 'react'
import StakeLeftSide from '../components/StakeLeftSide'
import LaunchYdexNav from '../navbar/LaunchYdexNav'

export default function MuxLp() {
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
                            <div className="muxlp-right-heading1">
                                <h4 style={{ color: "white" }}>MUXLP Staking</h4>
                            </div>
                            <div className="muxlp-content" style={{ maxWidth: '864px',color:'#6678a9',fontSize:'15px' }}>
                                Stake MUXLP on Arbitrum to earn protocol income (protocol fees and third-party DEX mining rewards) and MUX rewards. Learn More
                            </div>
                            <div className='aboutmcb-cards'>
                                <div className='vemux-left-card mt-4' style={{ width: '50%' }} >
                                    <div class="card" style={{ height: '100%', backgroundColor: '#152033', padding: '23px', borderRadius: '16px' }}>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between'
                                            , backgroundColor: '#152033', borderRadius: '10px'
                                        }}>
                                            <div>
                                                <h5 style={{ color: 'white' }}>Staking Steps</h5>
                                            </div>
                                        </div>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between'
                                            , backgroundColor: '#152033', borderRadius: '10px', marginTop: '24px'
                                        }}>
                                            <div style={{ color: '#fff' }}>
                                                <p>
                                                    <span style={{ display: 'inline-block', background: '#373f5c', width: '20px', height: '20px', lineHeight: '20px', fontSize: '12px', textAlign: 'center', borderRadius: '50%' }}>1</span>
                                                    <span style={{ marginLeft: '8px' }}>Buy MUXLP</span>
                                                </p>
                                            </div>
                                            <div style={{ color: '#27a2f8' }}>
                                                <p>Buy MUXLP </p>
                                            </div>
                                        </div>
                                        <p style={{ color: '#6678a9', fontSize:'13px' }}>Please proceed to the next step if you have MUXLP tokens available.</p>

                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between'
                                            , backgroundColor: '#152033', borderRadius: '10px'
                                        }}>
                                            <div style={{ color: '#fff' }}>
                                                <p>
                                                    <span style={{ display: 'inline-block', background: '#373f5c', width: '20px', height: '20px', lineHeight: '20px', fontSize: '12px', textAlign: 'center', borderRadius: '50%' }}>2</span>
                                                    <span style={{ marginLeft: '8px' }}>Bridge MUXLP to Arbitrum</span>
                                                </p>
                                            </div>
                                            <div style={{ color: '#27a2f8' }}>
                                                <p>Use cBridge ↗</p>
                                            </div>
                                        </div>
                                        <p style={{ color: '#6678a9', fontSize:'13px' }}>MUX uses Arbitrum as the base chain to handle multi-chain liquidity managment and staking. Please bridge your MUXLP tokens to Arbitrum.</p>

                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between'
                                            , backgroundColor: '#152033', borderRadius: '10px'
                                        }}>
                                            <div style={{ color: '#fff' }}>
                                                <p>
                                                    <span style={{ display: 'inline-block', background: '#373f5c', width: '20px', height: '20px', lineHeight: '20px', fontSize: '12px', textAlign: 'center', borderRadius: '50%' }}>3</span>
                                                    <span style={{ marginLeft: '8px' }}>Stake MUXLP</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p style={{ color: '#6678a9', fontSize:'13px' }}>Stake MUXLP on Arbitrum to earn multiplexed protocol income (protocol fees and third-party DEX mining rewards) and MUX rewards.</p>
                                        <div class="card" style={{background: 'linear-gradient(90deg,#04a7b4,#4990c5)', borderRadius:'12px'}}>
                                            <div >
                                                <p className='mt-2' style={{ color: '#fff', textAlign: 'center', alignItems: 'center' }}>Stake MUXLP on Arbitrum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='aboutmcb-right-card mx-3 mt-4' style={{ width: '45%' }}>
                                    <div className='mb-3'>
                                        <div class="card for-mobile" style={{ backgroundColor: '#152033',borderRadius:'16px' }}>
                                            <div class="card-body">
                                                <h5 class="card-title" style={{ color: 'white' }}>MUXLP</h5>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ color: '#6678a9', marginTop: '24px', fontSize:'13px' }}>Stake APR</p>
                                                    </div>
                                                    <div>
                                                        <h5 style={{ color: '#00d8e2', marginTop: '24px' }}>38.74%</h5>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ color: '#6678a9', fontSize:'13px' }}>Price</p>
                                                    </div>
                                                    <div>
                                                        <p style={{ color: '#fff', fontSize:'13px'}}>$0.984</p>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ color: '#6678a9', fontSize:'13px' }}>Total Staked</p>
                                                    </div>
                                                    <div>
                                                        <p style={{ color: 'white', fontSize:'13px' }}>14,001,141 MUXLP</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="card for-mobile" style={{ backgroundColor: '#152033',borderRadius:'16px' }} >
                                            <div class="card-body">
                                                <h5 class="card-title" style={{ color: 'white' }}>Your MUXLP</h5>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ color: '#6678a9', marginTop: '24px', fontSize:'15px' }}>Multi-Chain Balance</p>
                                                    </div>
                                                    <div>
                                                    <p style={{ color: 'white', marginTop:'24px', fontSize:'15px'}}>0.00 MUXLP</p>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ color: '#6678a9', fontSize:'15px'}}>You Staked</p>
                                                    </div>
                                                    <div>
                                                    <p style={{ color: 'white', fontSize:'15px' }}>0.00 MUXLP</p>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ color: '#6678a9', fontSize:'15px' }}>Claimable Rewards</p>
                                                    </div>
                                                    <div>
                                                        <p style={{ color: 'white', fontSize:'15px' }}>$0.00</p>
                                                    </div>
                                                </div>
                                                <div class="card" style={{ backgroundColor: '#0e3346', borderRadius:'12px'}}>
                                                    <div >
                                                        <p className='mt-3' style={{ color: '#00d8e2', textAlign: 'center', alignItems: 'center' }}>Claim Rewards on Arbitrum</p>
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
