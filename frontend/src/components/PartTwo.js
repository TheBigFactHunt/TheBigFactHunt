import React from 'react';
import {useForm} from 'react-hook-form';
import {Form, Button} from 'react-bootstrap';
import { motion } from 'framer-motion';

const PartTwo = (props) => {
    const {user} = props;
    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            user_email: user.user_email,
            user_password: user.user_password
        }
    });
    const onSubmit = (data) => {
        props.updateUser(data);
        props.history.push('/third');
    };
    return(
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <motion.div className="col-md-6 offset-md-3" initial={{x:'100-vw'}} animate={{x:0}} transition={{stiffness:150}}>
                <Form.Group controlId="first_name">
                    <Form.Label></Form.Label>
                    <Form.Control id="regInputField" type="email" name="user_email" placeholder="E-mail address" autoComplete="off" ref={register({
                        required: "E-mail address required.", pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "E-mail invalid."
                        }
                    })}
                    className={`${errors.user_email ? 'input-error' : ''}`} />
                    {errors.user_email && (
                        <p className="errorMsg">{errors.user_email.message}</p>)}
                </Form.Group>
                
                <Form.Group controlId="password">
                    <Form.Label></Form.Label>
                    <Form.Control id="regInputField" type="password" name="user_password" placeholder="Choose a password" autoComplete="off" ref={register({
                        required: "Password required",
                        minLength:{value: 6, message: "Your password needs to be at least 6 characters."}
                    })}
                    className={`${errors.user_password ? 'input-error' : ''}`} />
                    {errors.user_password && (
                        <p className="errorMsg">{errors.user_password.message}</p>
                    )}
                </Form.Group>

                <Button className="nextButton" variant="primary" type="submit">
                    Next
                </Button>
            </motion.div>
        </Form>
    );
};

export default PartTwo;