import React from 'react'
export function Browser() {
    return (
        <div className='margin-left-10'>
            <img src={'../img/loupe.png'} alt='loupte for search cryptocurrencies'></img>
            <input type='text' className='font-s-30 without-border' placeholder=''></input>
        </div>
    );
}