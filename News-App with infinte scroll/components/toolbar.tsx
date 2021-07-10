import React from 'react'
import { useRouter } from 'next/dist/client/router'
const Toolbar = () => {
    const router=useRouter()
    return (
        <div className="flex justify-center my-5 cursor-pointer">
            <div className="px-5 hover:text-gray-500" onClick={()=>router.push('/')}>Home</div>
            <div className="px-5 hover:text-gray-500" onClick={()=>router.push('/feed/1')}>Feed</div>
            <div className="px-5 hover:text-gray-500" onClick={()=>router.push('/eom')}>EOM</div>
            <div className="px-5 hover:text-gray-500" onClick={()=>window.location.href='https://github.com/moktadirkhan'}>Github</div>
        </div>
    )
}

export default Toolbar
