

const validation = ({ userData, setErrors }) =>{

    let tempError = {}

    if (!userData.email) tempError.email = "Email is required"
    else if (!/^.+@.+\..+$/.test(userData.email)) tempError.email = "Email invaild"
    else if (userData.email.length > 35) tempError.email = " Email length is too long"
    else tempError.email = "" 

    if (!/\d/.test(userData.password)) tempError.password = "The password must contain at least one number"
    else if (userData.password.length < 6 || userData.password.length > 10) tempError.password = "The password must have between 6 - 10 characters"
    else tempError.password = "";


    setErrors(tempError)
};

export default validation;
