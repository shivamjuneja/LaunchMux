import React from 'react';
import './StakeArrowDiv.css';

export default function StakeArrowDiv() {
    return (
        <div className='stake-page'>
            <div class="container-stake" >
                <div class="header-stake" >
                    <div class="label" >Staking Routes</div>
                    <div class="legend" >
                        <div class="token" >
                            <div class="mux-image-viewer" style={{ height: '20px', width: '20px' }}>
                                <div class="primary-image n-image n-image--preview-disabled" role="none" >
                                    <img width="20" height="20" src="https://mux-world.github.io/assets/img/tokens/veMUX.svg" loading="eager" data-error="false" data-preview-src="https://mux-world.github.io/assets/img/tokens/veMUX.svg" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <span >APR:</span>
                            <span class="apr" >
                                <span class="tooltip-element__blue" >45.26%</span>
                            </span>
                        </div>
                        <div class="token" >
                            <div class="mux-image-viewer" style={{ height: '20px', width: '20px' }}>
                                <div class="primary-image n-image n-image--preview-disabled" role="none" >
                                    <img width="20" height="20" src="https://mux-world.github.io/assets/img/tokens/MUXLP.svg" loading="eager" data-error="false" data-preview-src="https://mux-world.github.io/assets/img/tokens/MUXLP.svg" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <span >APR:</span>
                            <span class="apr" >
                                <span class="tooltip-element__blue" >38.26%</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="stake-chart" >
                    <div class="token-box" >
                        <div class="token-item mcb" >
                            <div class="mux-image-viewer round" style={{ height: '40px', width: '40px' }}>
                                <div class="primary-image n-image n-image--preview-disabled" role="none" >
                                    <img width="40" height="40" src="https://mux-world.github.io/assets/img/tokens/MCB.svg" loading="eager" data-error="false" data-preview-src="https://mux-world.github.io/assets/img/tokens/MCB.svg" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <div class="label" >MCB</div>
                        </div>
                        <div class="token-item vemux" >
                            <div class="mux-image-viewer" style={{ height: '40px', width: '40px' }}>
                                <div class="primary-image n-image n-image--preview-disabled" role="none" >
                                    <img width="40" height="40" src="https://mux-world.github.io/assets/img/tokens/veMUX.svg" loading="eager" data-error="false" data-preview-src="https://mux-world.github.io/assets/img/tokens/veMUX.svg" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <div class="label" >veMUX</div>
                        </div>
                        <div class="token-item muxlp" >
                            <div class="mux-image-viewer" style={{ height: '40px', width: '40px' }}>
                                <div class="primary-image n-image n-image--preview-disabled" role="none" >
                                    <img width="40" height="40" src="https://mux-world.github.io/assets/img/tokens/MUXLP.svg" loading="eager" data-error="false" data-preview-src="https://mux-world.github.io/assets/img/tokens/MUXLP.svg" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <div class="label" >MUXLP</div>
                        </div>
                        <div class="token-item dash" >
                            <div class="reward" >
                                <i class="iconfont icon-rewards" ></i>
                            </div>
                        </div>
                        <div class="token-item eth" >
                            <div class="mux-image-viewer round" >
                                <div class="primary-image n-image n-image--preview-disabled" role="none" >
                                    <img width="40" height="40" src="https://mux-world.github.io/assets/img/tokens/ETH.svg" loading="eager" data-error="false" data-preview-src="https://mux-world.github.io/assets/img/tokens/ETH.svg" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <div class="label" >ETH</div>
                        </div>
                        <div class="token-item mux" >
                            <div class="mux-image-viewer round" style={{ height: '40px', width: '40px' }}>
                                <div class="primary-image n-image n-image--preview-disabled" role="none" >
                                    <img width="40" height="40" src="https://mux-world.github.io/assets/img/tokens/MUX.svg" loading="eager" data-error="false" data-preview-src="https://mux-world.github.io/assets/img/tokens/MUX.svg" style={{ objectFit: 'fill' }} />
                                </div>
                            </div>
                            <div class="label" >MUX</div>
                        </div>
                    </div>
                    <div class="node-box" >
                        <div class="node-item lock" >Lock
                            <div class="icon" >
                                <svg aria-hidden="true" >
                                    {/* <use xlink:href="#icon-qestion"></use> */}
                                </svg>
                            </div>
                        </div>
                        <div class="node-item stake" >Stake
                            <div class="icon" >
                                <svg aria-hidden="true" >
                                    {/* <use xlink:href="#icon-qestion"></use> */}
                                </svg>
                            </div>
                        </div>
                        <div class="node-item vest" >Vest
                            <div class="icon" >
                                <svg aria-hidden="true" >
                                    {/* <use xlink:href="#icon-qestion"></use> */}
                                </svg>
                            </div>
                        </div>
                        <div class="node-item yield" >Yield</div>
                        <div class="node-item yield1" >Yield</div>
                        <div class="node-item select" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="40" viewBox="0 0 64 40" fill="none" >
                                <path d="M26.8594 2.25987C30.157 0.566456 34.0686 0.566458 37.3662 2.25987L59.1392 13.441C64.571 16.2304 64.571 23.995 59.1392 26.7844L37.3662 37.9655C34.0686 39.6589 30.157 39.6589 26.8594 37.9655L5.0864 26.7844C-0.345418 23.995 -0.345415 16.2304 5.08641 13.441L26.8594 2.25987Z" fill="#6678A9" fill-opacity="0.2" ></path>
                            </svg>
                            <span class="text" >Select</span>
                        </div>
                    </div>
                    <div class="line-box" >
                        <svg class="line-item mcb-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 8" >
                            <path d="M 0 0 L 6 4 L 0 8 Z" ></path>
                            <line x1="5" y1="4" x2="67" y2="4" ></line>
                            <path d="M 67 0 L 73 4 L 67 8 Z" ></path>
                        </svg>
                        <svg class="line-item vemux-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 8" >
                            <line x1="0" y1="4" x2="66" y2="4" ></line>
                            <path d="M 66 0 L 72 4 L 66 8 Z" ></path>
                        </svg>
                        <svg class="line-item vest-select" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 55" >
                            <path class="stroke-path" d="M 1 0 L 1 46 Q 1,54 9,54 L 134 54" ></path>
                        </svg>
                        <svg class="line-item mux-select" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 8" >
                            <line x1="0" y1="4" x2="83" y2="4" ></line>
                            <path d="M 82 4 L 88 0 L 88 8 Z" ></path>
                        </svg>
                        <svg class="line-item lock-select" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 129" >
                            <line x1="4" y1="129" x2="4" y2="6" ></line>
                            <path d="M 0 6 L 8 6 L 4 0 Z" ></path>
                        </svg>
                        <svg class="line-item vest-mcb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 52" >
                            <line x1="4" y1="52" x2="4" y2="6" ></line>
                            <path d="M 0 6 L 8 6 L 4 0 Z" ></path>
                        </svg>
                        <svg class="line-item vemux-yield" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 34" >
                            <path d="M 0 0 L 8 0 L 4 6 Z" ></path>
                            <line x1="4" y1="34" x2="4" y2="5" ></line>
                        </svg>
                        <svg class="line-item dash-yield" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 34" >
                            <line x1="4" y1="0" x2="4" y2="28" ></line>
                            <path d="M 4 34 L 0 28 L 8 28 Z" ></path>
                        </svg>
                        <svg class="line-item dash-yield1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" >
                            <line x1="4" y1="0" x2="4" y2="8" ></line>
                            <path d="M 4 14 L 0 8 L 8 8 Z" ></path>
                        </svg>
                        <svg class="line-item stake-yield1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 10" >
                            <line x1="0.5" y1="0" x2="0.5" y2="10" ></line>
                        </svg>
                        <svg class="line-item stake-muxlp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" >
                            <line x1="4" y1="14" x2="4" y2="5" ></line>
                            <path d="M 0 0 L 8 0 L 4 6 Z" ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
