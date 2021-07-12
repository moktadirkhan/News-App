import { Router } from 'next/dist/client/router';
import image from 'next/image';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/dist/client/router';
import Toolbar from '../../components/toolbar';
import Image from 'next/image'
import fetch from 'node-fetch'
import { server } from '../../config';
// import UserService from 'services/UserService';

const Feed = ({articles,page_number,totalResults}) => {
    const router=useRouter()
    // console.log(article,page_number);
    const [articles1, setarticles1] = useState(articles);
    const [currentPage, setCurrentPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);
   
    const getMoreArticles = async() => {
      var cPage: number = currentPage + 1;
      setCurrentPage(cPage);
   

      const apiJson = await fetchData(currentPage);
      // console.log("res ..", apiJson);
      const { apiResponse } = apiJson;
  
      const {articles}  = await apiResponse;
      // console.log('getartciles',article);
      
      setarticles1((articles1) => [...articles1, ...articles]);
      
      // setarticles((articles1) => [...articles1, ...article]);
      console.log('getarticles',articles1);
    }
    useEffect(() => {
      setHasMore(totalResults > articles1.length ? true : false);
    }, [articles1]);
    return (
        <div >
          <Toolbar/>
            <>
            <InfiniteScroll 
                    dataLength={articles1.length}                    
                    next={getMoreArticles}
                    hasMore={hasMore}
                    loader={<div className="text-center">loading data ...</div>}
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                    >
                      
            {articles1.map((article,index)=>(     //here each articles are maping,that is each articles are comming through a loop
                <div  key={index} className="divide-y divide-black">
                  <div  className="p-8 mx-auto my-5 divide-y justify-centerw-full md:w-2/5 ">
                    <h1 className="my-2 text-2xl font-semibold">{article.title}</h1>
                    <p className="my-2 divide-y divide-y-reverse divide-black">{article.description}</p>
                    {!!article.urlToImage && <img src={article.urlToImage} width={700} height={500}/>}
                    {/* here first part checking images exist and then showing */}
                </div>
                </div>
                
            ))}
            </InfiniteScroll>
            {hasMore ? "" : <div className="text-center">no data anymore ...</div> }
            </>
           


        </div>
       
    )
}
const fetchData=async (number)=>{
  
 const apiResponse= await fetch(`${server}/api/${number}`,).then(res => res.json());
//  console.log('res', apiResponse);
          
  return apiResponse
  
}

export const getServerSideProps=async (pageContext)=>{
   
  const page_number =1;
 
  const apiJson = await fetchData(page_number);
  // console.log('res ..', apiJson);
  const {apiResponse} = apiJson;
  const { articles } = apiResponse;
  const { totalResults } = apiResponse;
   
      

      return {
        props: {
          articles,
          page_number:page_number,
         totalResults,
        },
      };
}
export default Feed
