import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";


function App ()  {
    const [cityName, setCityName] = useState("Munich");
    const [searchField, setSearchField] = useState("");
    const [temperature, setTemperature] = useState(null);
    const [weatherCondition, setWeatherCondition] = useState ("");
    const [errorMessage, setErrorMessage] = useState ("");
    const [loading, setLoading] = useState (false);

     // Helper function to capitalize the first letter
    const capitalizeFirstLetter = (text) => {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setErrorMessage("");
            try {
                const response = await fetch (
                    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
                );

                const data = await response.json();
                
                if(response.ok){
                setCityName(capitalizeFirstLetter(data.name));
                setTemperature(Math.round(data.main.temp));
                setWeatherCondition(capitalizeFirstLetter(data.weather[0].description));
                }else{
                    throw new Error (data.message || "City Not Found")
                }

            } catch (error){
                console.error ("Error fetching weather data:", error);
                setErrorMessage(error.message);
            }finally{
                setLoading (false);
            }
        
        };
        fetchWeather();
    }, [cityName]);

    const onSearchChange = (event) => {  
        setSearchField(event.target.value);   
    };

    const onSearchSubmit = () => {
        if(searchField.trim()){
            setCityName(searchField);
            setSearchField("");
        }
    };


    return (
        <div className="vh-100 flex flex-column items-center justify-center  white">
            <h1 className="f2 tc mt3 mb4">🌎 Weather App</h1>

            {/* SearchBar */}
            <SearchBar 
                searchField={searchField}
                onSearchChange={onSearchChange}
                onSearchSubmit={onSearchSubmit}
            />
            {/* Loading & Error Handling */}
            {loading ? (
                    <h1 className="f3 white">Loading...</h1>
                ) : errorMessage ? (
                    <h1 className="f3 red">{errorMessage}</h1>
                ) : (
                    <Card 
                        cityName={cityName} 
                        temperature={temperature} 
                        weatherCondition={weatherCondition} 
                    />
                )}
        </div>
        );

}

export default App;