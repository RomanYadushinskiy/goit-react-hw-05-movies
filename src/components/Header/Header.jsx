import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const headerItems = [
    { to: "/", title: "Home" },
    { to: "/movies", title: "Movies" },
];

export const Header = () => {
    return (
        <nav>
            <ul>
                {headerItems.map((headerItem) => {
                    return (
                        <li key={headerItem.title}>
                            <NavLink
                                className={({ isActive }) => isActive ? styles.nav_active : null}
                                to={headerItem.to}>{headerItem.title}</NavLink>
                    </li>
                    )
                    
                })}
            </ul>
        </nav>
    );
};