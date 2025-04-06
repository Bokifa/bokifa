
import { ProgressBar } from './progress-bar';

function composeProviders(providers) {
    return function ComposedProviders({ children }) {
        return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
    };
}

const CombinedProviders = composeProviders([ProgressBar]);

const Providers = ({ children }) => {
    return <CombinedProviders>{children}</CombinedProviders>;
};

export default Providers;