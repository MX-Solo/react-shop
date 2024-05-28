import { useParams } from 'react-router-dom'

const Post = () => {
  const params = useParams()

  return (
    <section>
      <p>{params.postId}</p>
    </section>
  )
}

export default Post
