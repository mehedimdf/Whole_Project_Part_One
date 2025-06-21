import React from 'react'
import Carousel from '../../components/customer/shop/Carousel'
import OurService from '../../components/customer/shop/OurService'
import OurProducts from '../../components/customer/shop/OurProducts'
import Specialdeal from '../../components/customer/shop/Specialdeal'
import Featured from '../../components/customer/shop/Featured'
import ClientReviews from '../../components/customer/shop/ClientReviews'
import LatestNews from '../../components/customer/shop/LatestNews'

const Shop = () => {
  return (
    <div>
      <Carousel></Carousel>
      <OurService></OurService>
      <OurProducts></OurProducts>
      <Specialdeal></Specialdeal>
      <Featured></Featured>
      <ClientReviews></ClientReviews>
      <LatestNews></LatestNews>
    </div>
  )
}

export default Shop