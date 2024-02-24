function InputBill({ bill, onTextChange }) {
  return (
    <form>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="text"
        id="bill"
        name="bill"
        value={bill}
        onChange={onTextChange}
        placeholder="Enter the bill amount £"
      />
    </form>
  );
}

export default InputBill;
