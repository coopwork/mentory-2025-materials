import { Input } from '@/shared/ui/input.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { Label } from '@/shared/ui/label.tsx';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select.tsx';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { Slider } from '@/shared/ui/slider.tsx';
import { useProductFilters } from '@/features/filter-products/model/use-product-filters.ts';

const ProductFiltersForm = () => {
	const { searchQuery, setSearchQuery } = useProductFilters();
	console.log('searchQuery', searchQuery);
	return (
		<section className='mb-10 flex flex-col gap-4'>
			<form className='flex items-center'>
				<Input
					required
					placeholder='Поиск...'
					className='rounded-e-none'
					value={searchQuery.search ?? ''}
					onChange={(e) => setSearchQuery({ search: e.target.value })}
				/>
				<Button className='rounded-s-none'>Найти</Button>
			</form>

			<div className='grid grid-cols-3 gap-4'>
				<div className='grid w-full max-w-xs gap-2'>
					<Label htmlFor='slider-demo-temperature'>Категория</Label>
					<Select>
						<SelectTrigger className='max-w-[180px]'>
							<SelectValue placeholder='Категория' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='Все категории'>Все категории</SelectItem>
								<SelectItem value='Смартфоны'>Смартфоны</SelectItem>
								<SelectItem value='Планшеты'>Планшеты</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className='grid w-full max-w-xs gap-2'>
					<Label htmlFor='slider-demo-temperature'>Сортировка</Label>
					<Select>
						<SelectTrigger className='max-w-[180px]'>
							<SelectValue placeholder='Сортировать' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='Все категории'>
									<ArrowUpIcon /> По алфавиту
								</SelectItem>
								<SelectItem value='Все категории'>
									<ArrowDownIcon /> По алфавиту
								</SelectItem>
								<SelectItem value='Смартфоны'>
									<ArrowUpIcon /> По цене
								</SelectItem>
								<SelectItem value='Планшеты'>
									<ArrowDownIcon /> По цене
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className='mb-2 mx-auto grid w-full max-w-xs gap-2'>
					<div className='flex items-center justify-between gap-2'>
						<Label htmlFor='prices'>Цена</Label>
						<span className='text-sm text-muted-foreground'>
							от{' '}
							{[
								searchQuery.price_gte ?? 1,
								searchQuery.price_lte ?? 100000,
							].join(' до ')}
						</span>
					</div>
					<Slider
						id='prices'
						value={[
							searchQuery.price_gte ?? 1,
							searchQuery.price_lte ?? 100000,
						]}
						onValueChange={(values) => {
							console.log(values);
							setSearchQuery({
								price_gte: values[0],
								price_lte: values[1],
							});
						}}
						min={1}
						max={100000}
						step={10}
					/>
				</div>
			</div>
		</section>
	);
};

export default ProductFiltersForm;
