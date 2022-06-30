import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const save = async () => {
        const form = {
            Nome: 'AAA',
            Email: 'BBBB@JJJJ',
            Whatsapp: 'KLAJHKLAJHKL'
        }
        try {
            const response = await fetch('/api/post-pesquisa', {
                method: 'POST',
                body: JSON.stringify(form)
            });
            const data = await response.json();
            console.log(data);
        } catch (err) { }
    }
    return (
        <div className='pt-6'>
            <h1 className='text-center my-4 font-bold text-2xl' >Críticas e sugestões</h1>
            <div className='w-1/5 mx-auto '>
                <label className='font-bold'>Seu Nome: </label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded-2xl' />
                <button onClick={save} className='bg-blue-400  text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow'>Salvar</button>
            </div>
        </div>
    )
}
export default Pesquisa;