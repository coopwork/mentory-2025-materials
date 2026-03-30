import { BrowserRouter } from 'react-router';
import type { WrapperPropsType } from '@/shared/types/base-types.ts';

const AppProviders = ({ children }: WrapperPropsType) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProviders;
