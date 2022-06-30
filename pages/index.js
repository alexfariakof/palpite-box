import React from 'react'
import Link from 'next/link'

import useSWR from 'swr'
import { addRequestMeta } from 'next/dist/server/request-meta';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher);
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
            {!data && <p>Carregando...</p>}
            {data && data.showCupom &&
                <p className='mt-12 text-center'>
                    { data.messageCupom }
                </p>
            }
        </div>
    )

}
export default Index;