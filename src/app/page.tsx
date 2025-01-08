"use client"

import Link from "next/link"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import {WixClientContext} from "@/context/wixContext"
import {useContext, useEffect} from "react";
import {useWixClient} from "@/hooks/useWixClient"


const HomePage = () => {
  const wixClient = useWixClient();


  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();

      console.log(res)
    }

    getProducts();
  },[wixClient])

  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
      </div>
    </div>
  )
}

export default HomePage