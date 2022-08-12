import React from "react";

function SerachBox({ serachChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="serach"
        placeholder="serach robots"
        onChange={serachChange}
      />
    </div>
  );
}
export default SerachBox;
