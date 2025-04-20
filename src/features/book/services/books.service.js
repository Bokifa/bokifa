import { api } from '@/lib/api'
import { BOOK_ENDPOINTS } from '../book.config'


export const BookService = {
	getAll: async () => {
		return api(BOOK_ENDPOINTS.getAll())
	}
}