import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">صفحه اصلی</NavLink>
          </li>
          <li>
            <NavLink to="/posts">پست‌ها</NavLink>
          </li>
          <li>
            <NavLink to="/account">حساب کابری</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
