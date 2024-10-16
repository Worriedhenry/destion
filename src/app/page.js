"use client"
import React from "react";
import Header from "../app/Components/Header";
import JoinUs from "../app/Components/Home/JoinUS";
import SearchComponent from "../app/Components/Home/SearchBar";
import Features from "../app/Components/Home/Features";
import Footer from "../app/Components/Footer";
import Connection from "../app/Components/Home/Connection";


export default function Home() {

  return (
    <>
      <div className="space-y-10">
        <div className=" bg-opacity-5 bg-[linear-gradient(74.71deg,_#FEDDEE36_0%,_#FCF6FC6a_31.77%,_#C5EAED36_64.58%,_#FDDDFE36_100%)]">
          <Connection />
          <Header  />
          <SearchComponent />
        </div>
        <div className=" flex ">
          
          <JoinUs />
        </div>
        <div>
          <Features />
        </div>
        <Footer />
      </div>
    </>
  )
}
