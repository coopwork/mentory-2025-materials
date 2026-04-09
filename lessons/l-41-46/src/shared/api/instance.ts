import axios from 'axios';
import { ENV } from '@/config/environments.ts';

export const CORE_API = axios.create({
	baseURL: ENV.CORE_API_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('robo-store-token')}`,
	},
});
