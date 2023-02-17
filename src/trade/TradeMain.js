import React from 'react';
import './TradeMain.css';
import Eth from "../assets/Eth.jpeg";
import icon from "../assets/icon.svg";
import sliderdot from "../assets/sliderdot.svg";
import loading from "../assets/loading.png";

export default function TradeMain() {
    return (
        <div className='trade-page-body'>
            <div className="trade-main router-view">
                <div className="layout-container" id='grid-temp'>
                    <div className="liquidity-source-verify-mask statistics-chart-container">
                        <div className="view-container">
                            <div className="statistics-container">
                                <div className="trade-statistics">
                                    <div className="trade-statistics-container">
                                        <div className="left-container">
                                            <div className="price-market">
                                                <div className="market-info">
                                                    <div className="mux-image-viewer round" style={{ height: "32px", width: "32px" }}>
                                                        <div className="primary-image n-image n-image--preview-disabled" role="none">
                                                            <img id='primary-n-image' src={Eth} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="market-name">ETH</div>
                                                        <div >Up to 100X</div>
                                                    </div>
                                                    {/* <i className="bi bi-chevron-compact-down" ></i> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="#fff" className="bi bi-chevron-compact-down" viewBox="0 0 16 16" style={{ marginLeft: '15px' }}>
                                                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                    </svg>
                                                </div>
                                                <div className="box-divider">
                                                    <div className="price-source-tag">
                                                        <img src={icon} />
                                                    </div>
                                                </div>
                                                <div className="price-box">
                                                    <div className="price">1,662.3</div>
                                                    <div className="price-change is-blue"  >
                                                        <span  >(<span className="pn-number positive" >+ 0.88%</span>)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="infos" >
                                                <div className="divider" >
                                                </div>
                                                <div className="8h-funding"  >
                                                    <div className="sub-title tooltip-element__text-color" >
                                                        Est. 8H Funding (L/S)
                                                    </div>
                                                    <div className="value"  >
                                                        <span  >0.012% / 0.010%</span>
                                                    </div>
                                                </div>
                                                <div className="divider"  >
                                                </div>
                                                <div className="open-interest"  >
                                                    <div className="sub-title tooltip-element__text-color">
                                                        Long / Short (Aggregator)
                                                    </div>
                                                    <div className="value"  >
                                                        <span  >$2.16M / $274K</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-container"  >
                                            <div className="price-source"  >
                                                <div className="sub-title"  >Price Source</div>
                                                <div className="value"  >
                                                    <div className="drop-down-selector">
                                                        <span className="drow-down-selector-label">
                                                            <img src={icon} />
                                                            Auto Match
                                                            {/* <i className="bi bi-chevron-compact-down" ></i> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="#fff" className="bi bi-chevron-compact-down" viewBox="0 0 16 16" style={{ marginLeft: '15px' }}>
                                                                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="chart-container" style={{height:'50vh'}}>
                                <div className="index-chart">
                                    <div className="index-content">
                                        <div className="price-chart" >
                                            <div className="mux-loading" id='mux-loading-img'>
                                                <div className="mux-loading__mask" id='mux-loading-mask'>
                                                    <div className="mux-loading__item" id='mux-loading-item' >
                                                        <span className="mux-loading-icon" id='mux-loading-span-icon'>
                                                            <img className="loading-icon" src={loading} alt="" style={{ height: "24px", width: "24px" }} />
                                                        </span>
                                                    </div>
                                                    <div className="loading-text">Loading...</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="TV-chart" style={{ height: "50", width: "100%" }}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resizer-line">
                    </div><div className="position-order-container">
                        <div className="position-orders-history">
                            <div className="nav-bar" >
                                <div className="nav-left" >
                                    <div className="nav-item selected" >Positions </div>
                                    <div className="nav-item" >
                                        Open Orders </div>
                                    <div className="nav-item" >Trades </div>
                                </div>
                                <div className="nav-right" >
                                    <span className="label" >Label Positions</span>
                                    <div role="switch" aria-checked="true" className="n-switch n-switch--active n-switch--round n-switch--rubber-band" tabindex="0">
                                        <div className="n-switch__rail" aria-hidden="true">
                                            <div className="n-switch__button">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body" >
                                <div className="positions-container"  >
                                    <div className="positions" >
                                        <div className="table-head" >
                                            <div className="table-cell" >
                                            </div>
                                            <div className="table-cell" >Market</div>
                                            <div className="table-cell" >Size</div>
                                            <div className="table-cell" >
                                                <span className="tooltip-element__text-color" >Net Value</span>
                                            </div>
                                            <div className="table-cell" >Collateral</div>
                                            <div className="table-cell" >Entry Price</div>
                                            <div className="table-cell" >Mark Price</div>
                                            <div className="table-cell" >Liq. Price</div>
                                            <div className="table-cell" >PNL &amp; ROE</div>
                                            <div className="table-cell" >
                                            </div>
                                            <div className="table-cell" >Actions</div>
                                        </div>
                                        <div className="table-body" >
                                            <div className="connect-wallet" >
                                                <div className="text" >Please connect your wallet.</div>
                                                <button className="n-button n-button--default-type n-button--medium-type n-button--secondary round primary expand large connect-button" tabindex="0" type="button">
                                                    <span className="n-button__content">Connect Wallet</span>
                                                    <div aria-hidden="true" className="n-base-wave">
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                    </div>
                                    <div>
                                    </div>
                                    <div >
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="open-orders-container" style={{ display: "none" }}>
                                    <div className="open-orders">
                                        <div className="table-head" >
                                            <div className="table-cell">
                                            </div><div className="table-cell">Time</div>
                                            <div className="table-cell" >Market &amp; Side</div>
                                            <div className="table-cell" >Operation &amp; Type</div>
                                            <div className="table-cell" >Price</div>
                                            <div className="table-cell" >Amount</div>
                                            <div className="table-cell" >Collateral</div>
                                            <div className="table-cell" >Actions</div>
                                        </div>
                                        <div className="table-body" >
                                            <div className="connect-wallet" >
                                                <div className="text" >Please connect your wallet.</div>
                                                <button className="n-button n-button--default-type n-button--medium-type n-button--secondary round primary expand large connect-button" tabindex="0" type="button">
                                                    <span className="n-button__content">Connect Wallet</span>
                                                    <div aria-hidden="true" className="n-base-wave">
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="trade-history-container" style={{ display: "none" }}>
                                    <div className="tools" >
                                        <div className="filter-box" >
                                            <div className="mux-popover-selector" >
                                                <div className="options-label" >
                                                    <div >Period: 1 Week</div>
                                                    <i className="iconfont icon-down" ></i></div>
                                            </div>
                                            <div className="mux-popover-selector" >
                                                <div className="options-label"><div>Market: All</div>
                                                    <i className="iconfont icon-down"></i></div>
                                            </div>
                                            <div className="mux-popover-selector" >
                                                <div className="options-label">
                                                    <div>Type: All</div>
                                                    <i className="iconfont icon-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="period-info-box" >
                                            <div className="info-line" >
                                                <div className="label" >
                                                    <span >1W Volume</span>:
                                                </div>
                                                <div className="value" >
                                                    <span >$0</span>
                                                </div>
                                            </div>
                                            <div className="info-line" >
                                                <div className="label" >
                                                    <span className="tooltip-element__white" >1W PNL</span>:
                                                </div>
                                                <div className="value" >
                                                    <span className="pn-number"  >$0</span>
                                                </div>
                                            </div>
                                            <div className="info-line" >
                                                <div className="label" >
                                                    <span >1W Fees</span>:
                                                </div>
                                                <div className="value" >
                                                    <span >$0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade-history" >
                                        <div className="table-head" >
                                            <div className="table-cell" >
                                            </div>
                                            <div className="table-cell" >Time</div>
                                            <div className="table-cell" >Market</div>
                                            <div className="table-cell" >Operation</div>
                                            <div className="table-cell" >Side</div>
                                            <div className="table-cell" >Price</div>
                                            <div className="table-cell" >Amount</div>
                                            <div className="table-cell" >
                                                <span className="tooltip-element__text-color" >Fee</span>
                                            </div>
                                            <div className="table-cell" >Realized PNL &amp; ROE</div>
                                        </div><div className="table-body" >
                                            <div className="connect-wallet" >
                                                <div className="text" >Please connect your wallet.</div>
                                                <button className="n-button n-button--default-type n-button--medium-type n-button--secondary round primary expand large connect-button" tabindex="0" type="button">
                                                    <span className="n-button__content">Connect Wallet</span>
                                                    <div aria-hidden="true" className="n-base-wave">
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div ></div>
                                    <div  >
                                    </div>
                                    <div  >
                                    </div>
                                    <div  >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="node-status-viewer">
                <div className="left" >
                    <span className="status" ></span>
                    <span className="label" >
                        <a className="block" target="_blank" href="https://arbiscan.io/block/59117658" > 59117658 </a>
                    </span>
                </div>
            </div>
        </div >
    )
}
