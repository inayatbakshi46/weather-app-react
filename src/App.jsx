import React, { useState, useEffect } from 'react';

import Search from './components/Search';

import Weather from './components/Weather';

import Loading from './components/Loading';

import Invalid from './components/Invalid';

import Footer from './components/Footer';


const App = () => {
  const time = new Date().getHours()
  const [data, setData] = useState(null);
  const [city, setCity] = useState("srinagar");
  
  const key = import.meta.env.VITE_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        const result = await response.json()
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [city]);

  const changeCity = (val) => {
    setData(null)
    setCity(val)
  }
  return (
    <main className={time > 18 ? 'dark' : ''}>
      
      <div className="h-dvh bg-gradient-to-t from-day dark:bg-gradient-to-t dark:from-night dark:to-black dark:text-dark font-custom">
      <section className="">
      
      <Search changeCity={changeCity} />
        
      </section>
      <section>
        
        {data ? (data.cod == 200 ? <Weather data={data} /> : <Invalid />) : <Loading />}
        
      </section>
        <section>
        <Footer />
        </section>
      </div>
      
    </main>
  );
};

export default App;
