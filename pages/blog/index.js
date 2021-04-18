import React from 'react'
import style from "../../styles/blog.module.css";
import {createClient} from "contentful";
import BlogCard from "../../components/BlogCard";

export async function getStaticProps () {
    const client = createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
    });
    const res = await client.getEntries({content_type: "blog"});

    return {
        props: {
            blogPost: res.items,
            revalidate: 120
        }
    }
}

export default function index({blogPost}) {
    return (
        <div className={style.container}>
            {blogPost.map((post) => {
                return <BlogCard key={post.sys.id} title={post.fields.title} image={post.fields.thumbnail.fields.file.url} slug={`blog/${post.fields.slug}`}/>
            })}
        </div>
    )
}
