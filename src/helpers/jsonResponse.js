export const jsonResponse = ({status = 200, message = "OK", data = null}) => {
    return {
        success: status >= 200 && status < 300,
        status,
        message,
        data
    }
}