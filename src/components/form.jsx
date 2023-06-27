import React from "react";

const Form = props => {
    return (
        <form className="form" onSubmit={props.weatherMethod}>
            <input className="form__input" type="text" name="city" placeholder="Введите название города" />
            <button className="form__button">Узнать погоду</button>
        </form>
    );
}

export default Form;