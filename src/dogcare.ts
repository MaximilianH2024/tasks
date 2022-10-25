export function dogcarePasswordReq(password: string): boolean {
    // let returningBool = true;
    // Checks if length is less than 16:
    if (password.length != 16) {
        return false;
        // Password does not contain any numbers if the below were to be false:
    } else if (!/[0-9]/.test(password)) {
        return false;
        // Password does not contain any special characters if the below returns false:
    } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        return false;
        // Password does not contain any letters if the below returns false:
    } else if (!/^[A-Z]/i.test(password)) {
        return false;
    } else {
        return true;
    }
}
