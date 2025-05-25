import React from 'react';
import Slider from "react-slick";

const Gallery = ({ sli_de }) => {
  const slidetoscroll = parseInt(sli_de);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidetoscroll,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <>
      <div className='relative z-0 text-5xl font-extrabold'>
        <h1 className='font-mono italic text-3xl leading-loose list-inside text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 '>Experience The Culture </h1>
      </div>
      <div className="slider-container relative z-0  p-5 m-5">
        <Slider {...settings}>
          <div>
            <img height={1} src="https://wallpapers.com/images/high/madara-against-ninja-army-2wjklr38u8tkc219.webp" alt="" />
          </div>
          <div>
            <img height={1}  src="https://wallpapers.com/images/high/grunge-madara-artwork-2sbm4ejwcjtb8fl6.webp" alt="" />
          </div>
          <div>
            <img height={1} src="https://wallpapers.com/images/high/minimalist-madara-rinnegan-eye-ka7da7jjcsg5nkwk.webp" alt="" />
          </div>
          <div>
            <img height={1} src="https://wallpapers.com/images/high/madara-and-kunai-weapon-20vmkvy8r03ydia8.webp" alt="" />
          </div>
          <div>
            <img height={1} src="https://wallpapers.com/images/high/madara-at-winter-j7l4t2bim0nudhdp.webp" alt="" />
          </div>
          <div>
            <img height={1}  src="https://wallpapers.com/images/hd/hashirama-and-madara-battle-p0g2e8eimzrutgrn.webp" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Gallery;
