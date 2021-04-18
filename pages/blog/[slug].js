import React from 'react';
import {createClient} from "contentful";
import style from "../../styles/blog.module.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
});

export async function getStaticPaths() {
    const res = await client.getEntries({content_type: "blog"});
    const paths = res.items.map((item) => {
        return {
            params: {slug: item.fields.slug}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await client.getEntries({content_type: "blog", 'fields.slug': params.slug});
    return {
        props: {
            myPost: res.items[0],
            revalidate: 120
        }
    }
}

export default function details({myPost}) {

    const {title, thumbnail, blogPost} = myPost.fields;
    console.log(blogPost.fields);
    return (
        <div className={style.postcontainer}>
            <center><div className={style.featuredimg}><img src={thumbnail.fields.file.url}/></div></center>
            <h2 className={style.postTitle}>{title}</h2>
            <article>
                {documentToReactComponents(blogPost)}
            </article>
        </div>
    )
}
