import { React, useState } from "react";

// class Test extends React.Component {
//   constructor(props) {}

//   render() {
//     return <h1>Hi</h1>;
//   }
// }

function Test() {
  const [count, setCount] = useState(3);
  return <div>{setCount(5)}</div>;
}
export default Test;
