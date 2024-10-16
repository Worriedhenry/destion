import React, { useState, useEffect } from "react";

export default function () {


    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between px-2 py-4 bg-white md:px-20">
            <div className="flex items-center HeaderMenu ">
                <ul className="flex items-center justify-center space-x-2 md:space-x-4 ">
                    <li >
                        <img className="w-24 max-w-full max-h-full cursor-pointer md:w-32 " src="/images/SPECTRE.webp" />
                    </li>
                    <li className="flex group relative ">
                        <span className="text-[0.6rem] font-bold md:text-base">Solutions</span>
                        <span><img className="w-4 md:w-auto group-hover:rotate-180 " src='/images/Down_arrow.png' />
                            <ul className="absolute hidden group-hover:block top-6 left-0  space-y-2 bg-white p-2 rounded-lg shadow-lg">
                                <li>
                                    <span className="text-[0.6rem] font-bold md:text-base">Readme</span>
                                </li>
                                <li>
                                    <span className="text-[0.6rem] font-bold md:text-base">Careers</span>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li className="flex group relative ">
                        <span className="text-[0.6rem] font-bold md:text-base">Features</span>
                        <span><img className="w-4 md:w-auto group-hover:rotate-180 " src='/images/Down_arrow.png' />
                            <ul className="absolute hidden group-hover:block top-6 left-0  space-y-2 bg-white p-2 rounded-lg shadow-lg">
                                <li>
                                    <a href="" className="text-[0.6rem] font-bold md:text-base">Feature</a>
                                </li>
                                <li>
                                    <span className="text-[0.6rem] font-bold md:text-base">Careers</span>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li className="flex  group relative ">
                        <span className="text-[0.6rem] font-bold md:text-base">Blogs</span>
                        <span><img className="w-fit md:w-auto group-hover:rotate-180 " src='/images/Down_arrow.png' />
                            <ul className="absolute hidden group-hover:block top-6 left-0  space-y-2 bg-white p-2 rounded-lg shadow-lg">
                                <li>
                                    <a href="" target="_blank" className="text-[0.6rem] font-bold md:text-base">Tutorial</a>
                                </li>
                                <li>
                                    <a href="" target="_blank" className="text-[0.6rem] font-bold md:text-base">Roadmap</a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li className="flex  group relative ">
                        <span className="text-[0.6rem] font-bold md:text-base">About</span>
                        <span><img className="w-4 md:w-auto group-hover:rotate-180 " src='/images/Down_arrow.png' />
                            <ul className="absolute hidden group-hover:block top-6 left-0  space-y-2 bg-white p-2 rounded-lg shadow-lg">
                                <li>
                                    <a href="" target="_blank" className="text-[0.6rem] font-bold md:text-base">Readme</a>
                                </li>
                                <li>
                                    <button  className="text-[0.6rem] font-bold md:text-base">Contact</button>
                                </li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </div>
            <div className={`flex space-x-3 `}>
                <button type="button"  className="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium md:rounded-lg rounded-md px-1 py-[0.1rem] md:text-base text-[0.6rem] md:px-5 md:py-2.5 md:mr-2  border-[#0076CE] border-2">Login</button>
                <button type="button" className="text-white   hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium md:rounded-lg rounded-md text-[0.6rem] md:px-5 md:py-2.5 px-2 py-1 md:mr-2  md:text-base ">Register</button>
            </div>
           
        </div>
    )
}