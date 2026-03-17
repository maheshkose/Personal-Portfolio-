'use client'
import React, { useContext, useState } from 'react'

const Changemode = () => {
    const [theme, settheme] = useState('light')
    const changeMode = () => {
       const html = document.querySelector('html');
        if (html) {
            if (html.getAttribute('data-theme') === 'light') {
                html.setAttribute('data-theme', 'dark');
                settheme('dark');
            } else {
                html.setAttribute('data-theme', 'light');
                settheme('light');
            }
    }
}
  return (
    <button onClick={changeMode} className='btn btn-ghost btn-sm'>
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )

}

export default Changemode