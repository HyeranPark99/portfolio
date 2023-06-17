import NavProject from "../navproject"
import Head from "next/head";
import Link from 'next/link';
import { AiFillGithub} from 'react-icons/ai'



const Movie = () => {
    return (
        <div>
             <Head>
                <title>Hyeran Park movieRecommend Project</title>
            </Head>
            <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 '>
            < NavProject />
            <div className='text-left p-10'> 
                <h2 className=" text-lg py-5 text-teal-600 font-medium md:text-3xl">BTTXGOOGLE Movie Recommendation System</h2>
                <h3 className=" py-5 dark:bg-gray-900 "> This project is to build a movie recommendation system using data include keywords, metadata, movie IDs, and user IDs.
                    The competition is provided by BTT AI X GOOGLE.</h3>
                
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600"> 
                <Link href='https://github.com/HyeranPark99/MovieRecSystem' rel='noopener noreferrer'
                    target='_blank'className='cursor-pointer'>
                    <AiFillGithub /> 
                </Link>
                </div>
                

                    


            </div>
                


            </main>

        </div>
        
    )
};

export default Movie;