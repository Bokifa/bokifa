
import { CurrencyProvider } from '@/features/currency/processes/currency-provider';
import { ProgressBar } from './progress-bar';
import { TanstackProvider } from './tanstack.provider';
import { SwiperProvider } from './swiper.provider';

function composeProviders(providers) {
    return function ComposedProviders({ children }) {
        return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
    };
}

const CombinedProviders = composeProviders([ProgressBar, TanstackProvider, CurrencyProvider, SwiperProvider]);

const Providers = ({ children }) => {
    return <CombinedProviders>{children}</CombinedProviders>;
};

export default Providers;