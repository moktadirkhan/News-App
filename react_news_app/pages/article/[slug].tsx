import Toolbar from "../../components/toolbar";
import { useRouter } from "next/router";
import Aricle from "../../components/article";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { server } from "../../config";

export const Feed = ({ pageNumber, articles, totalResults }) => {
  const router = useRouter();
  const [articles1, setArticles1] = useState(articles);
  const [currentPage, setCurrentPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const getMoreArticles = async () => {
    var cPage: number = currentPage + 1;
    setCurrentPage(cPage);
    const size = 5 * pageNumber;

    const apiJson = await getData(currentPage);
    console.log("res ..", apiJson);
    const { apiResponse } = apiJson;

    const { articles } = await apiResponse;
    setArticles1((articles1) => [...articles1, ...articles]);
  };

  useEffect(() => {
    setHasMore(totalResults > articles1.length ? true : false);
  }, [articles1]);

  return (
    <div className="flex  items-center flex-col">
      <Toolbar />

      <InfiniteScroll
        className="items-center md:w-2/3 sm:w-full lg:w-1/2 m-auto  "
        dataLength={articles1.length}
        next={getMoreArticles}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {articles1.map((article, index) => (
          <span
            onClick={() =>
              router.push({
                pathname: "/article",
                query: {
                  title: article.title,
                  description: article.description,
                  urlToImage: article.urlToImage,
                  url: article.url,
                },
              })
            }
            className="cursor-pointer"
          >
            <Aricle article={article} key={index} index={index} goUrl={false} />
          </span>
        ))}
      </InfiniteScroll>
    </div>
  );
};

const getData = async (number) => {
  const apiResponse = await fetch(`${server}/api/${number}`).then((res) =>
    res.json()
  );
  console.log("api res", apiResponse);
  return apiResponse;
};
export const getServerSideProps = async (pageContex) => {
  const pageNumber = 1;

  const apiJson = await getData(pageNumber);
  console.log("res ..", apiJson);
  const { apiResponse } = apiJson;
  const { articles } = apiResponse;
  const { totalResults } = apiResponse;

  return {
    props: {
      articles,
      pageNumber: pageNumber,
      totalResults,
    },
  };
};
export default Feed;
