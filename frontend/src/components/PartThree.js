import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
import csc from 'country-state-city';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const PartThree = (props) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const getCountries = async () => {
            try {
                setIsLoading(true);
                const result = await csc.getAllCountries();
                let allCountries = [];
                allCountries = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                const [{ isoCode: firstCountry } = {}] = allCountries;
                setCountries(allCountries);
                setSelectedCountry(firstCountry);
                setIsLoading(false);
            } catch (error) {
                setCountries([]);
                setIsLoading(false);
            }
        };
        getCountries();
    }, []);

    useEffect(() => {
        const getStates = async () => {
            try {
                const result = await csc.getStatesOfCountry(selectedCountry);
                let allStates = [];
                allStates = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                console.log({ allStates });
                const [{ isoCode: firstState = '' } = {}] = allStates;
                setCities([]);
                setSelectedCity('');
                setStates(allStates);
                setSelectedState(firstState);
            } catch (error) {
                setStates([]);
                setCities([]);
                setSelectedCity('');
            }
        };
        getStates();
    }, [selectedCountry]);

    useEffect(() => {
        const getCities = async () => {
            try {
                const result = await csc.getCitiesOfState(
                    selectedCountry,
                    selectedState
                );
                let allCities = [];
                allCities = result?.map(({ name }) => ({
                    name
                }));
                const [{ name: firstCity = '' } = {}] = allCities;
                setCities(allCities);
                setSelectedCity(firstCity);
            } catch (error) {
                setCities({});
            }
        };
        getCities();
    },[selectedState]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = props;
            const updatedData = {
                country: countries.find((country) => country.isoCode === selectedCountry)?.name,
                state: states.find((state) => state.isoCode === selectedState)?.name || '', //shows undefined for some countries
                city: selectedCity
            };

            await axios.post(`${BASE_API_URL}/register`, {
                ...user,
                ...updatedData
            });
            Swal.fire("Registered successfully, please login!").then((result) => {
                if (result.isConfirmed || result.isDismissed) {
                    // props.resetUser(); - function on AppRouter, causes crash if left in but needed when we implement Logout function
                    props.history.push('/login'); // routes user to login page once registered & accepts new details
                }
            });
        } catch (error) {
            if (error.response) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data
                });
            }
        }
    };
    return (
        <Form className="input-form" onSubmit={handleSubmit}>
            <motion.div className="col-md-6 offset-md-3" initial={{x:'-100vw'}} animate={{x:0}} transition={{stiffness: 50}}>
                <Form.Group controlId="country">
                    {isLoading && (
                        <p className="loading">Loading countries, please wait...</p>
                    )}
                    <Form.Label></Form.Label>
                    <Form.Control
                        id="regInputField"
                        as="select"
                        name="country"
                        value={selectedCountry}
                        onChange={(event) => setSelectedCountry(event.target.value)}>
                        {countries.map(({ isoCode, name }) => (
                            <option value={isoCode} key={isoCode}>
                                {name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="state">
                    <Form.Label></Form.Label>
                    <Form.Control
                        id="regInputField"
                        as="select"
                        name="state"
                        value={selectedState}
                        onChange={(event) => setSelectedState(event.target.value)}>
                        {states.length > 0 ? (
                            states.map(({ isoCode, name }) => (
                                <option value={isoCode} key={isoCode}>
                                    {name}
                                </option>
                            ))
                        ) : (
                            <option value='' key=''>
                                No state found
                            </option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label></Form.Label>
                    <Form.Control
                        id="regInputField"
                        as="select"
                        name="city"
                        value={selectedCity}
                        onChange={(event) => setSelectedCity(event.target.value)}>
                        {cities.length > 0 ? (
                            cities.map(({ name }) => (
                                <option value={name} key={name}>
                                    {name}
                                </option>
                            ))
                        ) : (
                            <option value="">No cities found</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Button className="nextButton" variant="primary" type="submit">
                    Register
                    </Button>
            </motion.div>
        </Form>
    );
};

export default PartThree;