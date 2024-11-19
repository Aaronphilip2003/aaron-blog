import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import CallToAction from '../components/CallToAction'
import PostCard from '../components/PostCard'

export default function Home() {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await fetch('/api/post/getposts')
      const data = await res.json()
      setPosts(data.posts)
    }
    fetchPosts()
  }, [])

  
  return (
    <div>
      <div className='flex flex-col gap-6 lg:p-28 p-3 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog!</h1>
        <p className='text-gray-500 text-lg'>Hello, world! 🌍✨ I'm Aaron, a software developer with a passion for learning, sharing, and building. 🛠️📚 This blog is my little corner of the internet where I document my journey as a developer, talk about my experiences in the tech world, and explore the fascinating realm of Computer Science. 💻🔍 What started as a side project has grown into a platform where I share insights, and a behind-the-scenes look at my life as a tech enthusiast. 🚀💡 Dive in, explore, and let's build something amazing together! 🌟🎉</p>
      <Link to="/search" className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>View all Posts</Link>
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {
          posts && posts.length > 0 && (
            <div className="flex flex-col gap-10">
              <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
              <div className='flex flex-wrap gap-20'>
                {
                  posts.map((post) => (
                  <PostCard key={post._id} post={post}/>  
                ))}
              </div>
              <Link to={'/search'} className='text-lg text-teal-500 hover:underline text-center'>
              View All Posts
              </Link>
            </div>
          )
        }
      </div>
      <div className='p-3 dark:bg-slate-700'>
        <CallToAction/>
      </div>
    </div>
  )
}
