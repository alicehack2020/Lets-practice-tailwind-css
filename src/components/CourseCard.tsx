import temp from "../assets/heroImg-ea4467d6.png"
const CourseCard = () => {
  return (
      <div className="bg-white rounded-2xl py-3 shadow">
          <div className="relative px-3">
              <p className="p-1 bg-gray-100 absolute top-2 left-4 text-sm">Business</p>
              <div className="bg-purple-300 rounded-2xl">
                  <img src={temp} alt="" />
              </div>
              <p>Various versions have evolved daf</p>
              <div className="flex justify-between">
              <div className="flex space-x-2">
                  <div className="bg-yellow-500 w-4 h-5"></div>
                  <div className="bg-yellow-500 w-4 h-5"></div>
                  <div className="bg-yellow-500 w-4 h-5"></div>
                  <div className="bg-yellow-500 w-4 h-5"></div>
              </div>
              <p>(102)</p> 
              </div>
          </div>
          <div className="border-t-2 mt-2 p-5 ">
              <h1 className="font-semibold text-xl">$102</h1>
          </div>
      </div>
  )
}

export default CourseCard