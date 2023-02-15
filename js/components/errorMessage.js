export function message(messageType="success", errorType = ""){
    return `<div class="${messageType}">${errorType}</div>`;
}
// export default message;