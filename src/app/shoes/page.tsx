
import React from 'react'


function Shoes() {

  const shoeData= [
    { id: 1, name: "Nike", price: 20000, description: "Stylish Shoes", image: "/nike.jpg"},
    { id: 2, name: "Puma", price: 85000, description: "Stylish Shoes", image: "/puma.jpg"},
    { id: 3, name: "Gucci", price: 15000, description: "Stylish Shoes", image: "/gucci.jpg"},
    { id: 4, name: "Nike", price: 15000, description: "Stylish Shoes", image: "/nike2.jpg"},
    { id: 5, name: "Adidas", price: 19000, description: "Stylish Shoes", image: "/adidas.jpg"},
    { id: 7, name: "Deckers", price: 22000, description: "Stylish Shoes", image: "/deckers.jpg"},
    { id: 8, name: "Skechers", price: 24500, description: "Stylish Shoes", image: "/skechers.jpg"},
    { id: 9, name: "Jordan", price: 32000, description: "Stylish Shoes", image: "/jordan.jpg"},
    { id: 10, name: "Crocks", price: 100000, description: "Stylish Shoes", image: "/crock.jpg"},
  ]

  return (
    <div className='shoes  px-10 my-10' data-aos="fade-up">
      <h1 className='text-4xl text-center mb-10 font-bold text-gray-700'>Shoe Collection</h1>
     <div className='shoes grid md:grid-cols-3 gap-10 fade-in'>
     {shoeData.map((shoe) => (
      <div key={shoe.id} className='bg-white p-5 rounded-md shadow-md'>
        <img src={shoe.image} alt={shoe.name} className='w-full rounded-md transition-transform duration-300 hover:scale-110'/>
        <h3 className='mt-4 text-2xl font-bold'>{shoe.name}</h3>
        <p className='text-gray-500'>{shoe.description}</p>
        <div className='price text-red-500 font-semibold mt-2'>${shoe.price}</div>
        <button className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md duration-300 hover:bg-red-600'>Add to Cart</button>
      </div>
    ))}
     </div>
    </div>
  )
}

export default Shoes

