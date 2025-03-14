import React from 'react';

const Header = () => {
    return (
        <header className='bg-purple-800 py-4 px-6 shadow-md flex items-center text-white text-2xl font-bold'>
            <img src='/logo.svg' alt='Watchlist Logo' className='h-10 w-10 mr-4' />
            Tu Watchlist 
        </header>
    );
};

export default Header
