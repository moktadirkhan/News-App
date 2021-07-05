import {useRouter} from 'next/router';

function Aricle   ({article, index, goUrl})  {
    const router = useRouter();

    return (
        <div
        onClick={() => (goUrl===true && (window.location.href = article.url))}
        key={index}
        className="w-full mt-20 px-4 mb-6 pb-6 border-b-2 border-black"
      >
      
        <h1
          onClick={() => (goUrl===true && (window.location.href = article.url))}
          className=" cursor-pointer align-center text-center text-2xl font-bold"
        > 
          {article.title}
        </h1>
        <p className="my-2 text-2xl ">{article.description}</p>
        {!!article.urlToImage && (
          <img className="w-full" src={article.urlToImage} />
        )}
      </div>
    )
}

export default Aricle;