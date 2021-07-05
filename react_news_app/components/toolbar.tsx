import {useRouter} from 'next/router';

function Toolbar() {
    const router = useRouter();

    return (
        <div className="w-full fixed  bg-gray-200 max-h-16 p-2 mb-4 flex justify-center justify-items-center text-2xl font-bold ">
            <div className="m-2 cursor-pointer hover:bg-gray-500 " onClick= {()=>router.push('/')}>Home</div>
            <div className="m-2 cursor-pointer hover:bg-gray-500 " onClick= {()=>router.push('/article/feed')}>Article</div>
            <div className="m-2 cursor-pointer hover:bg-gray-500 " onClick= {()=>router.push('/profile')}>Profile</div>
            
        </div>
    )
}

export default Toolbar;