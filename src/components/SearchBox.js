import React from 'react';


const App = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="Search"
        placeholder="Search People"
        onChange={searchChange}
      />
    </div>
  );
}

export default App;