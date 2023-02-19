import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
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

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
