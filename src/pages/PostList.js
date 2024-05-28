import { Link } from 'react-router-dom'

const PostList = () => {
  return (
    <section>
      <h2>پست‌ها</h2>
      <ul>
        <li>
          <Link to="/posts/p1">پست اول</Link>
        </li>
        <li>
          <Link to="/posts/p2">پست دوم</Link>
        </li>
        <li>
          <Link to="/posts/p3">پست سوم</Link>
        </li>
      </ul>
    </section>
  )
}

export default PostList
