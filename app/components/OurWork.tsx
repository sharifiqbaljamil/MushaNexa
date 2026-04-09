'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { RiArrowRightUpLine } from '@remixicon/react';

const projects = [
	{
		id: '01',
		title: 'Titan',
		category: 'AI Security · SaaS',
		year: '2024',
		description:
			'Marketing site and product dashboard for a real-time AI-powered security intelligence platform.',
		tags: ['UI/UX', 'Next.js', 'Dashboard'],
		href: '#',
		images: ['/deviceframes.png', '/deviceframes.png', '/deviceframes.png'],
	},
	{
		id: '02',
		title: 'FlowDesk',
		category: 'Productivity · CRM',
		year: '2024',
		description:
			'CRM and workflow automation platform for remote-first teams with real-time collaboration tools.',
		tags: ['Web App', 'React', 'Tailwind'],
		href: '#',
		images: ['/deviceframes.png', '/deviceframes.png', '/deviceframes.png'],
	},
	{
		id: '03',
		title: 'Orion Commerce',
		category: 'E-commerce · Retail',
		year: '2023',
		description:
			'High-conversion e-commerce storefront with headless CMS integration and edge-cached performance.',
		tags: ['E-commerce', 'Next.js', 'Drupal'],
		href: '#',
		images: ['/deviceframes.png', '/deviceframes.png', '/deviceframes.png'],
	},
];

const OurWork = () => {
	const stripRefs = useRef<(HTMLDivElement | null)[]>([]);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollStart = useRef(0);

	const onPointerDown = (e: React.PointerEvent<HTMLDivElement>, idx: number) => {
		const el = stripRefs.current[idx];
		if (!el) return;
		isDragging.current = true;
		startX.current = e.clientX;
		scrollStart.current = el.scrollLeft;
		el.setPointerCapture(e.pointerId);
	};

	const onPointerMove = (e: React.PointerEvent<HTMLDivElement>, idx: number) => {
		if (!isDragging.current) return;
		const el = stripRefs.current[idx];
		if (!el) return;
		el.scrollLeft = scrollStart.current - (e.clientX - startX.current);
	};

	const onPointerUp = () => {
		isDragging.current = false;
	};

	return (
		<section className='container mx-auto px-4 py-12 md:py-16 lg:py-32'>

			{/* Section heading */}
			<div className='flex items-end justify-between mb-16 md:mb-24'>
				<h2 className='uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none'>
					Selected Work
				</h2>
				<span className='hidden sm:block text-zinc-400 text-sm font-light'>
					{projects.length} projects
				</span>
			</div>

			{/* Project rows */}
			<div className='flex flex-col'>
				{projects.map((project, idx) => (
					<div
						key={project.id}
						className='group border-t border-zinc-200 last:border-b py-10 md:py-14'
					>
						{/* Top row: index · title · year · CTA */}
						<div className='flex items-baseline gap-4 md:gap-8 mb-8'>
							<span className='text-zinc-300 font-semibold text-sm tabular-nums shrink-0'>
								{project.id}
							</span>
							<h3 className='font-extrabold text-2xl md:text-4xl lg:text-5xl leading-none flex-1'>
								{project.title}
							</h3>
							<span className='hidden md:block text-zinc-400 text-sm shrink-0'>
								{project.year}
							</span>
							<a
								href={project.href}
								className='shrink-0 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border border-zinc-900 rounded-full px-4 py-2 hover:bg-zinc-900 hover:text-white transition-colors duration-300'
							>
								<span className='hidden sm:inline'>View</span>
								<RiArrowRightUpLine size={14} />
							</a>
						</div>

						{/* Bottom row: meta/desc · scrollable images */}
						<div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>

							{/* Left — meta + description */}
							<div className='flex flex-col gap-4 lg:w-64 xl:w-72 shrink-0 lg:pt-1'>
								<p className='text-[11px] uppercase tracking-[0.15em] text-zinc-400 font-medium'>
									{project.category}
								</p>
								<p className='text-zinc-600 text-sm md:text-base font-light leading-relaxed'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2 mt-auto pt-2'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-500 border border-zinc-200'
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Right — horizontally scrollable image strip */}
							<div
								ref={(el) => { stripRefs.current[idx] = el; }}
								onPointerDown={(e) => onPointerDown(e, idx)}
								onPointerMove={(e) => onPointerMove(e, idx)}
								onPointerUp={onPointerUp}
								onPointerLeave={onPointerUp}
								className='flex-1 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none'
								style={{ scrollbarWidth: 'none' }}
							>
								<div className='flex gap-5 w-max'>
									{project.images.map((src, i) => (
										<div
											key={i}
											className='relative shrink-0 rounded-2xl overflow-hidden w-[420px] md:w-[520px] lg:w-[580px]'
										>
											<Image
												src={src}
												alt={`${project.title} screenshot ${i + 1}`}
												width={500}
												height={500}												
												className='object-cover'
												draggable={false}
											/>
										</div>
									))}
								</div>
							</div>

						</div>
					</div>
				))}
			</div>

		</section>
	);
};

export default OurWork;
