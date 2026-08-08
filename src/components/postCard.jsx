import React from 'react'
import service from '../appwrite/Service'
import {Link} from 'react-router-dom'
function PostCard({post}){
    return(
        <Link to={`/post/${post.$id}`}>
            <div className="w-full bg-gray-100 p-4 rounded-lg">
                <div className="w-full justify-center mb-4">
                    <img src={service.getFileView(post.featuredImage)} alt={post.title} className={`h-30 w-full px-2 rounded-xl`} />
                </div>
                <h2 className='text-xl font-bold'>{post.title}</h2>
            </div>
        </Link>
    )
}

export default PostCard;
