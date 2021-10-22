const React = require("react");
const ReactDOM = require("react-dom");
const MultiplicationTable = require("./MultiplicationTable");

ReactDOM.render(
  <>
    <MultiplicationTable />
    <MultiplicationTable />
    <MultiplicationTable />
  </>,
  document.getElementById("root")
);
