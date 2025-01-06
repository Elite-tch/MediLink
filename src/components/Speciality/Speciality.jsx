import { FaPlay } from "react-icons/fa";
import { useState } from "react";
const Speciality = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className=" pt-16 w-[90%] md:w-[90%] mx-auto">

    <h3 className="text-3xl font-bold pb-6">Live Doctors</h3> 
<div className="flex  md:flex-row justify-center  flex-col  gap-5">
<div className="relative group">
      {/* Image with Hover Animation */}
      <img
        src="/img.png"
        alt="Video Thumbnail"
        className="w-[100%] max-h-[430px] transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
        onClick={handleOpenModal}
      />

      {/* Play Button */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        onClick={handleOpenModal}
      >
        <div className="rounded-full border-white px-1 py-1 border-4 w-10 h-10 flex justify-center items-center cursor-pointer">
          <FaPlay className="text-white" />
        </div>
      </div>

      {/* Live Badge */}
      <div className="absolute top-[7%] right-[7%] bg-red-600 flex items-center gap-1 py-1 px-3 w-fit rounded-md">
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p className="text-white text-xs">Live</p>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md w-[90%] md:w-[60%]">
            <video controls className="w-full">
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>


    <div className="relative group">
      {/* Image with Hover Animation */}
      <img
        src="/img2.png"
        alt="Video Thumbnail"
        className="w-[100%] max-h-[430px] transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
        onClick={handleOpenModal}
      />

      {/* Play Button */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        onClick={handleOpenModal}
      >
        <div className="rounded-full border-white px-1 py-1 border-4 w-10 h-10 flex justify-center items-center cursor-pointer">
          <FaPlay className="text-white" />
        </div>
      </div>

      {/* Live Badge */}
      <div className="absolute top-[7%] right-[7%] bg-red-600 flex items-center gap-1 py-1 px-3 w-fit rounded-md">
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p className="text-white text-xs">Live</p>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md w-[90%] md:w-[60%]">
            <video controls className="w-full">
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>


    <div className="relative group">
      {/* Image with Hover Animation */}
      <img
        src="/img.png"
        alt="Video Thumbnail"
        className="w-[100%] max-h-[430px] transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
        onClick={handleOpenModal}
      />

      {/* Play Button */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        onClick={handleOpenModal}
      >
        <div className="rounded-full border-white px-1 py-1 border-4 w-10 h-10 flex justify-center items-center cursor-pointer">
          <FaPlay className="text-white" />
        </div>
      </div>

      {/* Live Badge */}
      <div className="absolute top-[7%] right-[7%] bg-red-600 flex items-center gap-1 py-1 px-3 w-fit rounded-md">
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p className="text-white text-xs">Live</p>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-0 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md w-[90%] md:w-[60%]">
            <video controls className="w-full">
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>


    <div className="relative group">
      {/* Image with Hover Animation */}
      <img
        src="/img2.png"
        alt="Video Thumbnail"
        className="w-[100%] max-h-[430px] transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
        onClick={handleOpenModal}
      />

      {/* Play Button */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        onClick={handleOpenModal}
      >
        <div className="rounded-full border-white px-1 py-1 border-4 w-10 h-10 flex justify-center items-center cursor-pointer">
          <FaPlay className="text-white" />
        </div>
      </div>

      {/* Live Badge */}
      <div className="absolute top-[7%] right-[7%] bg-red-600 flex items-center gap-1 py-1 px-3 w-fit rounded-md">
        <div className="bg-white w-2 h-2 rounded-full"></div>
        <p className="text-white text-xs">Live</p>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-0 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md w-[90%] md:w-[60%]">
            <video controls className="w-full">
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>


</div>


<div className='flex items-center justify-center gap-4 mt-12'>
<div className='bg-[#765AFC] w-[113px] h-[119px] flex justify-center items-center rounded-lg'>
<img  src='/bone.png ' alt='' className='w-[80%] h-[60%] '/>
</div>
<div className='bg-[#FF484C] w-[113px] h-[119px] flex justify-center items-center rounded-lg'>
<img  src='/waist.png ' alt='' className='w-[80%] h-[60%] '/>
</div>
<div className='bg-[#0EBE7E] w-[113px] h-[119px] flex justify-center items-center rounded-lg'>
<img  src='/heart.png ' alt='' className='w-[80%] h-[60%] '/>
</div>
<div className='bg-[#FE7F44] w-[113px] h-[119px] flex justify-center items-center rounded-lg'>
<img  src='/eye.png ' alt='' className='w-[80%] h-[60%]'/>
</div>




</div>


    </div>
  );
};

export default Speciality;
