import React, { useState } from 'react';
import contact from './img/contact.svg';

const Contact = () => {
    const [input, setInput] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    })

    const formSubmit = (e) => {
        e.preventDefault()
        alert(`Your Name is ${input.fullname}.
        Your Phone Number is ${input.phone}.
        Your Email is ${input.email}.
        Your Message is ${input.msg}`)
    }

    const inputEvent = (event) => {
        const { name, value } = event.target
        setInput((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    return (
        <><div className="contact_img">
            <img src={contact} alt="" />


            <div className="container contact_div">
                <h1 className='text-center'> Contact Us </h1>

                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="" onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name='fullname'
                                    value={input.fullname}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name='phone'
                                    value={input.phone}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name='email'
                                    value={input.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Write Something</label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name='msg'
                                    value={input.msg}
                                    onChange={inputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

};
export default Contact