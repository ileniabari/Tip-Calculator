import "./bill.css"
export function Bill({ bill, setBill }) {
    return (
      <>
        <p>How much was your bill?</p>
        <input
          type="number"
          min={0}
          onChange={(e) => setBill(Number(e.target.value))}
          value={bill}
        />
      </>
    );
  }