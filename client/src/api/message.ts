import axios from 'axios'

export const getMessageAsReceiver = async (receiverID: string) => {

    console.log("receiverId", receiverID)
    const response = await axios.get(`/api/messages/${receiverID}`, {
        withCredentials: true,
    })
    return response.data
}

export const getSentMessages = async (senderId: string) => {
    
    console.log("senderId",senderId)

    const response = await axios.get(`api/message/${senderId}`, {
        withCredentials: true,
    })
    return response.data
}
