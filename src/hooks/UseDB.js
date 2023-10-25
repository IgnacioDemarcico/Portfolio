const API_URL = 'http://localhost:3004'

export default async function useDB(endpoint) {
    try {
        const response = await fetch(API_URL + endpoint)
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}