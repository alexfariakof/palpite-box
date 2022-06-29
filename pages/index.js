import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div>
                <Link href='/sobre'>
                    <a>Sobre</a>
                </Link>
                <span> </span>
                <Link href='/contato'>
                    <a>Contato </a>
                </Link>
            </div>
        </div>    
    )

}
export default Index;