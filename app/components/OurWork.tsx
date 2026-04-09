import { RiArrowRightUpLine } from '@remixicon/react';

const OurWork = () => {
	return (
		<section className='container mx-auto px-4 py-12 md:py-16 lg:py-32'>
			<h2 className='uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
				Selected Work
			</h2>
			<div className='mt-8 md:mt-16 flex flex-col gap-8 '>
				{[0, 0].map((item, idx) => (
					<div
						key={idx}
						className='flex flex-col gap-6 pb-8 md:pb-16 text-center border-b border-zinc-300'
					>
						<div className='lg:flex'>
							<div className='overflow-y-hidden pb-8 lg:w-[500px]'>
								<div className='w-fit flex oversscroll-x-auto pt-8'>
									<img src='/deviceframes.png' alt='' className='' />
									<img src='/deviceframes.png' alt='' className='' />
									<img src='/deviceframes.png' alt='' className='' />
									<img src='/deviceframes.png' alt='' className='' />
								</div>
							</div>
							<div className='flex flex-col gap-4'>
								<h3 className='font-bold text-xl md:text-2xl lg:text-3xl'>
									Titan
								</h3>
								<p className='text-lg md:text-xl lg:text-2xl font-light'>
									Designed marketing site and product dashboard for a real-time
									AI security tool.
								</p>
								<a
									href='#'
									className='uppercase w-fit mx-auto flex items-center gap-4 text-sm border border-zinc-900 rounded-full px-6 py-2'
								>
									View Work
									<RiArrowRightUpLine />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurWork;
