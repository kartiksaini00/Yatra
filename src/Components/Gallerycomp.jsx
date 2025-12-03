import React from "react";
import LightGallery from "lightgallery/react";
import mumbai from '../assets/mumbai.jpg';
import image from '../assets/imagee.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'       
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'   
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'       
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import image13 from '../assets/imageg.jpg'
import agra from '../assets/agra.jpg';
import tokyo from '../assets/tokyo.jpg';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "../Css/Gallery.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallerycomp = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
          Our Gallery
        </h2>
        <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10"/>
      </div>

       <div className="App">
        <LightGallery 
          onInit={onInit} 
          speed={500} 
          plugins={[lgThumbnail, lgZoom]}
        >
          {/* FIX: Use imported images instead of wrong "/image1.jpg" */}
          <a href={image1}>
            <img alt="img1" src={image1} className="gallery-img" />
          </a>

          <a href={image2}>
            <img alt="img2" src={image2} className="gallery-img" />
          </a>

          <a href={image3}>
            <img alt="img3" src={image3} className="gallery-img" />
          </a>
            <a href={image4}>
            <img alt="img4" src={image4} className="gallery-img" />
          </a>
            <a href={image5}>
            <img alt="img5" src={image5} className="gallery-img" />
          </a>
            <a href={image6}>
            <img alt="img6" src={image6} className="gallery-img" />
          </a>
            <a href={image7}>
            <img alt="img7" src={image7} className="gallery-img" />
          </a>
            <a href={image8}>
            <img alt="img8" src={image8} className="gallery-img" />
          </a>
            <a href={image9}>
            <img alt="img9" src={image9} className="gallery-img" />
          </a>
           
            <a href={image11}>
            <img alt="img11" src={image11} className="gallery-img" />
          </a>
            <a href={image12}>
            <img alt="img12" src={image12} className="gallery-img" />
          </a>
            <a href={image13}>
            <img alt="img13" src={image13} className="gallery-img" />
          </a>
            <a href={agra}>
            <img alt="agra" src={agra} className="gallery-img" />
          </a>
            <a href={tokyo}>
            <img alt="tokyo" src={tokyo} className="gallery-img" />
          </a>
          <a href={mumbai}>
            <img alt="mumbai" src={mumbai} className="gallery-img" />
          </a>
    
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallerycomp;


