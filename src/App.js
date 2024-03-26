import { useState } from "react";
import "./App.css";
import  {Title} from "./Component/title/title"
import {Bill} from "./Component/bill/bill"
import  {Tip} from "./Component/tip/tip"
import  {Total} from "./Component/total/total"
import {Reset} from "./Component/reset/reset"

export default function App(params) {
  
  const [bill, setBill] = useState(0);
  const [yourTip, setYourTip] = useState(null);
  const [tip, setTip] = useState(null);
 
  return (
    <div className="background">
      <div className="bill">
        <Title />
        
        <Bill bill={bill} setBill={setBill} />
        
        <Tip bill={bill} tip={yourTip} setTip={setYourTip}>
          How do you rate the service?
        </Tip>
       
        <Tip bill={bill} tip={tip} setTip={setTip}>
          How do your friends rate the service?
        </Tip>
        
        <Total bill={bill} friendsTip={tip} yourTip={yourTip} />
        
        <Reset
          setBill={setBill}
          setFriendsTip={setTip}
          setYourTip={setYourTip}
        />
      </div>
    </div>
  );
}

