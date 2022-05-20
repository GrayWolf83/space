import axios from 'axios'

const http = axios.create({
	baseURL: 'https://api.spacexdata.com/v5/',
})

const httpService = {
	get: http.get,
}

export default httpService
