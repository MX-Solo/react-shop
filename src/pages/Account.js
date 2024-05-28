import { Route, Routes } from 'react-router-dom'

const Account = () => {
  return (
    <div>
      <h2>حساب کاربری</h2>
      <Routes>
        <Route path="new-user" element={<p>کاربر جدید</p>} />
      </Routes>
    </div>
  )
}

export default Account
