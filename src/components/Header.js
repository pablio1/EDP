import React from 'react';

function Header(){
    return(
        <header id="header" className="fixed-top header-transparent">
            <div className="container d-flex align-items-center">   
                <a href={'/'} className="logo mr-auto" style={{fontSize: '15px'}}><img src="assets/img/uc.png" height="50" alt="" className="img-fluid" /> University of Cebu</a>
                <nav className="main-nav d-none d-lg-block">
                    <ul>
                    <li className={'active'}><a href={'/'}>Home</a></li>
                    <li><a href={'#services'}>New Student/Transferee</a></li>
                    <li><a href={'#about'}>About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;