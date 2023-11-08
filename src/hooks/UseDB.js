const API_URL = 'http://localhost:300'

export default async function useDB(endpoint) {
    try {
        const response = await fetch(API_URL + endpoint)
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}
export async function setFavoritos(id,creacion){
    try {
        const response = await fetch(`${API_URL}/creaciones/${id}`,{method:"put", headers: { "Content-Type": "application/json" }, body:JSON.stringify(creacion)})
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}