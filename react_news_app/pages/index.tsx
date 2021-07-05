import { useRouter } from "next/router";
import  Toolbar  from "../components/toolbar";
 
export default function Home() {
  const router = useRouter();
  return (
    
    <div className=" flex   items-center flex-col">
      <Toolbar />
      <div className="min-h-screen p-2 flex flex-col justify-center align-center text-center ">
        <h1 className="font-bold text-3xl">
          Welcome to  React News App 
        </h1>

        <p>
        <div className="font-bold m-2 text-2xl cursor-pointer hover:bg-gray-500 " onClick= {()=>router.push('/article/feed')}>Get Latest News</div>
        </p>
      </div>
    </div>
  );
}
