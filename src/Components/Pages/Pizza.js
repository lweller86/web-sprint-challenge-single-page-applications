
import React, { useState, useEffect } from "react";
import '../../App.css'
import schema from "../Validation/formSchema";
import * as yup from 'yup';






const OrderForm = () => {

    const [form, setForm] =
        useState({
            username: '',
            pizzaType: '',
            cheese: false,
            extraCheese: false,
            pepperoni: false,
            onions: false,
            specialText: '',
        });

    const [formErrors, setFormErrors] =
        useState({
            username: '',
            pizzaType: '',
            cheese: '',
            extraCheese: '',
            pepperoni: '',
            onions: '',
            specialText: '',
        });



    const [disabled, setDisabled] = useState(true);

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        /*setFormErrors(name, valueToUse)*/
        validate(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    })

    const onSubmit = () => {

    }



    return (
        <div className="order-heading">
            <div className="heading-container">
                <img src="/images/brickoven.jpg" alt='pizza oven' />
                <h1 className="orderForm">Order Here</h1>
            </div>

            <div className="form-container">

                <div>

                    <form id='pizza-form' onSubmit={onSubmit} >


                        <label>Enter name for order
                            <p>{formErrors.username}</p>
                            <input

                                type='text'
                                id="name-input"
                                maxLength='12'
                                placeholder="Name"
                                name='username'
                                onChange={change}

                            />
                        </label>
                        <p>{formErrors.username?.message}</p>
                        <br />
                        <h2>Please select your pizza to order</h2>
                        <p>{formErrors.pizzaType?.message}</p>
                        <label>Select your Pizza Size Here:
                            <select
                                id='size-dropdown'
                                name='pizzaType'
                                onChange={change}


                            >
                                <option value=''>Select A Pizza To Start    </option>
                                <option value='small'>Small Pizza </option>
                                <option value='medium'>Medium Pizza </option>
                                <option value='large'>Large Pizza   </option>
                                <option value='xL'>XL Pizza</option>

                            </select>
                        </label>
                        <h2> Customize your pizza below</h2>
                        <section className="custom-pizza">
                            <label>Cheese
                                <input
                                    type='checkbox'
                                    name='cheese'
                                    onChange={change}
                                    value='cheese'
                                />
                            </label>
                            <br />
                            <label>Extra Cheese + 1$
                                <input
                                    type='checkbox'
                                    name='extraCheese'
                                    onChange={change}
                                    value='Extra Cheese'


                                />
                            </label>
                            <br />
                            <label>Pepperoni
                                <input
                                    type='checkbox'
                                    name='pepperoni'
                                    onChange={change}
                                    value='Pepperoni'

                                />
                            </label>
                            <br />
                            <label>Onions
                                <input
                                    type='checkbox'
                                    name='onions'
                                    onChange={change}
                                    value='onions'
                                />
                            </label>
                            <label>Special Instructions
                                <input
                                    type='text'
                                    id="special-text"
                                    maxLength='200'
                                    placeholder="Type Special Instructions Here"
                                    name='specialText'
                                    onChange={change}
                                />
                            </label>
                            <br/>

                            <button id="order-button" disabled={disabled} type="submit" >Submit</button>


                        </section>
                        <div className="current-order">

                        </div>



                    </form>
                </div>







            </div>
        </div>





    )
}

export default OrderForm