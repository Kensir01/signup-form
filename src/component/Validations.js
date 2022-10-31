const Validations = (values) => {

    let errors={};

    if(!values.firstname){
        errors.firstname="First Name cannot be empty"
    }
    if(!values.lastname){
        errors.lastname="Last Name cannot be empty"
    }
    if(!values.email){
        errors.email="Email cannot be empty"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Looks like this is not an email"
    }
    if(!values.password){
        errors.password="Password cannot be empty"
    }

    return errors;
};

export default Validations;