import React from 'react';
function Logo({width='10'}){
    return (
        <div className={`${width}`}>
            <img 
            className='w-full'
            src='https://stackideas.com/images/apps/2429/logo.png' alt="vlog" />
        </div>
    )
}

export default Logo;
