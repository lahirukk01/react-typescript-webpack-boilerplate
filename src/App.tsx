import { useState } from 'react';

import ReactLogo from './assets/svg/react.svg';
import Flowers from './assets/images/flowers.jpeg';

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <h1>Hello Worlds</h1>
      <ReactLogo height={200} width={200} />
      <h2>Count: {counter}</h2>
      <div>
        <img src={Flowers} alt="random" width={300} />
      </div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default App;
