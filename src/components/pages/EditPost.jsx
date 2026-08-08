import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {Container,PostForm} from '../index'
import service from '../../appwrite/Service'
import { useParams } from 'react-router-dom'

function EditPost(){
    const [post,setpost]=useState(null);
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>post?setpost(post):null)
        }else{navigate('/')}
    },[slug,navigate])
    return post? (
        <div>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ):null;
}

export default EditPost;
