import axios from 'axios'
import {
	GITHUB_API_URL,
	SEARCH_USERS_ENDPOINT,
	RESULTS_PER_PAGE,
	USER_ENDPOINT,
} from '@/utils/constants'
import { UserDetails, SearchResults } from '@/types'

const api = axios.create({
	baseURL: GITHUB_API_URL,
})

export const searchUsers = async (query: string): Promise<SearchResults> => {
	const response = await api.get(`${SEARCH_USERS_ENDPOINT}?q=${query}&per_page=${RESULTS_PER_PAGE}`);
	return response.data;
};

export const getUser = async (user: string): Promise<UserDetails> => {
	const response = await api.get(`${USER_ENDPOINT}/${user}`);
	return response.data;
};

export default api
