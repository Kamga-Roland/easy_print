import React from 'react'

const Partner = () => {
  return (
    <div className='mt-20'>
      <div className='ml-10 text-orange-300 text-extrabold'>NOS PARTENAIRES</div>
      <div className='ml-10 justify-center text-[35px]'>ILS NOUS FONT CONFIANCE</div>
      <div
        className="relative md:mt-[120px] flex w-full md:h-[200px]"
      >
        <ul className="md:flex md:mx-auto md:space-x-3">
          <li className="w-20 ml-20 md:w-[20%] mt-5 md:mr-[8%] h-40 md:h-[50%]">
            <img src="/src/assets/cinaf.png" className=" w-full h-full object-contain" />
          </li>
          <li className="md:w-[70%] h-40 md:h-[70%]">
            <img src="/src/assets/AFROPN.png" className=" w-full h-full object-contain" />
          </li>
          <li className="md:w-[70%] h-40 md:h-[70%]">
            <img src="/src/assets/50AFC.png" className=" w-full h-full object-contain" />
          </li>
          <li className="md:w-[70%] md:h-[70%]">
            <img src="/src/assets/MbC.png" className=" w-full h-full object-contain" />
          </li>
          <li className=" md:w-[25%] mt-4 h-40 md:h-[50%]">
            <img src="/src/assets/NADOSSO.png" className=" w-full h-full object-contain" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Partner

