const checkExpiryDate = () => {

    let expiresOn: number;

    if (localStorage.getItem('user') !== null) {
        let userObj = localStorage.getItem('user')
        expiresOn = userObj && JSON.parse(userObj).expiresOn 
        
    } else {
        return
    }


    if (Date.now() < expiresOn) return true

    return false
}


export default checkExpiryDate;