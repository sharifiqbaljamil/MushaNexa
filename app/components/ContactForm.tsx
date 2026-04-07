'use client';

import {
	UserRound,
	Mail,
	Phone,
	Settings,
	DollarSign,
	Timer,
	NotebookTabs,
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
	const [state, handleSubmit] = useForm("mlgoodwe");

	if (state.succeeded) {
		return (
			<div className="flex flex-col items-center justify-center pt-20 text-center">
				<h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
					Thanks for reaching out!
				</h3>
				<p className="text-lg text-zinc-500">😊 We will get back to you shortly 😊</p>
			</div>
		);
	}

	return (
		<>
			<h3 className='my-16 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:pb-16'>
				OR Fill Out The Form Below
			</h3>
			<form className='grid gap-8 lg:grid-cols-2' onSubmit={handleSubmit}>
				{/* name */}
				<div className='grid gap-2'>
					<label htmlFor='name' className='font-medium'>
						Full Name<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<UserRound />
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Enter your full name'
							className='p-2 flex-1 outline-none bg-transparent'
							required
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Name" field="name" errors={state.errors} />
				</div>
				{/* email */}
				<div className='grid gap-2'>
					<label htmlFor='email' className='font-medium'>
						Email<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Mail />
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Enter your email'
							className='p-2 flex-1 outline-none bg-transparent'
							required
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>
				{/* phone */}
				<div className='grid gap-2'>
					<label htmlFor='phone' className='font-medium'>
						Phone
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Phone />
						<input
							type='tel'
							name='phone'
							id='phone'
							placeholder='Enter your phone number'
							className='p-2 flex-1 outline-none bg-transparent'
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Phone" field="phone" errors={state.errors} />
				</div>
				{/* project type */}
				<div className='grid gap-2'>
					<label htmlFor='project-type' className='font-medium'>
						Project Type<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Settings />
						<select
							name='project-type'
							id='project-type'
							className='p-2 flex-1 outline-none bg-transparent'
							required
							disabled={state.submitting}
						>
							<option value=''>Select a project type</option>
							<option value='web-design'>Web Design</option>
							<option value='web-development'>Web Development</option>
							<option value='drupal-development'>Drupal Development</option>
							<option value='wordpress-development'>
								Wordpress Development
							</option>
							<option value='seo-optimization'>SEO Optimization</option>
						</select>
					</div>
					<ValidationError prefix="Project Type" field="project-type" errors={state.errors} />
				</div>
				{/* budget range */}
				<div className='grid gap-2'>
					<label htmlFor='budget' className='font-medium'>
						Budget Range
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<DollarSign />
						<select
							name='budget'
							id='budget'
							className='p-2 flex-1 outline-none bg-transparent'
							disabled={state.submitting}
						>
							<option value=''>Select a budget range</option>
							<option value='under-2000'>Under $2000</option>
							<option value='2000-10000'>$2000-$10000</option>
							<option value='10000-50000'>$10000-$50000</option>
							<option value='over-50000'>$50000+</option>
							<option value='not-sure'>Not sure</option>
						</select>
					</div>
					<ValidationError prefix="Budget" field="budget" errors={state.errors} />
				</div>
				{/* project timeline */}
				<div className='grid gap-2'>
					<label htmlFor='timeline' className='font-medium'>
						Project Timeline
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Timer />
						<select
							name='timeline'
							id='timeline'
							className='p-2 flex-1 outline-none bg-transparent'
							disabled={state.submitting}
						>
							<option value=''>Select a timeline</option>
							<option value='asap'>Asap (1-2 weeks)</option>
							<option value='1-2-months'>1-2 months</option>
							<option value='2-3-months'>2-3 months</option>
							<option value='flexible'>Flexible</option>
						</select>
					</div>
					<ValidationError prefix="Timeline" field="timeline" errors={state.errors} />
				</div>
				{/* project description - Tell me more about your project */}
				<div className='grid gap-2 lg:col-span-2'>
					<label htmlFor='description' className='font-medium'>
						Project Description<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-start gap-4 shadow-md border border-zinc-100 px-2 py-2 rounded'>
						<NotebookTabs className='mt-2' />
						<textarea
							name='description'
							id='description'
							className='p-2 flex-1 outline-none h-40 resize-none bg-transparent'
							placeholder='Tell me more about your project...'
							required
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Description" field="description" errors={state.errors} />
				</div>
				<button
					type='submit'
					disabled={state.submitting}
					className='bg-white text-black px-6 sm:px-12 py-2 rounded font-medium sm:mx-auto disabled:opacity-50 transition-opacity'
				>
					{state.submitting ? 'Sending...' : 'Contact'}
				</button>
			</form>
		</>
	);
};

export default ContactForm;
