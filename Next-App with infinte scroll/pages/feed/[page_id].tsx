import { Router } from 'next/dist/client/router';
import image from 'next/image';
import React from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from 'next/dist/client/router';
import Toolbar from '../../components/toolbar';
import Image from 'next/image'
import { useState,useEffect } from 'react';
import {server} from '../../config/server'


const Feed = ({page_number,article,article_for_scroll}) => {
    const router=useRouter()
    // console.log(article,page_number);
    const [articles1, setArticles1] = useState(article_for_scroll);
    const [currentPage, setCurrentPage] = useState(2);
    
    const fetchData = async() => {
      var cPage: number = currentPage + 1;
      setCurrentPage(cPage);
      const size = 5 * page_number;
  
      const apiJson = await getData(currentPage);
      console.log("res ..", apiJson);
      const { apiResponse } = apiJson;
  
      const { article_for_scroll } = await apiResponse;
      setArticles1((articles1) => [...articles1, ...article_for_scroll]);
  
    };
   
    //now for printing
    return (
        <div >
          <Toolbar/>
            <InfiniteScroll
            className="items-center m-auto md:w-2/3 sm:w-full lg:w-1/2 "
            dataLength={article.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
    >
            {articles1.map((article,index)=>(     //here each articles are maping,that is each articles are comming through a loop
                <div key={index} className="divide-y divide-black">
                  <div  className="p-8 mx-auto my-5 divide-y justify-centerw-full md:w-2/5 ">
                    <h1 className="my-2 text-2xl font-semibold">{article.title}</h1>
                    <p className="my-2 divide-y divide-y-reverse divide-black">{article.description}</p>
                    {!!article.urlToImage && <Image src={article.urlToImage} width={700} height={500}/>}
                    {/* here first part checking images exist and then showing */}
                </div>
                </div>
                
            ))}
            </InfiniteScroll>
             {/* <div className="flex justify-center">
                 <div onClick={()=>{if(page_number>1){router.push(`/feed/${page_number-1}`).then(()=>window.scrollTo(0,0))}}} className={`${page_number===1? "opacity-50 px-2 cursor-pointer" : "block px-2 cursor-pointer"}`}>
                Previous Page
                 </div>
                 <div className="px-3">{page_number}</div>
                 <div onClick={()=>{if(page_number<5){router.push(`/feed/${page_number+1}`).then(()=>window.scrollTo(0,0))}}} className={`${page_number===5? "opacity-50 px-2 cursor-pointer" : "block px-2 cursor-pointer"}`}>
                 Next Page
                 </div>
            </div> */}


        </div>
       
    )
}
const getData = async (number) => {
  const apiResponse = await fetch(`${server}/api/${number}`).then((res) =>
    res.json()
  );
  console.log("api res", apiResponse);
  return apiResponse;
};

// for more clarification about hide and visibility of div got https://github.com/tailwindlabs/tailwindcss/discussions/1507
export const getServerSideProps=async pageContext=>{
    const page_number=1 //as the file name page_id

    // if (!page_number || page_number<1 || page_number>5){
    //     return{
    //         props:{
    //             article:[],
    //             page_number:1
    //         }
    //     }
    // }
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page_number}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      ).then(res => res.json());
    
      const apiJson1 = await getData(page_number);
      const { apiResponse1 } = apiJson1;
      const { article_for_scroll } = apiResponse1;
      const { articles } = apiResponse;
    
    //   console.log(apiResponse);
      

      return {
        props: {
          article_for_scroll ,
          article: articles,
          page_number,
        },
      };
}
export default Feed
