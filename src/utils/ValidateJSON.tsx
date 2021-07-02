const validateJSON = (text: string) => {
    try {
        JSON.parse(text);
        return true;
    } catch (e) {
        return false;
    }
}

export default validateJSON;