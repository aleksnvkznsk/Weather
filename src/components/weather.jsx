import React from "react";

const Weather = props => {
    return (
        <div>
            {props.city &&
                <div>
                    <p>Местоположение: {props.country}, {props.city}</p>
                    <p>Погода: {props.description}</p>
                    <p>Температура: {props.temp} °C</p>
                    <p>Ощущается как: {props.feels_like} °C</p>
                    <p>Влажность: {props.humidity} %</p>
                    <p>Давление: {props.pressure} мм рт. ст.</p>
                    <p>Максимальная температура: {props.temp_max} °C</p>
                    <p>Минимальная температура: {props.temp_min} °C</p>
                    <p>Восход: {props.sunrise}</p>
                    <p>Закат: {props.sunset}</p>
                </div>
            }
        </div>
    );
}

export default Weather;