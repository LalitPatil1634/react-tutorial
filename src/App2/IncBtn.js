function IncBtn(props) {
  const onButtonClick = () => {
    props.setCount(props.count + 1);
  };

  return <button onClick={onButtonClick}>Increase Counter</button>;
}

export default IncBtn;
