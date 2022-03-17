import axios from 'axios'
import React from 'react'
import Link from 'next/link'
import server from '../../libs/server'

export default function Blog({ posts, categories }) {
  console.log(categories[3].replace(/_/g, '.'))
  return (
    <article className="layout-p bg-primary pt-10">
      {categories.map((cat, i) => (
        <section
          key={cat + i}
          className=" flex h-[45vh] flex-row border-t-[1px] border-gray-300"
        >
          <div className="my-auto w-1/4 border-r-[1px] border-gray-300 text-[5vw] font-bold text-secondary">
            {cat.replace(/_/g, '.')}
          </div>
          <div className="my-4 w-3/4 pl-4">
            <ul className="overflow-y-scroll">
              {posts.map((post, i) => {
                if (post.attributes.category === cat)
                  return (
                    <li>
                      <Link href={`/blog/${post.id}`}>
                        <a>{post.attributes.title}</a>
                      </Link>
                    </li>
                  )
              })}
            </ul>
          </div>
        </section>
      ))}
    </article>
  )
}

export async function getStaticProps() {
  const postRes = await axios.get(`${server}/api/posts`)
  const posts = postRes.data.data

  const catRes = await axios.get(`${server}/api/categories`)
  const categories = catRes.data.data[0]['attributes']['categories']

  return {
    props: { posts, categories },
    revalidate: 36000,
  }
}
