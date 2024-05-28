import { Route, Routes, Navigate } from 'react-router-dom'

import Menu from './components/Menu'

import Home from './pages/Home'
import PostList from './pages/PostList'
import Post from './pages/Post'
import Account from './pages/Account'

const App = () => {
  return (
    <div>
      <Menu />
      <main>
        <Routes>
          {/* <Route path="/" exact>
            <Redirect to="/posts" />
          </Route> */}

          <Route path="/" element={<Navigate replace to="/posts" />} />
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/account/*" element={<Account />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
