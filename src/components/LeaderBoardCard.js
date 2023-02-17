import React from 'react'
import './LeaderBoardCard.css'
export default function LeaderBoardCard() {
    const LeaderBoardCardData = [
        {
            account: '0xa5d0...c423', tradingVolume: '25530', averageLev: '96.1x', win: '8', loss: '2', pnlWFees: '+$11,791'
        },
        {
            account: '0xa5d0...c423', tradingVolume: '25530', averageLev: '96.1x', win: '8', loss: '2', pnlWFees: '+$11,791'
        }

    ]
    return (
        <div>
            <div class="card leaderboardcard-main" style={{ margin: '0px' }}>
                <div class="card-header leaderboard-card-header" style={{ backgroundColor: '#040818' }}>
                    <div className='col-lg-2' style={{ padding: '0px' }}><center>Account</center></div>
                    <div className='col-lg-2' style={{ padding: '0px' }}><center>Trading Volume</center></div>
                    <div className='col-lg-2' style={{ padding: '0px' }}><center>Average Lev</center></div>
                    <div className='col-lg-2' style={{ padding: '0px' }}><center>Win</center></div>
                    <div className='col-lg-2' style={{ padding: '0px' }}><center>Loss</center></div>
                    <div className='col-lg-2' style={{ padding: '0px' }}><center>PNL w.Fees</center></div>
                </div>
                {LeaderBoardCardData.map((item, index) => (
                    <div key={index} class="card-body leaderboard-card-body" style={{ backgroundColor: '#101b2e' }}>
                        <div className='row'>
                            <div className='col-lg-2' style={{ padding: '0px' }}><center>{item.account}</center></div>
                            <div className='col-lg-2' style={{ padding: '0px' }}><center>{item.tradingVolume}</center></div>
                            <div className='col-lg-2' style={{ padding: '0px' }}><center>{item.averageLev}</center></div>
                            <div className='col-lg-2' style={{ padding: '0px' }}><center>{item.win}</center></div>
                            <div className='col-lg-2' style={{ padding: '0px' }}><center>{item.loss}</center></div>
                            <div className='col-lg-2' style={{ padding: '0px' }}><center>{item.pnlWFees}</center></div>
                        </div>
                    </div>

                ))}
            </div>


            {/* ***************************************MOBILE SCREEN************************************* */}

            <div className='leaderboardcard-main-mobile'>
                <div class="card" style={{ backgroundColor: '#0f1528' }}>
                    {LeaderBoardCardData.map(() => (
                        <div class="card-body">
                            <h4 style={{ color: 'white' }} class="card-title">0xa5dao</h4>
                            <div class="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='card-left-mobile'>
                                    <p style={{ color: '#6678a9' }}>Volume & Lev.</p>
                                    <p style={{ color: '#6678a9' }}>Win/Loss</p>
                                    <p style={{ color: '#6678a9' }}>PNL w. Fees</p>
                                </div>
                                <div className='card-right-mobile'>
                                    <p>@25</p>
                                    <p>8/2</p>
                                    <p>+$11</p>
                                </div>
                            </div>
                            <hr />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
