import Image from 'next/image'
import classes from './page.module.css'
import BlogCard from './components/blogCard/BlogCard'
import { blogs } from './lib/data'

export default function Home() {
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
      {blogs.map((blog)=>(
        <BlogCard key={blog.title} blog={blog}/>
      ))}
    </div>
   
    </div>
  )
}
