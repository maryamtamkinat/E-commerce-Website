import React from 'react'

function page() {
  return (
    <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-xl rounded-md' data-aos='fade-up'>
      <h2 className='text-4xl font-bold mb-6 text-center'>Contact Us</h2>
      <form>
        <input type="text" placeholder='Full Name' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md' required />
        <input type="email" placeholder='Email Address' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md' required/>
        <input type="text" placeholder='Phone Number' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md' required/>
        <textarea placeholder='Your Message' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md' rows={5} required></textarea>
        <button className='w-full bg-blue-500 text-white py-2 rounded-md duration-300 hover:bg-blue-700'>Submit</button>
      </form>
    </section>
  )
}

export default page
