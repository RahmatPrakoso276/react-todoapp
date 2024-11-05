import React from "react";

interface PropsType {
  // contoh required props
  name: string;
  stacks: string[];
  // contoh optional props
  // disavled?: boolean;

}

//functional components
const Props: React.FC<PropsType> = (props) => {
  return (
    <div>
      nama : {props.name}
      {props.stacks.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default Props;
