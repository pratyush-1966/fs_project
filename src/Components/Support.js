import React from 'react'

const Support = () => {
  return (
    <div className="m-10">
      {/* Heading  */}

      <div className="w-[500px] h-10 items-center gap-4 flex">
        <div className="w-5 h-10">
          <div className="w-5 h-10 bg-red-500 rounded" />
        </div>
        <div className="text-red-500 text-[24px] font-bold font-mono">
          Contact Us
        </div>
      </div>

      {/* Cards  */}

      <div className="mt-12 flex gap-14">
        {/* First  */}

        <div className="flex flex-col shadow-lg justify-evenly gap-6 w-[30%] rounded-lg bg-white p-5">
          {/* Top  */}

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="  w-10 h-10 relative"
                preserveAspectRatio="none"
              >
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.88503 14.0662 9.88703 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0195 22.6566 23.0354C22.5567 23.0513 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8503 17.0052 17.619C16.9573 17.5298 16.9399 17.4273 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

          {/* Bottom  */}

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="  w-10 h-10 relative"
                preserveAspectRatio="none"
              >
                <rect width={40} height={40} rx={20} fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="font-medium text-black">Write To US</p>
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

        {/* Second - */}

        <div className="w-[65%] h-[450px] shadow-lg flex flex-col gap-10 p-6 py-10 rounded-lg bg-white">
          <div className="flex justify-between">
            <input
              type="text"
              className="bg-gray-200 text-lg h-[50px] w-[250px] p-2 rounded-md font-medium text-red-800 text-center"
              placeholder="Enter Name "
            />

            <input
              type="email"
              className="bg-gray-200 text-lg h-[50px] w-[250px] p-2 rounded-md font-medium text-red-800 text-center"
              placeholder="Enter Email "
            />

            <input
              type="tel"
              className="bg-gray-200 text-lg h-[50px] w-[250px] p-2 rounded-md font-medium text-red-800 text-center"
              placeholder="Enter Phone "
            />
          </div>

          <textarea rows={10} cols={115} className='bg-gray-200 rounded-lg p-4 text-lg' placeholder='Your Message'></textarea>
          

          <button className="text-white w-[30%] relative left-[620px] px-12 py-4 rounded bg-[#db4444]">
            Send Message
          </button>
        </div>

        {/* -----------------------  */}
      </div>
    </div>
  );
}

export default Support
