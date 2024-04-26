export const validateConfirmPassword = (pass, confPass) => {
    return pass === confPass
}

export const passwordConfirmationMessage = 'Las claves no coinciden'