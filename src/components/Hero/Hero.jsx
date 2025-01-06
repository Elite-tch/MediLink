

const Hero = () => {
  return (
    <div className='flex flex-col md:gap-0 gap-12  pt-[30%] md:pt-[15%] md:flex-row pb-12 rounded-b-3xl  bg-[#0EBE7F] rounded-lg   px-6 md:px-10 lg:px-20'>
     <div className=" flex flex-col gap-4">
      <h2 className="text-white font-bold text-3xl md:text-6xl">Experience Excellence with MediLink</h2>
      <p className="text-white text-sm w-[95%] ">MediLink bridges the gap between you and top-tier healthcare professionals, offering seamless access to consultants, emergency services, and essential resources to prioritize your health and well-being.</p>
    <form className=" mt-2 md:mt-6 flex justify-center md:justify-start">
      <input type="search" placeholder="Consultants ...."   className="outline-none focus:outline-none border-none focus:ring-0 focus:shadow-none rounded-l-md"
      />
<button className='bg-[#C6EFE5] py-2 px-4 rounded-r-md text-gray-500 hover:bg-[#b1e7d9]  '>Search</button>
    </form>
      </div>
     <img src='/hero.png' alt="" className=" md:w-[35%]" />
    </div> 
  )
}

export default Hero