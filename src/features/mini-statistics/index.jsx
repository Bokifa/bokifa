import { MiniStatisticsService } from './mini-statistics.service'
import { MiniStatisticsInfiniteScroll } from './mini-statistics.ui'

export const MiniStatistics = async () => {
	const statistic = await MiniStatisticsService.miniStatistic();
	console.log(statistic);
	
	return (
		<MiniStatisticsInfiniteScroll statistics={statistic}/>
	)
}