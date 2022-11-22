import { IPage } from '../../../interfaces/page.interface'
import { api } from '../api'

export const pageApi = api.injectEndpoints({
	endpoints: build => ({
		fetchAllPages: build.query<IPage[], null>({
			query: () => ({ url: '/page' })
		}),
		fetchOnePage: build.query<IPage, number>({
			query: id => ({ url: `/page/${id}` }),
			providesTags: (result, error, id) => [{ type: 'Pages', id }]
		})
	})
})