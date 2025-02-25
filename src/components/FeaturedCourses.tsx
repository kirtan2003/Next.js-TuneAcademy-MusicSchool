'use client'
import data from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'
import { Autour_One } from 'next/font/google'

interface course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    featured: boolean,
    image: string,
}

const FeaturedCourses = () => {
    const featuredCourses = data.courses.filter((course: course) => course.featured)
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h1 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h1>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the best</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-10 md:mx-24'>
                    {featuredCourses.map((course: course) => {
                        return (
                            <div key={course.id} className='flex justify-center'>
                                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                    <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                        <Image
                                            src={course.image}
                                            alt={course.slug}
                                            height={100}
                                            width={300}
                                            className="object-contain rounded"
                                        />
                                        <h3 className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</h3>
                                        <p className='text-sm flex-grow text-neutral-600 dark:text-neutral-400'>{course.description}</p>
                                        <Link href={`/courses/${course.slug}`} className='px-4 py-1 rounded-lg border border-slate-500 bg-teal-600 hover:bg-teal-700 transition duration-200 mt-3'>
                                            Learn More
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={'/courses'} className='px-4 py-2 rounded-lg border border-slate-500 bg-teal-600 hover:bg-teal-700 transition duration-200'>
                    View All courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses