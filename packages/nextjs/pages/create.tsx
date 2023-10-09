
import type { NextPage } from "next";
import Link from "next/link";
import { MetaHeader } from "~~/components/MetaHeader";
import { useUser } from '@auth0/nextjs-auth0/client';
const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
             <span className="block text-4xl font-bold">Create Your Article</span>
          </h1>
          <input type="text" placeholder="Type your title" className="input input-bordered w-full max-w-xs my-5" />
          <div className="flex items-center justify-center ">
            {user?<button className="h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3">
              <span>Create article</span>
          </button>:<Link href="/api/auth/login"><button  className="h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3">
            <span>Login to Create article</span>
          </button></Link>}
            
              
            
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <h1 className="text-center mb-6">
            <span className="block text-4xl font-bold">Explore AI Generated Article</span>
          </h1>
          <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">

              <div  className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4">
                <div className="flex">
                  <div className="flex flex-col gap-1">


                    <button
                      className={`h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3 `}

                      >
                      <span>See</span>
                    </button>
                  </div>

                </div>

              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
