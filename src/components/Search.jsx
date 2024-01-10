import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (

<form className="border border-blue-500 rounded-full">   
    <div className="relative text-gray-600 px-6">
        <input type="search" name="serch" placeholder="Search exams here" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
        <div className="absolute left-0 top-0 mt-3 ml-4">
            <IoIosSearch  className='scale-150' />
        </div>
    </div>
</form>

  )
}

export default Search
