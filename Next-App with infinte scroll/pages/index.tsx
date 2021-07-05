import Head from 'next/head'
import Image from 'next/image'
import Toolbar from '../components/toolbar'

export default function Home() {
  return (
    

      <div className="">
                <Toolbar/>

        <div className="flex items-center justify-center mt-80">
        <div>
          <h1 className="text-center font-bold text-5xl">NEWS APP</h1>
          <h3 className="font-bold text-2xl mt-5">Your one stop shop for news article</h3>
        </div>
      </div>
      </div>
    )
}
