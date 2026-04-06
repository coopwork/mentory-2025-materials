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
import { useGetCategoriesQuery } from '@/entities/categories/model/use-get-categories-query.ts';

const ProductFiltersForm = () => {
	const { filters, setFiltersQuery } = useProductFilters();
	const categories = useGetCategoriesQuery();

	return (
		<section className='mb-10 flex flex-col gap-4'>
			<form className='flex items-center'>
				<Input
					required
					placeholder='Поиск...'
					className='rounded-e-none'
					value={filters.search ?? ''}
					onChange={(e) => setFiltersQuery({ search: e.target.value })}
				/>
				<Button className='rounded-s-none'>Найти</Button>
			</form>

			<div className='grid grid-cols-3 gap-4'>
				<div className='grid w-full max-w-xs gap-2'>
					<Label htmlFor='category'>Категория</Label>
					<Select
						disabled={categories.isPending}
						value={filters.category ?? 'undefined'}
						onValueChange={(value) =>
							setFiltersQuery({
								category: value !== 'undefined' ? value : undefined,
							})
						}
					>
						<SelectTrigger
							id='category'
							className='max-w-[180px]'
						>
							<SelectValue placeholder='Категория' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value={'undefined'}>Все категории</SelectItem>
								{categories?.data?.map((category) => (
									<SelectItem
										key={category.id}
										value={category.name}
									>
										{category.label}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className='grid w-full max-w-xs gap-2'>
					<Label htmlFor='sort'>Сортировка</Label>
					<Select
						value={
							filters._sort && filters._order
								? `${filters._sort}___${filters._order}`
								: 'undefined'
						}
						onValueChange={(value) => {
							const [_sort, _order] = value.split('___');
							setFiltersQuery({
								_sort: _sort !== 'undefined' ? _sort : undefined,
								_order: _order !== 'undefined' ? _order : undefined,
							});
						}}
					>
						<SelectTrigger
							id='sort'
							className='max-w-[180px]'
						>
							<SelectValue placeholder='Сортировать' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='undefined'>По умолчанию</SelectItem>
								<SelectItem value='name___asc'>
									<ArrowUpIcon /> По названию
								</SelectItem>
								<SelectItem value='name___desc'>
									<ArrowDownIcon />
									По названию
								</SelectItem>
								<SelectItem value='price___asc'>
									<ArrowUpIcon /> По цене
								</SelectItem>
								<SelectItem value='price___desc'>
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
							{[filters.price_gte ?? 1, filters.price_lte ?? 100000].join(
								' до ',
							)}
						</span>
					</div>
					<Slider
						id='prices'
						value={[filters.price_gte ?? 1, filters.price_lte ?? 100000]}
						onValueChange={(values) => {
							setFiltersQuery({
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
