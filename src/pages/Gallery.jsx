import React from 'react'
import Banner from '../components/common/Banner'
import Footer from '../components/common/Footer'
import { galleryData } from '../Data/data'

const GalleryItem = ({ image, title }) => (
  <div className="relative group overflow-hidden rounded-md shadow-2xl ">
    <img
      src={image}
      alt={title}
      className="transition-transform h-[300px] w-[300px] duration-300 transform group-hover:scale-110 rounded-md hover:rounded-md"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <p className="text-white text-lg font-semibold">{title}</p>
    </div>
  </div>
);


const Gallery = () => {
  return (
    <div className="bg-richblack-5">
      <div className="w-full bg-style">
        <Banner path={"gallery"} />
      </div>
      <div className="h-[100px]"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  my-10">
        {galleryData.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Gallery