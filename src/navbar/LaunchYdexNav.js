import React from 'react';
import ReactDOM  from 'react-dom';
import './LaunchYdexNav.css';
import arbitrum from "../assets/arbitrum.svg";
import navIcon from "../assets/navIcon.svg";
import icon from "../assets/icon.svg";
import logo from "../assets/logo.svg";

export default function LaunchYdexNav() {
    return ReactDOM.createPortal (
        <>
            <div className="header large-screen"  >
                <div className="left" >
                    <div className="logo" >
                        <a href="#" >
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="nav" >
                        <div role="menubar" className="n-menu n-menu--horizontal" >
                            <div role="menuitem" className="n-menu-item">
                                <div role="none" className="n-menu-item-content n-menu-item-content--selected">
                                    <a href='/'><div className="n-menu-item-content-header" role="none">Trade</div></a>
                                </div>
                            </div>
                            <div role="menuitem" className="n-menu-item">
                                <div role="none" className="n-menu-item-content">
                                    <a href='/Liquidity'><div className="n-menu-item-content-header" role="none">Liquidity</div></a>
                                </div>
                            </div>
                            <div role="menuitem" className="n-menu-item">
                                <div role="none" className="n-menu-item-content">
                                    <a href='/Stake'><div className="n-menu-item-content-header" role="none">Stake</div></a>
                                </div>
                            </div>
                            <div role="menuitem" className="n-menu-item">
                                <div role="none" className="n-menu-item-content">
                                    <a href='/LeaderBoard'><div className="n-menu-item-content-header" role="none">Leaderboard</div></a>
                                </div>
                            </div>
                            <div role="menuitem" className="n-menu-item">
                                <div role="none" className="n-menu-item-content">
                                    <a href='/Redeem'></a><div className="n-menu-item-content-header" role="none">Redeem</div>
                                </div></div><div role="menuitem" className="n-menu-item">
                                <div role="none" className="n-menu-item-content">
                                    <div className="n-menu-item-content-header" role="none">Stats</div>
                                </div></div><div role="menuitem" className="n-menu-item">
                                <div role="none" className="n-menu-item-content">
                                <a href='/Refferal'><div className="n-menu-item-content-header" role="none">Referral</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right" >
                    <div className="claim-button" >
                    </div>
                    <div className="fee-discount" >
                        <span className="fee-discount-wrapper" >🥳 Fees Discount!</span>
                        <div className="divider" >
                        </div>
                    </div>
                    <div className="chain" >
                        <div className="chain-viewer"  >
                            <div className="chain-name-box cursor-pointer-item" >
                                <div className="chain-name-wrapper" >
                                    <img src={arbitrum} alt="" />
                                    <span >Arbitrum</span>
                                    {/* <i className="bi bi-chevron-compact-down" ></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16" style={{ marginLeft: '15px' }}>
                                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider" >
                    </div>
                    <div className="wallet" >
                        <div  >
                            <div className="connect-wallet connect-bg" >Connect Wallet</div>
                            <div className="menu-viewer"  ></div>
                        </div>
                    </div>
                    <div className="divider" ></div>
                    <div className="menu" >
                        <div className="menu-viewer"  >
                            <div className="menu-box" >
                                <div className="icon-wrapper" >
                                    {/* <i class="bi bi-three-dots"></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="header is-mobile-size"  >
                <div className="left" >
                    <img className="nav-icon-mobile" src={navIcon} alt="" />
                    <div className="logo" >
                        <a href="#" >
                            <img src={icon} alt="" />
                        </a>
                    </div>
                </div>
                <div className="right" >
                    <div className="fee-discount" >
                        <span className="fee-discount-wrapper" >Discount</span>
                        <div className="divider" ></div>
                    </div>
                    <div className="chain" >
                        <div className="chain-viewer"  >
                            <div className="chain-name-box cursor-pointer-item" >
                                <div className="chain-name-wrapper" >
                                    <img src={arbitrum} alt="" />
                                    <i className="iconfont icon-down" ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider" ></div>
                    <div className="wallet" >
                        <div  >
                            <div className="connect-wallet connect-bg" >Connect Wallet</div>
                            <div className="menu-viewer"  ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("portal-nav")
    )
}
