'use client'
import Link from "next/link"
import CourseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
  id: number,
  title: string,
  slug:string ,
  price: number,
  instructor:string ,
  isFeatured: boolean,
  description:string ,
  // image: "/courses/guitar.jpg" 
}





function FeaturedCourses(){
 const featuredCourses= CourseData.courses.filter((course:Course) => course.isFeatured)
    return(
        <div className="py-12 bg-black">
          <div>
            <div className="text-center">
                <h2 className="text-teal-600 text-base font-semibold tracking-wide uppercase " >Featured Courses</h2>
                <p className="text-white text-3xl mt-2 leading-8 font-extrabold tracking-tight sm:text-4xl"> Projects </p>
                </div>
        </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {
                featuredCourses.map((course:Course) => (
                  <div key= {course.id} className="flex justify-center">
                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden
                     h-full max-w-sm">
                      <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                        <Link href={`/courses/${course.slug}`}>
                             Learn More
                        </Link>
                      </div>
                    </BackgroundGradient>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mt-20 text-center">
            <Link href={"/courses"} className="px-4 py-2 rounded-lg  border border-neutral-600 text-neutral-700bg-white hover:bg-red-950 transistion duration-200 ">
               Certificates 

            </Link>
          </div>
        </div>

    )
}
export default FeaturedCourses
