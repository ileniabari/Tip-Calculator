import "./tip.css"

export function Tip({ children, setTip, tip }) {
    return (
      <>
        <p>{children}</p>
        <select
          value={tip}
          onChange={(e) => {
            setTip(Number(e.target.value));
          }}
        >
          <option></option>
          <option value="0">Bad</option>
          <option value="10">Good</option>
          <option value="15">Awesome</option>
          <option value="20">Excellent</option>
        </select>
      </>
    );
  }