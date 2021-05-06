import React, { useEffect, useState } from 'react';
import { Header } from './App.styles';
import axios from 'axios';

export const App = () => {
  const [data, setData] = useState('loading...');

  //Call the API
  useEffect(() => {
    const makeApiCall = async () => {
      const response = await axios.get('http://localhost:3000/hello-world');
      setData(response.data);
    }
    
    makeApiCall();
  }, [])


  //Save response to variable
  //Render the response
  return <Header>{data}</Header>
};
