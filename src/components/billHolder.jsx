import InputBill from "./billInput";
import Tip from "./billTip";
import { useState } from "react";

function BillHolder() {
  const [bill, setBill] = useState("");
  const [serviceTip, setServiceTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleBillChange(e) {
    if (e.target.value === "") {
      setBill("");
    } else if (/^\d*$/.test(e.target.value)) {
      const billNum = Number(e.target.value);
      setBill(Number(billNum));
    }
  }

  function handleServiceTipChange(e) {
    const tip = Number(e.target.value);
    setServiceTip(Number(tip));
  }

  function handleFriendTipChange(e) {
    const friendTip = Number(e.target.value);
    setFriendTip(friendTip);
  }

  function calculateTotal(bill, serviceTip, friendTip) {
    const averageTip = 1 + (serviceTip + friendTip) / 2 / 100;
    const total = bill * averageTip;
    return Math.floor(total * 100) / 100;
  }

  function reSet() {
    setBill("");
    setServiceTip(0);
    setFriendTip(0);
  }

  return (
    <div className="container">
      <h4>Bill holder</h4>
      <InputBill bill={bill} onTextChange={handleBillChange} />
      <Tip tip={serviceTip} onTipChange={handleServiceTipChange}>
        How did you like the service?
      </Tip>
      <Tip tip={friendTip} onTipChange={handleFriendTipChange}>
        How did you friend like the service?
      </Tip>
      {bill === "" ? null : (
        <div>
          You will pay{" "}
          {`£${calculateTotal(bill, serviceTip, friendTip)} (£${bill} + £${
            (serviceTip + friendTip) / 2
          })`}
        </div>
      )}
      <div>
        <button onClick={reSet}>Reset</button>
      </div>
    </div>
  );
}

export default BillHolder;
