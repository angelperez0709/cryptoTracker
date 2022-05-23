import React from 'react'
import {Browser} from './Browser';
export function Header() {
    return (
        <header className='font-s-30'>
            <nav>
                <div className='font-w-700'>Cryptocurrencies</div>
                <div className='margin-left-10 font-w-700'>Trends</div>
                <Browser></Browser>
            </nav>
        </header>
    );
}