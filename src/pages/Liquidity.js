import React, { useState } from 'react'
import './Liquidity.css'
import MUXLP from '../assets/MUXLP.svg'

import LiquidityCard from '../components/LiquidityCard';
import LiquidityComposition from '../components/LiquidityComposition';
import LaunchYdexNav from '../navbar/LaunchYdexNav';
export default function Liquidity() {



    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    return (
        <>
        <LaunchYdexNav />
        <div className='pt-5'  style={{ background: '#050919', height: '300vh' }}>
            <div className='container'>
                <div className='row liquidity-row'>
                    <div className='liquidity-heading mt-5'>
                        <h3 style={{ color: 'white' }}>Liquidity Overview</h3>
                        <div class="dropdown">
                            <button onClick={myFunction} class="dropbtn">View Pool Address</button>
                            <div id="myDropdown" className="dropdown-content mt-1">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>

                    </div>
                    <div style={{ color: '#6678a9' }} className='liquidity-content mt-2'>
                        Provide liquidity through buying MUXLP, the protocol’s liquidity provider token.
                        Liquidity providers can stake MUXLP to earn <br /> protocol income(protocol fees and third-party DEX mining rewards) and MUX rewards. Learn More
                    </div>
                    <div className='mt-3'>
                        <LiquidityCard />
                    </div>
                    <div>
                        <LiquidityComposition />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
