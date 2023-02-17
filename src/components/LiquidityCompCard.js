import React from 'react'
import './LiquidityCompCard.css'
import ETH from '../assets/ETH.svg'
export default function LiquidityCompCard(props) {
    const cardData = [
        {
            img: ETH,
            title: 'ETH',
            price:'35.8%',
            totalPooled:'$411',
            weight:'31.67%',
            marginTradingUtilization:'24.51%'
        },
        {
            img: ETH,
            title: 'ETH',
            price:'35.8%',
            totalPooled:'$411',
            weight:'31.67%',
            marginTradingUtilization:'24.51%'
        },
        {
            img: ETH,
            title: 'ETH',
            price:'35.8%',
            totalPooled:'$411',
            weight:'31.67%',
            marginTradingUtilization:'24.51%'
        }
        
    ]
    return (
        // <div className='container'>
            <div className='row'>
            {cardData.map((item, index) => (
                <div key={index} className="liquidity-comp-card col-xl-6 col-md-6 card mx-1 mt-2" style={{ width: '48.8%', backgroundColor: '#183249' }}>
                    <div className="card-body">
                        <div className="card-title" style={{ display: 'flex' }}>
                            <img style={{ width: '10%' }} src={item.img} />
                            <h4 className='mx-2' style={{ color: 'white' }}>{item.title}</h4>
                        </div>
                        <div className="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='card-left'>
                                <p>Price</p>
                                <p>Total Pooled</p>
                                <p>Weight</p>
                                <p>Margin Trading Utilization</p>
                            </div>
                            <div className='card-right' style={{ textAlign: 'end' }}>
                                <p >{item.price}</p>
                                <p>{item.totalPooled}</p>
                                <p>{item.weight}</p>
                                <p>{item.marginTradingUtilization}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        // </div>
    )
}
