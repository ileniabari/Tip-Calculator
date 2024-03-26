export function Reset({ setBill, setYourTip, setFriendsTip }) {
    function handleReset() {
      setBill(0);
      setYourTip(-1);
      setFriendsTip(-1);
    }
  
    return <button onClick={handleReset}>Reset</button>;
  }
  