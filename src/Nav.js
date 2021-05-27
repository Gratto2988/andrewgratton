const nav = () => {
    return(
        <div className="menu ">
        <div className="nav-menu">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#home">Andrew Gratton</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutme">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">Education</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>    
                    </ul>
                </div>  
            </nav>
        </div>
        </div>
    )
}

export default nav;