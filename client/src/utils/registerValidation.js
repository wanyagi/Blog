const registerValidation = (enteredValues) => {

    let errors = {}; 

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{6,}$/;
    const regexPassword = /^(?=.*[0-9]).{8,}$/;

    if (!enteredValues.name) {
        errors.name = "Ce champ ne peut pas être vide"; 
    };

    if (!enteredValues.username) {
        errors.username = "Ce champ ne peut pas être vide"; 
    }; 

    if (!enteredValues.email) {
        errors.email = "Ce champ ne peut pas être vide"; 
    } else if (!regexEmail.test(enteredValues.email)) {
        errors.email = "Ton email est invalid"; 
    }; 

    if (!enteredValues.password) {
        errors.password = "Ce champs ne peut pas être vide"; 
    } else if (!regexPassword.test(enteredValues.password)) {
        errors.password = "Le mot de passe doit contenir 8 lettres et un chiffre"; 
    }; 

    return errors; 
}

export default registerValidation; 