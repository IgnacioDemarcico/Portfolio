const API_URL = 'http://localhost:3000'

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
        const response = await fetch(`${API_URL}/creaciones/${id}`,{method:"put", mode: 'cors', body:JSON.stringify({creacion})})
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}