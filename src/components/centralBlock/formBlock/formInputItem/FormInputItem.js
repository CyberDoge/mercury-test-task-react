import React from 'react'
export default class FormInputItem extends React.Component {
    render() {
        return (
            <input
                className="form__input-item form__input_email"
                placeholder="E-Mail"
                type="email"
            />
        )
    }
}