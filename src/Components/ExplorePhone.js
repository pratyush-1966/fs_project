import React from 'react'
import product1 from '../Assets/product1.jpg'
import product2 from '../Assets/product2.png'
import product3 from '../Assets/product3.jpg'
import product4 from '../Assets/product4.jpg'
import { Link } from 'react-router-dom'
const ExplorePhone = () => {
  return (
    <><div className='relative flex flex-col justify-center'>

      <div className="text-red-500 text-center text-[24px] font-bold font-mono">
        Discover Our Artisanal Treasures
      </div>
      <div className="text-black  text-center text-4xl font-bold font-[Quicksand] mt-4">
        Explore Our Products
      </div>
      <div
          id="one" className="w-[83%] p-8 m-8 flex items-end  h-[600px] bg-black bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${product1})` }}
        >
          <div className="rounded-lg content-end backdrop-blur-[1px] flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
              Prakriti
            </h1>
            <p className="text-center  text-2xl font-['PTSerif']">
              "Embrace the essence of nature with our finely crafted,
              eco-friendly creations.
            </p>
            <Link to='/arts'  className="rounded bg-white w-[80%] p-2 font-mono">
              Explore Art Now !
            </Link>
          </div>
        </div>
      <div
          id="one" className="w-[83%] p-8 m-8 flex items-end  h-[600px] bg-black bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${product2})` }}
        >
          <div className="rounded-lg backdrop-blur-[1px] flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
            Shehnai Serenity
            </h1>
            <p className="text-center text-2xl font-['PTSerif']">
            "The soulful strains of the shehnai weave a tapestry of cultural
              richness and emotive melody."
            </p>
            <Link to='/musics'  className="rounded bg-white w-[80%] p-2 font-mono">
              Explore Art Now !
            </Link>
          </div>
        </div>
      <div
          id="one" className="w-[83%] p-8 m-8 flex items-end  h-[600px] bg-black bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${product3})` }}
        >
          <div className="rounded-lg backdrop-blur-[1px] flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
            Mitti Kalpana
            </h1>
            <p className="text-center text-2xl font-['PTSerif']">
            "Unearth the beauty of Indian clay artistry. Our creations embody
              tradition and innovation."
            </p>
            <Link to='/potteries'  className="rounded bg-white w-[80%] p-2 font-mono">
              Explore Art Now !
            </Link>
          </div>
        </div>
      <div
          id="one" className="w-[83%] p-8 m-8 flex items-end  h-[600px] bg-black bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${product4})` }}
        >
          <div className="rounded-lg backdrop-blur-[1px] flex flex-col gap-4 p-4 items-center">
            <h1 className="text-center font-extrabold text-3xl font-[Quicksand]">
            Kagaz Kala Sangam
            </h1>
            <p className="text-center text-2xl font-['PTSerif']">
            Every sheet of paper becomes a canvas for the soulful expressions
              of Indian craftsmanship.
            </p>
            <Link to='/arts'  className="rounded bg-white w-[80%] p-2 font-mono">
              Explore Art Now !
            </Link>
          </div>
        </div>
    </div>
    <div>
        <div className="m-10">
      {/* Heading  */}
      <div className="w-full h-10 items-center gap-4 flex">
        <div className="w-5 h-10 bg-red-500 rounded" />
        <div className="text-red-500 text-[24px] font-bold font-mono">
          Contact Us
        </div>
      </div>

      {/* Cards  */}
      <div className="mt-12 flex flex-col gap-10">
        {/* First Card */}
        <div className="flex flex-col shadow-lg rounded-lg bg-white p-5">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 relative"
              >
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.88503 14.0662 9.88703 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0195 22.6566 23.0354C22.5567 23.0513 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8503 17.0052 17.619C16.9573 17.5298 16.9399 17.4273 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-medium text-black">Call To Us</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg text-black">
                We are available 24 hours, 7 days a week.
              </p>
              <p className="text-lg text-black">Phone : +91 8872137543</p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-col shadow-lg rounded-lg bg-white p-5">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 relative"
              >
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-medium text-black">Write To Us</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-black">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm text-black">
                Email : customer@exclusive.com
              </p>
              <p className="text-sm text-black">
                Email : support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        {/* Third Card (Form) */}
        <div className="flex flex-col shadow-lg rounded-lg bg-white p-6 ">
          <input
            type="text"
            className="bg-gray-200 text-lg h-[50px] w-full my-3 p-2 rounded-md font-medium text-red-800 text-center"
            placeholder="Enter Name"
          />
          <input
            type="email"
            className="bg-gray-200 text-lg h-[50px] w-full my-3 p-2 rounded-md font-medium text-red-800 text-center"
            placeholder="Enter Email"
          />
          <input
            type="tel"
            className="bg-gray-200 text-lg h-[50px] w-full my-3 p-2 rounded-md font-medium text-red-800 text-center"
            placeholder="Enter Phone"
          />
          <textarea
            rows={5}
            className="bg-gray-200 text-lg my-3 p-4 rounded-lg"
            placeholder="Your Message"
          />
          <button className="text-white w-full px-12 py-4 rounded bg-[#db4444]">
            Send Message
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ExplorePhone