import { RiEyeFill } from '@remixicon/react';

const OurWork = () => {
	const data = [
		{ id: '01', title: 'ThreatsEye', description: 'ThreatsEye is an advanced cybersecurity platform delivering AI-driven threat intelligence, real-time monitoring, and rapid incident response.', img: '/projectone.png', imgLarge: '/projectonelarge.png', link: 'https://threatseye.com/' },
		{ id: '02', title: 'ArcelorMittal', description: 'A custom-built corporate website created for ArcelorMittal with responsive design, brand-focused messaging, and a polished digital presence.', img: '/projecttwo.png', imgLarge: '/projecttwolarge.png', link: 'https://barsandrods.arcelormittal.com/' },
	];
	return (
		<section id='work' className='container mx-auto px-4'>
			<h2 className='uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none'>
				Our Work
			</h2>
			{/* projects */}
			<div className='mt-8 md:mt-16'>
				{/* single project */}
				{data.map((project) => (
					<div key={project.id} className='mb-8 text-center flex flex-col items-center gap-4 border-b pb-8 sm:grid sm:grid-cols-2 lg:text-left lg:items-start lg:gap-x-16 xl:gap-x-32 2xl:gap-x-48'>
						<picture className='row-start-1 row-end-4 w-full overflow-hidden rounded-xl'>
							<source media='(min-width:1024px)' srcSet={project.imgLarge} />
							<source media='(min-width:1px)' srcSet={project.img} />
							<img src={project.img} alt={project.title} className='h-auto w-full object-cover' />
						</picture>
						<h3 className='font-bold text-xl md:text-2xl lg:text-3xl sm:items-end sm:self-end'>{project.title}</h3>
						<p className='text-lg md:text-xl lg:text-2xl font-light sm:self-start lg:self-center'>{project.description}</p>
						<a href={project.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-4 font-semibold bg-black text-white px-4 py-2 w-fit row-start-3 row-end-4 sm:mx-auto rounded-full sm:col-start-2 lg:mx-0 lg:justify-self-start'>View Project <RiEyeFill /></a>
					</div>
				))}
			</div>
		</section>
	)
}

export default OurWork