import UseDB from "../hooks/UseDB"

export default class DB {
    async getCreaciones() {
        return await UseDB('/creaciones')
    }
}