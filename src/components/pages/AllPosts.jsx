import React from 'react'
import { useState, useEffect } from 'react'
import service from '../../appwrite/Service'
import { Container, PostCard } from '../index'

function AllPosts() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setposts(posts.documents)
      }
    })
  }, [posts])

  return (
    <div className="w-full py-8 mt-4">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {posts.length != 0 ? (posts.map((post) => (
            <div key={post.$id} className='p-2 '>
              <PostCard post={post} />
            </div>
          ))) : (
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

export default AllPosts;
