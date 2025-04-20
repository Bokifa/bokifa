import { Banner } from '@/features/banner';
import { AllBooks } from '@/features/book/processes';
import { MiniStatistics } from '@/features/mini-statistics';

export default async function Home() {
	return (
		<>
			<Banner />
			<MiniStatistics/>
			<AllBooks/>
		</>
	);
}