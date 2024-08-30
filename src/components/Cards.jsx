import React, { useContext, useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products")
      try {
        const data = await response.json()
        setProducts(data.products)
        setIsLoading(false)
      } catch (error) {
        console.log("can not fetch products", error)
        setIsLoading(false)
        setError(true)
      }
    }
    getData()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>something went wrong!!!</h1>
  }
  return (
    <div>
      <h1 className=" text-center text-3xl font-bold mb-8">ALL PRODUCTS</h1>
      <div className="flex justify-around flex-wrap gap-3 px-5">
        {products.map((res, index) => {
          return (
            <div
              key={res.id}
              className=" px-1 shadow-green-950 hover:shadow-green-950 hover:shadow-lg shadow-sm flex  relative flex-col justify-center items-center gap-5 w-[15rem] h-[23rem]  rounded-xl bg-slate-200 overflow-hidden pb-14 pt-4 mb-4"
            >
              <img
                src={res.images[0]}
                alt=""
                className="w-[10rem] h-[10rem]  drop-shadow-2xl"
              />
              <h2 className="text-2xl font-semibold tracking-wider ">
                {res.title.slice(0, 15)}
              </h2>
              <p className="text-sm text-center ">
                {res.description.slice(0, 50)}
              </p>
              <h1 className="text-2xl font-bold text-green-700">
                ${res.price}
              </h1>
              <button className="w-full bg-green-700 text-white hover:bg-green-800 py-2 absolute bottom-0">
                ADD TO CART
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
