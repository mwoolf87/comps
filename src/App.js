import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button danger>Buy Now!</Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary>Checkout!</Button>
      </div>
      <div>
        <Button primary>Flash Sale!!!!</Button>
      </div>
    </div>
  );
};

export default App;
