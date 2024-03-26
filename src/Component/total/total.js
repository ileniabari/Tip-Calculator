import "./total.css"

export function Total({ bill, friendsTip, yourTip }) {
    const percentYourTip = (bill * yourTip) / 100;
    const percentFriendsTip = (bill * friendsTip) / 100;
  
    const total = (bill + percentYourTip + percentFriendsTip).toFixed(2);
  
    return (
      <div>
        <p className="total">Your final bill is {total}</p>
      </div>
    );
  }