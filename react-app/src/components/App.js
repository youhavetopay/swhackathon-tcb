import React, { useState, useEffect } from "react"
import Header from './Header';

function App() {

  const [user, setUser] = useState(null);
  const isauthed = user == null;
<<<<<<< HEAD
  //const isauthed = user != null;
=======
>>>>>>> 97aa588e8708efd08db766706723c608411c1173

  return (
    <div className="App"> <Header isauthed={isauthed} /> </div>
  );
}

export default App;
