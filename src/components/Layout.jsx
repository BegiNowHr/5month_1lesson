import { NavLink, Outlet } from "react-router-dom"
const activeMenuClass = ({isActive}) => isActive ? 'active-menu' : ''
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                <li><NavLink
                    to={'/'} 
                    className={activeMenuClass}>
                    Создать новый пост</NavLink> </li>
                <li><NavLink to={'/posts'} className={activeMenuClass}>Посты</NavLink> </li>
                </ul>
            </nav>
            <div className="container" id="info">
                <Outlet />
            </div>
            <footer >
                <div className="basement">
                <a href="">Privacy Policy  </a>
                <a href="">Terms of Use  </a>
                <a href="">Map   </a>
                <div>Geeks 2023</div></div>
                </footer>
        </>
    )
}
export default Layout