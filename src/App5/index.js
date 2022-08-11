import { useState } from "react";

const App5 = () => {
  const [isSmall, setIsSmall] = useState(true);

  return (
    <div>
      {/* {isSmall ? <div>I am small</div> : <div>I am big</div>} */}
      {isSmall && <div>I am small</div>}

      <button onClick={() => setIsSmall(!isSmall)}>Change</button>
    </div>
  );
};

export default App5;
