
export const MiniStatisticsService = {
	miniStatistic: async () => {
		const items = [
			{ total: 1110, title: "total books" },
			{ total: "97%", title: "happy customer" },
			{ total: 1258, title: "authors" },
			{ total: 20898 , title: "books sold" },
		]
		return items;
	}
}