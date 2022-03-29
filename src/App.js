import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [phones, setPhones] = useState([])
  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(myData => {
      const loadedData = myData.data.data;
      const phoneData = loadedData.map(phone => {
        let phoneSlugs =  phone.slug.split('-');
        let info = {
          name: phoneSlugs[0],
          value: phoneSlugs[1]
        }
        return info;
      }
     
    
      
      );
      console.log(phoneData)
    })
  },[])
  console.log(phones)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
