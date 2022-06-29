import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div >
            <p className='mt-12 text-center'> Nosso objetivo sempre é buscar atender melhor nossos clientes.<br />
                Por, isso estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa' >
                    <a className='bg-blue-400  text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow' > Dar opinião ou sugestão</a>
                </Link>
            </div>
            <p className='mt-12 text-center'>
                Mensagem do Desconto
            </p>
        </div>
    )

}
export default Index;