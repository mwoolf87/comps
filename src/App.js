import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      id: "2342",
      label: "Can I use React?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi numquam eveniet. Iusto non nemo numquam! Eligendi sint unde fugit molestiae quia adipisci, reprehenderit beatae. Minima cupiditate deserunt neque laborum."
    },
    {
      id: "242",
      label: "Can I use React?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi numquam eveniet. Iusto non nemo numquam! Eligendi sint unde fugit molestiae quia adipisci, reprehenderit beatae. Minima cupiditate deserunt neque laborum."
    },
    {
      id: "232",
      label: "Can I use React?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi numquam eveniet. Iusto non nemo numquam! Eligendi sint unde fugit molestiae quia adipisci, reprehenderit beatae. Minima cupiditate deserunt neque laborum."
    }
  ];

  return <Accordion items={items} />;
};

export default App;
