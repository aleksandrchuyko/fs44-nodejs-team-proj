const messages = {
    400: "Bad request",
    401: "Unauthorized user",
    403: "Forbidden",
    404: "Page not found",
    409: "Conflict"
}

const RequestError = (status, message = messages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = RequestError;