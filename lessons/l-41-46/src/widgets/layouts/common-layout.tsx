import type { ReactNode } from 'react';
import Header from '@/widgets/header';

const CommonLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main className='pt-24'>{children}</main>
		</>
	);
};

export default CommonLayout;
