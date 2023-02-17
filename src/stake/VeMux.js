import React,{useState} from 'react'
import LaunchYdexNav from '../navbar/LaunchYdexNav'
import StakeLeftSide from '../components/StakeLeftSide'
import aboutmcblogo6 from '../assets/about_mcb_logo.6.svg'
import { PieChart, Pie, Sector, Cell} from 'recharts'
import Button from '../components/Button'
export default function VeMux() {
    const [mobile,setMobile]=useState(true);
    return (
        <>
            <LaunchYdexNav />
            <div className="main pt-5" style={{ backgroundColor: "#040818", height: '160vh' }}>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-lg-2 stake-left  mt-5 px-4'>
                            <StakeLeftSide title='Ve Mux' />
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-5">
                            <div className="vemux-right-heading1">
                                <h4 style={{ color: "white" }}>veMUX Locked-Staking</h4>
                            </div>
                            <div className="vemux-content">
                                Lock MCB or MUX on Arbitrum to receive veMUX and earn protocol income (protocol fees and third-party DEX mining rewards) and
                                <br /> MUX rewards. Learn More VotingEscrow(veMUX): 0xA65b...7810
                            </div>
                            <div className='aboutmcb-cards'>
                                <div className='vemux-left-card' style={{ width: '50%' }}>
                                    <div class="card" style={{ height: '100%', backgroundColor: '#152033' }}>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between', padding: '4%'
                                            , backgroundColor: '#152033', borderRadius: '10px'
                                        }}>
                                            <div>
                                                <h6 style={{ color: 'white' }}>Create Lock</h6>
                                            </div>
                                            <div >
                                                <h6 style={{ color: '#2696e6' }}>Staking Steps</h6>
                                            </div>

                                        </div>
                                        <div><Button /></div>
                                        <div class="card-body">
                                            <div class="card mt-1" style={{ backgroundColor: '#0a1022'}}>
                                                <div class="card-body">
                                                    <p style={{ color: '#52628b' }} >Lock Amount</p>
                                                </div>
                                            </div>
                                            <div class="card mt-1" style={{ backgroundColor: '#0a1022' }}>
                                                <div class="card-body">
                                                    <p style={{ color: '#52628b' }} >Locked Until</p>
                                                </div>
                                            </div>
                                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                            <p style={{ color: '#52628b' }}>veMUX to Recieve</p>
                                            <p style={{ color: 'white',textAlign:'end' }}>0 veMux</p>
                                            </div>
                                            
                                            <div class="card mt-1" style={{ backgroundColor: '#192237' }}>
                                                <div class="card-body" style={{ color: '#52628b' }}>
                                                    The MCB will be locked until the week of the selected date and can’t be unlocked in advance.
                                                </div>
                                            </div>
                                            <button style={{ width: '100%' }} className='btn btn-primary mt-2'>Connect Wallet</button>
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
