import React, {useEffect, useState} from 'react';
import Loading from './Loading';

const Forecast = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const coordsData = async (lat, long) => {
      try {
         const val = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=4&appid=${props.key}&units=metric`);
         const res = await val.json();
         setData(res.list)
      } catch (error) {
         console.log(error);
      }


    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          coordsData(latitude, longitude);
        },
        error => {
          console.error(`Error getting location: ${error.message}`);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [])

  
  useEffect(() => {
    if (props.city !== "") {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&cnt=4&appid=${props.api}&units=metric`);
          const result = await response.json();
          setData(result.list);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [props.city]);
  
  const convertTo12HourFormat = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const time = new Date(0, 0, 0, hours, minutes);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  return (
    <div className="p-2 flex flex-col justify-between">
      <h1 className="p-4 border-b-2 dark:border-dark border-black text-xl font-bold tracking-wider">Hourly</h1>
      {data ? (data.map((item, index) => {
      return (
        <div key={index}  className="flex items-center justify-between p-4">
        <p>{convertTo12HourFormat(item.dt_txt.split(' ')[1])}</p>
          <p>{item.weather[0].description}</p>
          <p>{item.main.humidity}%</p>
          <p>{item.main.temp} °C</p>
          </div>
      );

      })) : <Loading />}
    </div>
  );
}

export default Forecast;