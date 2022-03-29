import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

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
      setPhones(phoneData)
      
    })
  },[])
  console.log(phones)
  return (
    <div className="App">
      <BarChart width={1000} height={200} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
          <Tooltip></Tooltip>
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="value"></YAxis>
        </BarChart>
      
      
    </div>
  );
}

export default App;
