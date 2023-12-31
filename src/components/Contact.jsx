import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 ' >
        <form method='POST' action="https://getform.io/f/1c4b8b98-e75f-48bc-9dfa-30b7901e04af" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300' >Contact</p>
                <p className='text-gray-300 p-4' >Submit the form below or shoot me an email - yadnyesh.mahadeshwar@gmail.com </p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name'  name="name" required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email'  name="email"  required/>
            <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="10" placeholder='Message' required ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' >Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact