import { IUpdateTabDto } from '../../../components/Form/TabForm/UpdateTab/UpdateTab.dto'
import { IUpdateTabLinkDtoApi } from '../../../components/Form/TabForm/UpdateTabLink/UpdateTabLink.dto'
import { api } from '../api'

export const tabsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		updateTab: builder.mutation<null, IUpdateTabDto>({
			query: ({ id, ...body }) => ({
				url: `/tabs/${id}`,
				method: 'Put',
				body
			}),
			invalidatesTags: (res, error, { id }) => [{ type: 'Pages' }]
		}),
		updateTabLink: builder.mutation<null, IUpdateTabLinkDtoApi>({
			query: ({ id, ...body }) => ({
				url: `/tabs/tablink/${id}`,
				method: 'Put',
				body
			}),
			invalidatesTags: (res, error, { id }) => [{ type: 'Pages' }]
		})
	})
})
