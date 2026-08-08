import React, { useEffect, useState } from 'react'
import service from '../../appwrite/Service'
import {Container,PostCard} from '../index'

export default function Home(){
    const [posts,setposts]=useState([]);
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setposts(posts.documents);
            }})
    },[])
    if(posts && posts.length === 0){
        return(
            <div className="w-full py-8 mt-4 text-center">
               <Container>
                <div className="min-h-screen flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            No Posts Available.
                        </h1>
                    </div>
                </div>
               </Container>
            </div>
        )
    }
    return(
        <div className="w-full py-8">
            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-4 ">
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-2'>
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

