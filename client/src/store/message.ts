export type SentMessage = {
    content: string
    createdAt: string
    id: string
    receiver: {
        email: string
    }
    receiverId: string
    sender: {
        email: string
    }
    senderId: string
}
