const App4 = () => {
  const arr = [1, 2, 3];

  const JSXArr = arr.map((number, index) => {
    return <h1 key={index}>{number}</h1>;
  });

  return <>{JSXArr}</>;
};

export default App4;
