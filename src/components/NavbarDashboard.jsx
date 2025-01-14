import React from 'react'
import ppay  from '../assets/icons/ppay.svg'

function NavbarDashboard() {
    return (
        <nav className='flex justify-between navbar bg-primary px-32 py-4'>
          <img className='h-8' src={ppay} alt="ppay" />
          <div className='flex gap-6'>
            <button className='btn text-neutral bg-primary border border-neutral text-sm font-normal'>Sign In</button>
            <button className='btn bg-neutral border-none text-primary text-sm font-normal'>Sign Up</button>
          </div>
        </nav>
      )
}

export default NavbarDashboard