import React from 'react'

function About() {
  return (
    <section className='about h-screen w-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{backgroundImage: "url('/about.jpg')"}}>
      <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg' data-aos='fade-up'>
        <h2 className ='text-4xl font-bold mb-4'>About Us</h2>
        <p>Welcome to Our Exclusive Shoe Collection <br /><br />At our shoe collection, we believe that shoes are a reflection of your personality, your style, and your journey. Whether you’re looking for the perfect pair for a casual day out, running a marathon, or stepping into a formal event, we’ve got something special just for you. Our mission has always been simple: to provide high-quality, stylish, and comfortable shoes that cater to every need and occasion. From timeless classics to the latest trends, we carefully curate a collection that brings together fashion, durability, and ultimate comfort.</p>
      </div>
    </section>
  )
}

export default About
