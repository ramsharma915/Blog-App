import {React,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../../appwrite/Service';
import { useSelector } from 'react-redux';
import {Container,PostCard} from '../index'

export default function SearchBox(){
    const authSearch = useSelector((state)=>state.Auth.search)
    const [posts,setposts] = useState([]);
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setposts(posts.documents)
            }
        })
    },[])

    const Filterposts = posts.filter((post)=>post.title.toLowerCase().includes((authSearch || '').toLowerCase()));

    return (
    <div className="w-full py-8 mt-4">
          <Container>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              { Filterposts.length > 0 ? (Filterposts.map((post)=>( 
                <div key={post.$id} className='p-2'>
                    <PostCard post={post}/>
                </div>
              ))):
               (
                <div className="w-full min-h-screen flex justify-center">
                <div
                  className="w-full p-2 text-2xl text-center font-bold hover:text-gray-500 ">
                  No Posts Available.
                </div>
                </div>
              )}
            </div>
          </Container>
        </div>
    )
}
