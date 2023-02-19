import React from "react";
import { GoBell } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5">
          <GoBell />
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

export default ButtonPage;
