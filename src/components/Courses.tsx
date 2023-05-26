import CourseCard from "./CourseCard"

const Courses = () => {
  return (
      <div className="bg-blue-100 w-full px-4 py-4">
           
          <h1 className="text-3xl font-bold mb-4">Most Popular <span className="text-green-600">Courses</span></h1>
          <p>Various versions have evolved over the years, sometimes by accident,</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 py-10">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          </div>
          
    </div>
  )
}

export default Courses