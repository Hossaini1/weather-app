import Context from "../CityContext";
function Weather() {
  const { weatherData } = Context();

  return (
    <div className="p-8 rounded">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {weatherData.list &&
          weatherData.list.map((item, index) => (
            <div className="bg-sky-500 rounded-lg p-4 text-start" key={index}>
              <img
                className="h-24 w-28"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="weater img"
              />
              
              <h3 className='text-xl font-semibold'>{new Date(item.dt*1000).toLocaleDateString('de-Ge',{weekday:'long'})}</h3>
              <p className="text-gray-900 text-xs ">{item.weather[0].description}</p>
              <p className="text-red-900 text-xs ">{item.dt_txt}</p>
              <p className="text-blue-900 text-xs">Humidity: {item.main.humidity}%</p>
              <p className="text-white text-sm">Tempratur: {item.main.temp} °C</p>
             
            </div>
          ))}
      </div>
    </div>
  );
}
export default Weather;
