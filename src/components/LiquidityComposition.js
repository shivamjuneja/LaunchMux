import React from 'react'
import './LiquidityComposition.css'
import LiquidityCompCard from './LiquidityCompCard'

export default function LiquidityComposition() {

    

    return (
        <div style={{ backgroundColor: '#050919' }}>
            <div className='liquidity-composition-heading mt-5'>
                <h3 style={{ color: 'white' }}>Liquidity Composition</h3>
                <div style={{color:'#6678a9'}} className='liquidity-composition-content'>
                    The MUXLP pool consists of an assets portfolio; the assets are dynamically
                    allocated for margin trading and third-party DEX <br /> mining.
                </div>

            </div>

            <div className='liquidity-composition-card'>
                <LiquidityCompCard />
            </div>
        </div>

    )
}
