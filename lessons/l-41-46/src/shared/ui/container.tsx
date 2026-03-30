import type { WrapperPropsType } from '@/shared/types/base-types.ts';
import { cn } from '@/shared/helpers/cn.ts';

const Container = ({ children, className }: WrapperPropsType) => {
	return (
		<main className={cn('max-w-7xl mx-auto px-4', className)}>{children}</main>
	);
};

export default Container;
