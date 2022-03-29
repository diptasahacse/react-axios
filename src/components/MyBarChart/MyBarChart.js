import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyBarChart = () => {
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
        return (
            <BarChart width={1000} height={200} data={phones}>
                <Bar dataKey="value" fill="#8884d8" />
                <Tooltip></Tooltip>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="value"></YAxis>
            </BarChart>
        );
    };

    export default MyBarChart;