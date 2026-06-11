import { supabase } from "@/lib/supabase";
import type { Course } from "@/types/course";
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";

export default async function Home() {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
  return (
    <main className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
      <div className="rounded-xl border border-red-500 bg-[#1A1A1A] p-6">
        <h2 className="text-xl font-bold text-red-500">
          Failed to load courses
        </h2>

        <p className="mt-2 text-gray-300">
          Please try again later.
        </p>
      </div>
    </main>
  );
}

  const courses: Course[] = data || [];

  return (
    <main className="min-h-screen bg-[#0B0B0F] flex">
      <Sidebar />

      <section className="flex-1 p-8">

        <div className="mb-6 flex items-center justify-between md:hidden">
  <h1 className="text-2xl font-bold text-white">
    Student Dashboard
  </h1>

  <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
    ☰
  </button>
</div>
      
      <HeroCard/>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          </div>

          <div>
            <ActivityCard />
          </div>

        </div>
      </section>

    </main>
  );
}