import { BannerService } from '../services/banner.service'
import { BannerCarousel } from '../ui/banner-carousel'

export const Banner = async () => {
	const banners = await BannerService.getAll();

    return (
		<BannerCarousel banners={banners}/>
    )

}