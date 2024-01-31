import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import Loading from './components/Loading';
import Invalid from './components/Invalid';
import Footer from './components/Footer';

const App = () => {
  const time = new Date().getHours();
  
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  const key = import.meta.env.VITE_KEY;

  useEffect(() => {
    const coordsData = async (lat, long) => {
      try {
         const val = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`);
         const res = await val.json();
         setData(res)
      } catch (error) {
         console.log(error);
      }
      
    
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          coordsData(latitude, longitude);
        },
        error => {
          console.log(`Error getting location: ${error.message}`);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [])

  useEffect(() => {
    if (city !== "") { // Check if the city is not an empty string
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [city]);


  const changeCity = (val) => {
    setData(null);
    
    setCity(val);
  };

  return (
    <main className={time > 18 ? 'dark' : ''}>
      <div className=" bg-gradient-to-t from-day dark:bg-gradient-to-t dark:from-night dark:to-black dark:text-dark font-custom">
        <section>
          <Search changeCity={changeCity} />
        </section>
        <section>
          {data ? (data.cod === 200 ? <Weather data={data} /> : <Invalid />) : <Loading />}
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default App;
