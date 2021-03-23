import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {BASE_API_URL} from '../utils/constants';

const Login = () => {
    const {register, handleSubmit, errors} = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userDetails, setUserDetails] = useState('');

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await axios.post(`${BASE_API_URL}/login`, data);
            const resData = await response.data
            setSuccessMessage("User logged in");
            setErrorMessage('');
            setUserDetails(resData);
            localStorage.setItem("first_name", resData.first_name)
            localStorage.setItem("last_name", resData.last_name)
            localStorage.setItem("_id", resData._id)
        } catch (error) {
            console.log(error);
            if (error.response) {
                console.log("Error", error.response.data);
                setErrorMessage(error.response.data);
            }
        }
    };
    return(
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">
                {errorMessage ? (
                    <p className="errorMsg login-error">{errorMessage}</p>
                ) : (
                    <div>
                        <p className="successMsg">{successMessage}</p>

                        {userDetails && (
                            <div className="user-details">
                                <p>Logged in as:</p>
                                <div>First Name: {userDetails.first_name}</div>
                                <div>Surname: {userDetails.last_name}</div>
                                <div>Email: {userDetails.user_email}</div>
                            </div>
                        )}
                    </div>
                )}
                <Form.Group controlId="first_name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="user_email"
                        placeholder="Enter your e-mail address"
                        ref={register({
                            required: "Email is required.",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email is not valid"
                            }
                        })}
                        className={`${errors.user_email ? 'input-error' : ''}`}
                        />
                        {errors.user_email && (
                            <p className="errorMsg">{errors.user_email.message}</p>
                        )}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="user_password"
                        placeholder="Choose a password"
                        ref={register({
                            required: "Password is required.",
                            minLength: {
                                value: 6,
                                message: "Password should have at least 6 characters"
                            }
                        })}
                        className={`${errors.user_password ? 'input-error' : ''}`} 
                        />
                        {errors.user_password && (
                            <p className="errorMsg">{errors.user_password.message}</p>
                        )}
                </Form.Group>

                 
                <Button variant="primary" type="submit" >
                Login
                </Button>
            </div>
        </Form>
    );
};

export default Login;