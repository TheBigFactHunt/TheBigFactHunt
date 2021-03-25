import React from "react";


const SubmitScore = (props) => {

}

// below code needs editing to fit posting scores to back end
// const onSubmit = async (data) => {
//     console.log(data);

//     try {
//         const response = await axios.post(`${BASE_API_URL}/login`, data);
//         const resData = await response.data
//         setSuccessMessage("User logged in");
//         setErrorMessage('');
//         props.updateUser(resData);
//         localStorage.setItem("first_name", resData.first_name)
//         localStorage.setItem("last_name", resData.last_name)
//         localStorage.setItem("_id", resData._id);
//         history.push("/home");
//     } catch (error) {
//         console.log(error);
//         if (error.response) {
//             console.log("Error", error.response.data);
//             setErrorMessage(error.response.data);
        }
    }
}

export default SubmitScore;