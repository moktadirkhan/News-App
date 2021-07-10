import { Router } from 'next/dist/client/router';
import image from 'next/image';
import React from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/dist/client/router';
import Toolbar from '../../components/toolbar';
import Image from 'next/image'

const Feed = ({page_number,article}) => {
    const router=useRouter()
    console.log(article,page_number);
    
    //now for printing
    return (
        <div >
          <Toolbar/>
            {article.map((article,index)=>(     //here each articles are maping,that is each articles are comming through a loop
                <div key={index} className="divide-y divide-black">
                  <div  className="p-8 mx-auto my-5 divide-y justify-centerw-full md:w-2/5 ">
                    <h1 className="my-2 text-2xl font-semibold">{article.title}</h1>
                    <p className="my-2 divide-y divide-y-reverse divide-black">{article.description}</p>
                    {!!article.urlToImage && <Image src={article.urlToImage} width={700} height={500}/>}
                    {/* here first part checking images exist and then showing */}
                </div>
                </div>
                
            ))}
             <div className="flex justify-center">
                 <div onClick={()=>{if(page_number>1){router.push(`/feed/${page_number-1}`).then(()=>window.scrollTo(0,0))}}} className={`${page_number===1? "opacity-50 px-2 cursor-pointer" : "block px-2 cursor-pointer"}`}>
                Previous Page
                 </div>
                 <div className="px-3">{page_number}</div>
                 <div onClick={()=>{if(page_number<5){router.push(`/feed/${page_number+1}`).then(()=>window.scrollTo(0,0))}}} className={`${page_number===5? "opacity-50 px-2 cursor-pointer" : "block px-2 cursor-pointer"}`}>
                 Next Page
                 </div>
            </div>


        </div>
       
    )
}
// for more clarification about hide and visibility of div got https://github.com/tailwindlabs/tailwindcss/discussions/1507
export const getServerSideProps=async pageContext=>{
    const page_number=pageContext.query.page_id  //as the file name page_id

    if (!page_number || page_number<1 || page_number>5){
        return{
            props:{
                article:[],
                page_number:1
            }
        }
    }
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page_number}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      ).then(res => res.json());
    
    
      const { articles } = apiResponse;
    
    //   console.log(apiResponse);
      

      return {
        props: {
          article: articles,
          page_number: Number.parseInt(page_number),
        },
      };
}
export default Feed
