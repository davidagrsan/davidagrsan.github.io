import './SimpleNavbar.css';

const SimpleNavbar = () => {
    return (
        <div id="navbar-container">
            <nav>
                <div className="border-gradient-horizontal top-left">
                    <div className="border-gradient-vertical top-left">
                        <img src="/imgs/logoD.png" alt="logo-navbar"></img>
                    </div>
                </div>
                <div className="border-gradient-horizontal top-right">
                    <div className="border-gradient-vertical top-right">
                        <ul id="social-icons">
                            <li><i class="fa-solid fa-envelope"></i></li>
                            <li><i class="fa-brands fa-github"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SimpleNavbar;