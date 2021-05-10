import React from 'react';
import Card from './components/Cards';

function App(val){

  return(
    <>
    <Card
      imagesrc={val.imagesrc}
      sname={val.sname}
      title={val.title}
      link={val.link}
    />
   </>
  );
  }
  export default App;