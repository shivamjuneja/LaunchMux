import React from "react";
import "./Stake.css";
import veMUX from "../assets/veMUX.svg";
import MUXLP from "../assets/MUXLP.svg";
import MCB from "../assets/MCB.svg";
import LaunchYdexNav from "../navbar/LaunchYdexNav";
import StakeLeftSide from "../components/StakeLeftSide";
import StakeArrowDiv from "./StakeArrowDiv";
export default function Stake() {
  return (
    <>
      <LaunchYdexNav />
      <div className="main pt-5" style={{ backgroundColor: "#040818", height: 'fit-content' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 stake-left  mt-5 px-4">
              <StakeLeftSide title={'Overview'} />
            </div>
            <div className="col-lg-10 stake-right  mt-5">
              <div className="right-heading1">
                <h4 style={{ color: "white" }}>About Staking</h4>
              </div>
              <div className="content mb-4">
                You can earn protocol income(protocol fees and third-party DEX
                mining rewards) and MUX rewards from veMUX locked-staking
                <br /> and MUXLP staking. All staking will take place on Arbitrum.
                Learn More
              </div>
              <StakeArrowDiv />
              {/* <div className="card mt-3 first-card" style={{ width: "82%" }}>
              <div className="card-body" style={{ background: "#142031" }}>
                <div className="stake-card-heading">
                  <div style={{ color: "white" }}>Staking routes</div>
                  <div>
                    <img
                      className="mx-1"
                      style={{ width: "20x", height: "20px" }}
                      src={veMUX}
                    />
                    <span className="mx-2" style={{ color: "white" }}>
                      APR:{" "}
                    </span>
                    <span style={{ color: "blue" }}>74.27% </span>
                    <img
                      className="mx-1"
                      style={{ width: "20x", height: "20px" }}
                      src={MUXLP}
                    />
                    <span className="mx-2" style={{ color: "white" }}>
                      APR:{" "}
                    </span>
                    <span style={{ color: "blue" }}>74.27% </span>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-2">
                      <div
                        style={{
                          borderRadius: "28px",
                          border: "1px solid red",
                        }}
                      >
                        <img
                          className="m-1"
                          style={{ width: "20x", height: "20px" }}
                          src={MCB}
                        />
                        <span style={{ color: "white" }}>MCB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
              <div className="mt-5 right-heading2">
                <h4 style={{ color: "white" }}>Your Staking Stats & Rewards</h4>
              </div>
              <div>
                You can claim your rewards from veMUX, MUXLP and vested MUX all at
                once here.
              </div>
              <div className="down-card-stake" >
                <div className="row mt-4 mb-5">
                  <div className="col-lg-6">
                    <div
                      class="card"
                      style={{
                        backgroundColor: "#040818",
                        borderRadius: "15px",
                        border: "1px solid grey",
                      }}
                    >
                      <div class="card-body">
                        <div
                          className="stake-card-heading"
                          style={{ color: "white" }}
                        >
                          Your Staking Stats
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6  col-sm-6">
                            <div
                              class="card"
                              style={{ width: "100%", backgroundColor: "#191f32" }}
                            >
                              <div class="card-body">
                                <img
                                  style={{ width: "20x", height: "20px" }}
                                  src={veMUX}
                                />
                                <div
                                  style={{
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "end",
                                  }}
                                >
                                  0.00
                                </div>
                                <div
                                  style={{
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "end",
                                  }}
                                >
                                  veMUX Balance
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6">
                            <div
                              class="card"
                              style={{ width: "100%", backgroundColor: "#191f32" }}
                            >
                              <div class="card-body">
                                <img
                                  style={{ width: "20x", height: "20px" }}
                                  src={MUXLP}
                                />
                                <div
                                  style={{
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "end",
                                  }}
                                >
                                  0.00
                                </div>
                                <div
                                  style={{
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "end",
                                  }}
                                >
                                  Staked MUXLP
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card mt-2"
                          style={{ backgroundColor: "#191f32" }}
                        >
                          <div class="card-body">
                            <div className="row">
                              <div className="col-lg-6" style={{ color: "white" }}>
                                Earn up to 35% rebates from the referral program.
                                Learn More
                              </div>

                              <div className="col-lg-6">
                                <i
                                  style={{ color: "white" }}
                                  class="bi bi-database-fill-up"
                                ></i>
                                <p
                                  style={{
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "end",
                                  }}
                                >
                                  N/A
                                </p>
                                <p
                                  style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    color: "blue",
                                  }}
                                >
                                  Your Rebate Rate
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      class="card"
                      style={{
                        backgroundColor: "#040818",
                        borderRadius: "15px",
                        border: "1px solid grey",
                      }}
                    >
                      <div class="card-body">
                        <div
                          className="stake-card-heading mb-4"
                          style={{ color: "white" }}
                        >
                          Total Rewards
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>Total</p>
                          <p>$0.00</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>ETH</p>
                          <p>0.00 ETH</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>MUX</p>
                          <p>0.00 MUX</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>MCB</p>
                          <p>0.00 MCB</p>
                        </div>
                        <div className="mt-3">
                          <button
                            style={{
                              backgroundColor: "#173b54",
                              width: "100%",
                              height: "3.2rem",
                              borderRadius: "10px",
                            }}
                          >
                            {" "}
                            Claim All Rewards on Arbitrum
                          </button>
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
  );
}
