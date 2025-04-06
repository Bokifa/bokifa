'use client';

import { AppProgressProvider } from '@bprogress/next';

export const ProgressBar = ({ children }) => {
    return (
        <AppProgressProvider 
			height="4px" 
			color="#8ac44f" 
			options={{ showSpinner: true }} 
			shallowRouting
		>
            {children}
        </AppProgressProvider>
    );
};
