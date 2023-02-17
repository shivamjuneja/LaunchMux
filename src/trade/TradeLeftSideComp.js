import React from 'react';
import './TradeLeftSideComp.css'
import Eth from "../assets/Eth.jpeg";
import icon from "../assets/icon.svg";
import sliderdot from "../assets/sliderdot.svg";

export default function TradeSideComp() {
    return (

        <div className="panel-container" style={{ color: "#fff" }} >
            <div className="trade-panel-adapter"  >
                <div className="trade-panel-container" >
                    <div  >
                        <div className="trade-panel-header" >
                            <div className="side-container" >
                                <div className="radio-button-group"  >
                                    <div className="radio-item selected blue" style={{ width: "40%" }} >Buy / Long</div>
                                    <div className="radio-item orange" style={{ width: "40%" }}>Sell / Short</div>
                                </div>
                            </div>
                            <div className="vertical-split-line" >
                            </div>
                            <div className="setting-container" >
                                <div className="setting-button" >
                                    {/* <i class="bi bi-bezier2"></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bezier2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="split-line" ></div>
                    <div className="trade-panel" >
                        <div className="form-container">
                            <div className="line1">
                                <div className="input-card trade-price weaken-card">
                                    <div className="project-tag">
                                        <img src={icon} />
                                    </div>
                                    <div className="label">Market Price </div>
                                    <div className="card-inner">
                                        <div className="number-input number-input__disabled" >
                                            <div className="input-prefix" >$</div>
                                            <div className="input-inner" >
                                                <input className="number-input__inner input-disabled" type="text" disabled="" placeholder="0.0" title="" inputmode="decimal" autocomplete="off" autocorrect="off" pattern="^[0-9]*[.,]?[0-9]*$" minlength="1" maxlength="79" spellcheck="false" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-card order-type input-card-hover">
                                    <div className="label">Order Type</div>
                                    <div className="card-inner">
                                        <div className="drop-down-selector" >
                                            <span className="drow-down-selector-label" >Market
                                                {/* <i className="bi bi-chevron-compact-down" ></i> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="#fff" className="bi bi-chevron-compact-down" viewBox="0 0 16 16" style={{ marginLeft: '15px' }}>
                                                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="line2">
                                <div className="s-line1">
                                    <div className="input-card input-card-hover">
                                        <div className="label">
                                            <span className="tooltip-element__text-color">Use</span>
                                            <div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div className="card-inner">
                                            <div className="number-input" >
                                                <div className="input-inner" >
                                                    <input className="number-input__inner" type="text" placeholder="0.0" title="" inputmode="decimal" autocomplete="off" autocorrect="off" pattern="^[0-9]*[.,]?[0-9]*$" minlength="1" maxlength="79" spellcheck="false" />
                                                </div>
                                            </div>
                                            <div className="select-item">
                                                <div className="mux-image-viewer round" style={{ height: "18px", width: "18px" }}>
                                                    <div className="primary-image n-image n-image--preview-disabled" role="none" >
                                                        <img width="18" height="18" src={Eth} loading="eager" data-error="false" />
                                                    </div>
                                                </div>
                                                ETH
                                                {/* <i className="bi bi-chevron-compact-down" ></i> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="#fff" className="bi bi-chevron-compact-down" viewBox="0 0 16 16" style={{ marginLeft: '15px' }}>
                                                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="arrow-item">
                                    {/* <i class="bi bi-arrow-down"></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" style={{ verticalAlign: 'baseline' }}>
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                    </svg>
                                </div>
                                <div className="s-line2">
                                    <div className="input-card input-card-hover">
                                        <div className="label">Long</div>
                                        <div className="card-inner">
                                            <div className="number-input" >
                                                <div className="input-inner" >
                                                    <input className="number-input__inner" type="text" placeholder="0.0" title="" inputmode="decimal" autocomplete="off" autocorrect="off" pattern="^[0-9]*[.,]?[0-9]*$" minlength="1" maxlength="79" spellcheck="false" />
                                                </div>
                                            </div>
                                            <div className="select-item">
                                                <div className="mux-image-viewer round">
                                                    <div className="primary-image n-image n-image--preview-disabled" role="none" >
                                                        <img width="18" height="18" src={Eth} loading="eager" data-error="false" style={{ objectFit: "fill" }} />
                                                    </div>
                                                </div>ETH
                                                {/* <i className="bi bi-chevron-compact-down" ></i> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="#fff" className="bi bi-chevron-compact-down" viewBox="0 0 16 16" style={{ marginLeft: '15px' }}>
                                                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-line3">
                                    <div className="leverage-slider" >
                                        <div className="label-line" >
                                            <div className="left" >Leverage: 10.0x</div>
                                            <div className="right" >Shortcut
                                                <div role="switch" aria-checked="false" className="n-switch n-switch--round n-switch--rubber-band" tabindex="0">
                                                    <div className="n-switch__rail" aria-hidden="true"><div className="n-switch__button"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="operate-line" >
                                            <div className="left input-leverage" >
                                                <div className="number-input input-card-hover" >
                                                    <div className="input-inner" >
                                                        <input className="number-input__inner" type="text" placeholder="" title="" inputmode="decimal" autocomplete="off" autocorrect="off" pattern="^[0-9]*[.,]?[0-9]*$" minlength="1" maxlength="79" spellcheck="false" />
                                                    </div>
                                                    <div className="input-suffix" >X</div>
                                                </div>
                                            </div>
                                            <div className="right" >
                                                <div className="slider-container" >
                                                    <div className="slider-box" show-input-leverage="true" input-uint="X"  >
                                                        <div className="slider" >
                                                            <div className="vue-slider vue-slider-ltr blue blue" style={{ padding: "8px 0px", height: "6px", width: "auto" }}>
                                                                <div className="vue-slider-rail">
                                                                    <div className="vue-slider-process" style={{ height: "100%", top: "0px", left: "0%", width: "9.09091%", transitionProperty: "width, left", transitionDuration: "0.5s" }}>
                                                                    </div>
                                                                    <div className="vue-slider-marks">
                                                                        <div className="vue-slider-mark vue-slider-mark-active" style={{ height: "100%", width: "6px", left: "0%" }} >
                                                                            <div className="mux-simple-slider__point active" >
                                                                            </div>
                                                                            <div className="vue-slider-mark-label vue-slider-mark-label-active">1x</div>
                                                                        </div>
                                                                        <div className="vue-slider-mark" style={{ height: "100%", width: "6px", left: "24.2424%" }}>
                                                                            <div className="mux-simple-slider__point" >
                                                                            </div>
                                                                            <div className="vue-slider-mark-label">25x</div>
                                                                        </div>
                                                                        <div className="vue-slider-mark" style={{ height: "100%", width: "6px" }} id="vue-slider-middle">
                                                                            <div className="mux-simple-slider__point" >
                                                                            </div>
                                                                            <div className="vue-slider-mark-label">50x</div>
                                                                        </div>
                                                                        <div className="vue-slider-mark" style={{ height: "100%", width: "6px", left: "74.7475%" }} >
                                                                            <div className="mux-simple-slider__point" >
                                                                            </div><div className="vue-slider-mark-label">75x</div>
                                                                        </div><div className="vue-slider-mark" style={{ height: "100%", width: "6px", left: "100%" }}>
                                                                            <div className="mux-simple-slider__point" >
                                                                            </div>
                                                                            <div className="vue-slider-mark-label">100x</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vue-slider-dot" aria-valuetext="10x" role="slider" aria-valuenow="10" aria-valuemin="1" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style={{ width: "18px", height: "16px", transform: "translate(-50%, -50%)", top: "50%", left: "9.09091%", transition: "left 0.5s ease 0s" }}>
                                                                        <img src={sliderdot} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="radio-container blue" style={{ display: "none" }} >
                                                    <div className="radio-group" data-v-c8fe247c="" >
                                                        <div className="radio-item" data-v-c8fe247c="" >2x</div>
                                                        <div className="radio-item" data-v-c8fe247c="" >5x</div>
                                                        <div className="radio-item selected" data-v-c8fe247c="" >10x</div>
                                                        <div className="radio-item" data-v-c8fe247c="" >30x</div>
                                                        <div className="radio-item" data-v-c8fe247c="">100x</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="n-button n-button--default-type n-button--medium-type n-button--secondary round primary expand large" tabindex="0" type="button">
                                <span className="n-button__content">Connect Wallet</span>
                                <div aria-hidden="true" className="n-base-wave"></div>
                            </button></div><div className="result-info-container">
                            <div className="info-item"><div className="label">
                                <span className="tooltip-element__text-color">Available Liquidity</span>
                            </div><div className="value">932.3449 ETH
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="label">
                                    <span className="tooltip-element__text-color">Liquidity Source</span>
                                </div><div className="value flex-value">
                                    <img src={icon} /> MUX
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="label">
                                    <span className="tooltip-element__text-color">Profits In</span>
                                </div>
                                <div className="value">ETH</div>
                            </div><div className="info-item">
                                <div className="label">
                                    <span className="tooltip-element__text-color">Liq. Price</span>
                                </div>
                                <div className="value">--</div>
                            </div>
                            <div className="info-item">
                                <div className="label">
                                    <span className="tooltip-element__text-color">Collateral</span>
                                </div><div className="value">--</div>
                            </div>
                            <div className="info-item">
                                <div className="label">
                                    <span className="tooltip-element__text-color">Fees</span>
                                    <span className="celebration-icon">🥳</span>
                                </div><div className="value">--</div>
                            </div><div className="info-item">
                                <div className="label"><span className="tooltip-element__text-color">Spread</span>
                                </div>
                                <div className="value">0%</div>
                            </div></div>
                        <div data-v-8004fbf8="">
                        </div><div data-v-5e476f72="">
                        </div><div data-v-40a0fc9a="">
                        </div><div data-v-c5ed03ae="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
