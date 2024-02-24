function Tip({ tip, children, onTipChange }) {
  return (
    <form>
      <label htmlFor="tips">{children}</label>
      <select id="tips" name="tip" value={tip} onChange={onTipChange}>
        <option value={0}>Dissatisfied - not good 0%</option>
        <option value={5}>It was ok 5%</option>
        <option value={10}>It was good 10%</option>
        <option value={20}>It was great 20%</option>
      </select>
    </form>
  );
}

export default Tip;
