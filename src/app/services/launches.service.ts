import httpService from './http.service'

const endpoint = 'launches/'

const launchesService = {
	getPastLaunches: async () => {
		const { data } = await httpService.get(endpoint + 'past')
		return data
	},
	getUpcomingLaunches: async () => {
		const { data } = await httpService.get(endpoint + 'upcoming')
		return data
	},
	getLaunchById: async (id: string) => {
		const { data } = await httpService.get(endpoint + id)
		return data
	},
}

export default launchesService
