import React from "react";
import LaunchYdexNav from "../navbar/LaunchYdexNav";

export default function () {
  return (
    <>
    <LaunchYdexNav />
    <div  style={{ backgroundColor: "#040818",height:'100vh',paddingTop:'8%' }}>
      <div className="container">
        <div className="row">
          <div className="top-heading">
            <h3 style={{ color: "white" }}>Redeem Your muxTokens</h3>
            <p style={{ color: "white" }}>
              Redeem muxTokens into related tokens on chains that have
              sufficient reserves. Multi-Chain token reserves will update as the
              MUX broker distributes assets across chains.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="card" style={{height:'500%',backgroundColor:'#131b2e'}}>
              <div  style={{margin:'auto',textAlign:'center'}}>
                <div style={{color:'white'}}>Please connect wallet</div>
                <div><button className="btn btn-primary">Connet Wallet</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
