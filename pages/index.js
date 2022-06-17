import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div>
                <Link href='/contato'>
                    <a>Contato</a>
                </Link>
                <Link href='/sobre'>
                    <a>Sobre</a>
                </Link>
            </div>
        </div>    
    )

}
export default Index;