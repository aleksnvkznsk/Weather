import React from "react";

const Weather = props => {
    return (
        <div className="weather">
            {props.city &&
                <div className="weather__data">
                    <p className="weather__data__city">{/*{props.country},*/} {props.city}</p>
                    <p className="weather__data__state">{props.description}</p>

                    <div className="weather__data__block">
                        <div className="weather__data__info">
                            <p className="weather__data__header">Температура</p>
                            <p className="weather__data__footer"> {props.temp} °C</p>
                        </div>
                        <div className="weather__data__info">
                            <p className="weather__data__header">Ощущается как</p>
                            <p className="weather__data__footer">{props.feels_like} °C</p>
                        </div>
                    </div>

                    <div className="weather__data__block">
                        <div className="weather__data__info">
                            <p className="weather__data__header">Влажность</p>
                            <p className="weather__data__footer">{props.humidity} %</p>
                        </div>
                        <div className="weather__data__info">
                            <p className="weather__data__header">Давление</p>
                            <p className="weather__data__footer">{props.pressure} мм рт. ст.</p>
                        </div>
                    </div>

                    <div className="weather__data__block">
                        <div className="weather__data__info">
                            <p className="weather__data__header">Максимальная температура</p>
                            <p className="weather__data__footer">{props.temp_max} °C</p>
                        </div>
                        <div className="weather__data__info">
                            <p className="weather__data__header">Минимальная температура</p>
                            <p className="weather__data__footer">{props.temp_min} °C</p>
                        </div>
                    </div>

                    <div className="weather__data__block">
                        <div className="weather__data__info">
                            <p className="weather__data__header">Восход</p>
                            <p className="weather__data__footer">{props.sunrise}</p>
                        </div>
                        <div className="weather__data__info">
                            <p className="weather__data__header">Закат</p>
                            <p className="weather__data__footer">{props.sunset}</p>
                        </div>
                    </div>
                </div>
            }
            <p className="weather__error">{props.error}</p>
        </div>
    );
}

export default Weather;