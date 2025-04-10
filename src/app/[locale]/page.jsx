import { BannerCarousel } from '@/features/banner/banner-carousel';
import { getLanguage } from '@/features/language/helpers/lang.helper';
import { LanguageChange } from '@/features/language/processes/language-change';
export default async function HomePage() {
	return (
		<>
			<BannerCarousel/>
		</>
	);
}