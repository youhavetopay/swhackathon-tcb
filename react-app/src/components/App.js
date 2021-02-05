import React, { useState, useEffect } from "react"
import Header from './Header';

function App() {

  const [user, setUser] = useState(null);
  const isauthed = user != null;

  return (
    <div className="App"> <Header isauthed={isauthed} /> </div>
  );
}

export default App;
