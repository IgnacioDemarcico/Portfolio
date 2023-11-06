import UseDB,{setFavoritos} from "../hooks/UseDB"

export default class DB {
    async getCreaciones() {
        return await UseDB('/creaciones')
    }
    async getDestacados() {
        return await UseDB('/creaciones?destacado=true')
    }
    async setFavoritos(creacion){
        return await setFavoritos(creacion)
    }
}