import  Toolbar  from "../components/toolbar";
import  Aricle  from "../components/article";
export  const ArticlePage = ({article})=>{
 
    return (
        <div className="flex  items-center flex-col">
          <Toolbar/>
          <div className="cursor-pointer sm:w-full md:w-3/4 lg:w-1/2">
          <Aricle  article={article} key={0} index={0} goUrl={true}  />
          </div>
        </div>
    );
}
ArticlePage.getInitialProps = ({ query }) => {
    const title = query.title;
    const description = query.description;
    const article = {title:title, description:description , urlToImage:query.urlToImage, url: query.url}
   
    return {
        article:article,
      
    }
  }

// export const getServerSideProps = async pageContext => {
       
//     const apiResponse = await fetch(
//             'https://my-json-server.typicode.com/r3dcoder/myprofile/db'
//         )

//         const {profile} = await apiResponse.json();

//         return {
//             props:{
//                 profile 
//             }
//         }
// };
export default ArticlePage;