import axios from 'axios'
import server from '../../libs/server'
import MarkdownIt from 'markdown-it/lib'

export default function Post({ post }) {
  console.log(post)
  const md = new MarkdownIt()
  const htmlContent = md.render(post.attributes.content)
  return (
    <article>
      <header>
        <h1 className="raleway text-xl">{post.attributes.title}</h1>
        <h4>{post.attributes.description}</h4>
      </header>
      <section
        className="post my-10"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></section>
    </article>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${server}/api/posts/`)
  const posts = res.data.data

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postRes = await axios.get(`${server}/api/posts/${params.id}`)
  const post = postRes.data.data

  return {
    props: { post },
    revalidate: 36000,
  }
}
