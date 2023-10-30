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