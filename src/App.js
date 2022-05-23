import React, { useState, useEffect, Fragment } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
function App() {
  const [coins,setcoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/list')
    .then(res => res.json())
    .then(data => setcoins(data))
  },[])
  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
    </Fragment>
  );
}

export default App;
