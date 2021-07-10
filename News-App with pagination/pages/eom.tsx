import React, { FunctionComponent } from 'react'
import Toolbar from '../components/toolbar';
import { services as service} from '../data'; 
import { IService } from '../type';
import Image from 'next/image'

const eom= ({employee}) => {
    // console.log(service);
    
    return (
        <div> 
            <Toolbar/>
            <div  className="text-center lg:col-span-6">
                <h1 className="py-10 text-3xl font-bold">Profile</h1>
                <div>
                    <h3 className="py-5 font-semibold">{employee.name}</h3>
                    <h6 className="py-5">{employee.position}</h6>
                    {/* <img className="py-5 mx-auto rounded-full h-42 w-42" src={employee.image} alt="" /> */}
                    <Image
        src={employee.image}
        className="py-5 mx-auto rounded-full h-42 w-42"
        alt="developer picture"
        width={300}
        height={300}
      />
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps=async(
    pageContext
)=>{
    const apiResponse=await fetch(
        'https://my-json-server.typicode.com/moktadirkhan/News-App/profile',
    );
    const employee=await apiResponse.json(); //convert into json
    return {
        props:{
            employee,
        }
    }
}
export default eom
