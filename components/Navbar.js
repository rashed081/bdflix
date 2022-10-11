import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faPlay,
    faBars,
    faBoxArchive,
    faMusic,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <nav className="navbar fixed-bottom navbar-expand shadow-lg" style={{ height: "80px", backgroundColor: "#DCEAFB", }}>
            <div className="   mx-auto" style={{ width: "375px" }}>
                <ul className="navbar-nav d-flex justify-content-around">
                    <Link href="/" className="nav-item active"><a className="nav-link">
                        <FontAwesomeIcon
                            icon={faHouse}
                            style={{ fontSize: 20, color: "#2D9CDB" }}
                        /></a>
                    </Link>
                    <Link href="/playlist" className="nav-item"><a className="nav-link">
                        <FontAwesomeIcon
                            icon={faMusic}
                            style={{ fontSize: 20, color: "#2D9CDB" }}
                        /></a>
                    </Link>
                    <Link href="/play" className="nav-item"><a className="nav-link">
                        <FontAwesomeIcon
                            icon={faPlay}
                            style={{ fontSize: 20, color: "#2D9CDB" }}
                        /></a>
                    </Link>
                    <Link href="/saved" className="nav-item"><a className="nav-link">
                        <FontAwesomeIcon
                            icon={faBoxArchive}
                            style={{ fontSize: 20, color: "#2D9CDB" }}
                        /></a>
                    </Link>
                    <Link href="/packages" className="nav-item"><a className="nav-link">
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ fontSize: 20, color: "#2D9CDB" }}
                        /></a>
                    </Link>
                </ul>
            </div>
        </nav>
    );

}
export default Navbar;