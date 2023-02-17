import React, { useState } from "react";
import "./LeaderBoard.css";
import LeaderBoardCard from "../components/LeaderBoardCard.js";
import Button from "../components/Button";
import LaunchYdexNav from "../navbar/LaunchYdexNav";

export default function LeaderBoard() {
const [left,setLeft]=useState(false)
const [right,setRight]=useState(true)

  const getButtonData=(leftData,rightData)=>{
    console.log('leader board',leftData)
    setLeft(leftData);
    setRight(rightData)
  }
  return (
    <>
    <LaunchYdexNav />
    <div className="pt-5" style={{ backgroundColor: "#0d0d19", height: "100vh"}}>
      <div className="container">
        <div className="row leaderboard-row">
          <div className="mt-4"><Button clickedButton={getButtonData} /></div>
          
          <div hidden={left}  className="leaderboard-heading mt-4">
            <h3 style={{color:'white'}}>
            Traders Leaderboard
            </h3>
            <span>24 Hours</span>
            <span>7 Days</span>
            <span>1 Month</span>
          </div>
          <div hidden={right} className="leaderboard-heading mt-4">
          <h3 style={{color:'white'}}>
            Open Positions
            </h3>
          </div>
          <div hidden={left}  className="mt-4">
            <LeaderBoardCard />
          </div>
          <div hidden={right}  className="mt-4">
            <h1>Hello</h1>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}
