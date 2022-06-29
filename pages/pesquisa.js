import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center my-4 font-bold text-2xl' >Críticas e sugestões</h1>
            <div className='w-1/5 mx-auto '>
            <label className='font-bold'>Seu Nome: </label>
            <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded-2xl' />
            </div>
        </div>    
    )
}
export default Pesquisa;