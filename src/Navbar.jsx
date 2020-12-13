import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <><div className="container-fluid nav_bg" >
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg " >
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">Khushiyaan</NavLink>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li class="nav-item">
                                        <NavLink exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/" style={{ color: 'black' }}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName='menu_active' className="nav-link" to="/about" style={{ color: 'black' }}>About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName='menu_active' className="nav-link" to="/service" style={{ color: 'black' }}>Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName='menu_active' className="nav-link" to="/contact" style={{ color: 'black' }}>Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        </>
    )
}
export default Navbar