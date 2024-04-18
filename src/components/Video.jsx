import React from 'react';

function Video() {
  return (
    <div>
      {/* Video section with padding */}
      <div className="p-4 mt-8 mb-8 flex justify-center">
        <video controls style={{ width: '80%' }} className="rounded-xl" autoPlay>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Horizontal rule to separate the page */}
      <hr className="my-4 w-full md:w-2/3 mx-auto border-b-2 border-gray-300 shadow-lg" />
    </div>
  );
}

export default Video;
