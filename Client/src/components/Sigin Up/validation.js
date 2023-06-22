const validation = ({ userInfo, setErrors }) =>{

    let tempError = {}

    if (!userInfo.email) tempError.email = "Email is required"
    else if (!/^.+@.+\..+$/.test(userInfo.email)) tempError.email = "Email invaild"
    else if (userInfo.email.length > 35) tempError.email = " Email length is too long"
    else tempError.email = "" 

    if (!/\d/.test(userInfo.password)) tempError.password = "The password must contain at least one number"
    else if (userInfo.password.length < 6 || userInfo.password.length > 10) tempError.password = "The password must have between 6 - 10 characters"
    else tempError.password = "";

    if(userInfo.repeatPassword !== userInfo.password) tempError.repeatPassword = "The passwords do not match";
    else tempError.repeatPassword= "";


    setErrors(tempError)
};

export default validation;