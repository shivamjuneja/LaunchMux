import React from 'react'
import MUXLP from '../assets/MUXLP.svg'
import PieChart from './PieChart'
import './LiquidityCard.css'
export default function LiquidityCard(props) {
  return (
    <div className='liquidity-main' >
      <div className="card mx-1 liquidity-card" style={{ width: '50%', backgroundColor: '#183249' }}>
        <div className="card-body">

          <div class="card-title" style={{ display: 'flex' }}>
            <img style={{ width: '10%' }} src={MUXLP} />
            <h4 className='mx-2' style={{ color: 'white' }}>Card title</h4>
          </div>
          <div class="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='card-left'>
              <p>Stack Apr</p>
              <p>Price</p>
              <p>Total Supply</p>
              <p>Total Staked</p>
              <p>MUXLP Pool Value</p>
              <p>Protocol Owned</p>
              <button className='btn btn-primary'>Buy / MUXLP</button>
            </div>
            <div className='card-right' style={{ textAlign: 'end' }}>
              <p>35.8%</p>
              <p>0.292</p>
              <p>Total Supply</p>
              <p>Total Staked</p>
              <p>MUXLP Pool Value</p>
              <p>Protocol Owned</p>
              <button className='btn btn-primary'>Buy / MUXLP</button>

            </div>
          </div>

        </div>
      </div>

      <div class="card mx-1 liquidity-card" style={{ width: '50%', backgroundColor: '#183249' }}>
        <div class="card-body">

          <div class="card-title" style={{ display: 'flex' }}>
            <h4 className='mx-2' style={{ color: 'white' }}>Liquidity Multiplexing</h4>
          </div>
          <div class="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='card-left' style={{marginTop:'auto',marginBottom:'auto'}}>
              <PieChart />
            </div>
            <div className='card-right' style={{ textAlign: 'end' }}>
              <p>35.8%</p>
              <p>0.292</p>
              <p>Total Supply</p>
              <p>Total Staked</p>
              <p>MUXLP Pool Value</p>
              <p>Protocol Owned</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
