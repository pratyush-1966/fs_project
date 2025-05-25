import React from 'react'
import product1 from '../Assets/product1.jpg'
import product2 from '../Assets/product2.png'
import product3 from '../Assets/product3.jpg'
import product4 from '../Assets/product4.jpg'
import { Link } from 'react-router-dom'

const Explore = () => {

  return (
    <div className=" mx-10 mt-20 pt-10 h-[1600px]">
      {/* Heading  */}
      <div className="w-[500px] h-10 items-center gap-4 flex">
        <div className="w-5 h-10">
          <div className="w-5 h-10 bg-red-500 rounded" />
        </div>
        <div className="text-red-500 text-[24px] font-bold font-mono">
          Discover Our Artisanal Treasures
        </div>
      </div>
      <div className="text-black text-6xl font-bold font-[Quicksand] mt-4">
        Explore Our Products
      </div>

      {/* Cards  */}
      <div className="mt-[100px] flex flex-wrap gap-6 mx-auto" >
        {/* Card 1  */}
        <div
          id="one" className="w-[60%] h-[600px] bg-black bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${product1})` }}
        >
          <div className="rounded-lg backdrop-blur-[1px] hover:bg-[#3bedd6c4] bg-[#f2f2f277] text-black w-[80%] relative top-[320px] mx-auto flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
              Prakriti
            </h1>
            <p className="text-center text-2xl font-['PTSerif']">
              "Embrace the essence of nature with our finely crafted,
              eco-friendly creations. Each product brings a touch of the natural
              world into your everyday life."
            </p>
            <Link to='/arts' className="rounded bg-white w-[30%] p-2 font-mono">
              Explore Art Now !
            </Link>
          </div>
        </div>

        {/* Card 2  */}
        <div
          className="w-[38%] h-[700px]  bg-black bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${product2})` }}
        >
          <div className="rounded-lg backdrop-blur-[-6px] hover:bg-[#3bedd6c4] bg-[#f2f2f277] text-black w-[80%] relative top-[400px] mx-auto flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
              Shehnai Serenity
            </h1>
            <p className="text-center text-2xl font-['PTSerif']">
              "The soulful strains of the shehnai weave a tapestry of cultural
              richness and emotive melody."
            </p>
            <Link to='/musics' className="rounded bg-white w-[30%] p-2 font-mono">
              Explore Music Now !
            </Link>
          </div>
        </div>

        {/* Card 3  */}
        <div
          className="relative bottom-[100px] w-[60%] h-[700px] bg-black bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${product3})` }}
        >
          <div className="rounded-lg backdrop-blur-[-7px] hover:bg-[#3bedd6c4] bg-[#f2f2f277] text-black w-[80%] relative top-[400px] mx-auto flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
              Mitti Kalpana
            </h1>
            <p className="text-center text-2xl font-['PTSerif']">
              "Unearth the beauty of Indian clay artistry. Our creations embody
              tradition and innovation, shaping earth into timeless expressions
              of cultural richness."
            </p>
            <Link to='/potteries' className="rounded bg-white w-[30%] p-2 font-mono">
              Explore Pottery Now !
            </Link>
          </div>
        </div>

        {/* Card 4  */}
        <div
          className="w-[38%] h-[600px] bg-black bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${product4})` }}
        >
          <div className="rounded-lg backdrop-blur-[-6px] hover:bg-[#3bedd6c4] bg-[#f2f2f277] text-black w-[80%] relative top-[300px] mx-auto flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
              Kagaz Kala Sangam
            </h1>
            <p className="text-center text-2xl font-['PTSerif']">
              Every sheet of paper becomes a canvas for the soulful expressions
              of Indian craftsmanship.
            </p>
            <Link to='/arts' className="rounded bg-white w-[30%] p-2 font-mono">
              Explore Art Now !
            </Link>
          </div>
        </div>

        {/* ---------------- */}
      </div>
    </div>
  );
}

export default Explore
