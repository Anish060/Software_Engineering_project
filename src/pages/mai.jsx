import React from 'react'
import { Link } from 'react-router-dom'
import i from "../assets/adv.png"

function mai() {
  return (
    <div >
  <div className="flex flex-col min-h-screen bg-gray-100 bg-[url('https://i.pinimg.com/736x/91/82/ae/9182ae6289b2e2dcc35ef5fd6618a6a6.jpg')]">
    {/* Header with Background Image */}
    <div className="relative bg-[url('https://source.unsplash.com/1600x400/?law,justice')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex gap-2 items-center p-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f13a0ea89897aa06d7cb1702529c28ba0314f5a"
          alt=""
          className="w-12 h-12 max-sm:w-10 max-sm:h-10"
        />
        <div className="flex gap-9 items-center max-sm:hidden">
          <div className="text-xl underline hover:text-gray-300 cursor-pointer">About</div>
          <div className="text-xl underline hover:text-gray-300 cursor-pointer">Contact Us</div>
        </div>
      </div>
    </div>

    {/* Main Content with Background */}
    <div className="flex flex-col items-center px-2.5 mx-auto mt-10 max-w-[535px]">
      <div className="mb-2.5 text-3xl text-center text-black font-bold tracking-wide">
        LEGAL EASE
      </div>
      <div className="relative p-16 mx-auto my-0 w-full bg-white rounded-3xl shadow-lg border border-solid border-gray-300 max-w-[800px] max-sm:p-8">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?court,law')] bg-cover bg-center opacity-20 rounded-3xl"></div>
        <div className="relative flex flex-col gap-10 items-center">
          <div className="flex gap-10 items-center max-sm:flex-col">
            <div className="flex flex-col gap-4 items-center">
              <img src={i} alt="" className="p-1.5" />
              <Link to="/loginl">
                <div className="px-5 py-2 text-2xl text-white bg-black hover:bg-gray-800 rounded-2xl transition duration-300">
                  Lawyer
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb5e7b576dcc0825b1738f256f49d44b8ac39df"
                alt=""
                className="p-3"
              />
              <Link to="/login">
                <div className="px-5 py-2 text-2xl text-white bg-black hover:bg-gray-800 rounded-2xl transition duration-300">
                  Litigant
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2019/05/Judge-icon-by-hellopixelzstudio-580x386.jpg"
                alt=""
              />
              <Link to="/loginj">
                <div className="px-5 py-2 text-2xl text-white bg-black hover:bg-gray-800 rounded-2xl transition duration-300">
                  Judge
                </div>
              </Link>
            </div>
          </div>
          <div className="text-2xl text-center text-black italic">
            &quot;Raise Your Voice to Make a Change!&quot;
          </div>
        </div>
      </div>
    </div>

    {/* Footer with Background Image */}
    <footer className="mt-10 bg-[url('https://source.unsplash.com/1600x400/?law,legal')] bg-gray-100 bg-cover bg-center text-white py-6 text-center border-t border-gray-100 relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-5xl mx-auto px-4 ">
        <p className="text-lg font-semibold">Legal Ease © {new Date().getFullYear()}</p>
        <p className="text-sm mt-1">Empowering Justice, One Click at a Time.</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="mailto:support@legalease.com" className="hover:text-gray-300 transition duration-300">
            support@legalease.com
          </a>
          <a href="tel:+911234567890" className="hover:text-gray-300 transition duration-300">
            +91 12345 67890
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-3 text-gray-400">
          <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
</div>

  
  )
}
export default mai