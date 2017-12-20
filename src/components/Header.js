import React, { Component } from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import logo from '../images/jobEra.png';
import './Header.css';

// export class Header extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             navCollaped: false
//         }
//     }
//     _onToggleNav = () => {
//         this.setState({ navCollapsed: !this.state.navCollapsed })
//     }
//     render() {
//         const { navCollapsed } = this.state
//         return (
//             <div>

//                 <nav className='navbar navbar-default'>
//                     <div className="container-fluid">
//                         <div className='navbar-header'>
//                             <a className='navbar-brand' href='/'>Your Brand</a>
//                             <button
//                                 aria-expanded='false'
//                                 className='navbar-toggle collapsed'
//                                 onClick={this._onToggleNav}
//                                 type='button'>
//                                 <span className='sr-only'>Toggle navigation</span>
//                                 <span className='icon-bar'></span>
//                                 <span className='icon-bar'></span>
//                                 <span className='icon-bar'></span>
//                             </button>
//                         </div>
//                         <div className={(navCollapsed ? 'collapsing collapse' : '') + '  navbar-collapse'}>
//                         {/* <div className="collapse navbar-collapse"> */}
//                             <ul className="nav navbar-nav">
//                                 <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
//                                 <li><a href="#">Link</a></li>
//                                 <li className="dropdown">
//                                     <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
//                                     <ul className="dropdown-menu">
//                                         <li><a href="#">Action</a></li>
//                                         <li><a href="#">Another action</a></li>
//                                         <li><a href="#">Something else here</a></li>
//                                         <li role="separator" className="divider"></li>
//                                         <li><a href="#">Separated link</a></li>
//                                         <li role="separator" className="divider"></li>
//                                         <li><a href="#">One more separated link</a></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                             <form className="navbar-form navbar-left">
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" placeholder="Search" />
//                                 </div>
//                                 <button type="submit" className="btn btn-default">Submit</button>
//                             </form>
//                             <ul className="nav navbar-nav navbar-right">
//                                 <li><a href="#">Link</a></li>
//                                 <li className="dropdown">
//                                     <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
//                                     <ul className="dropdown-menu">
//                                         <li><a href="#">Action</a></li>
//                                         <li><a href="#">Another action</a></li>
//                                         <li><a href="#">Something else here</a></li>
//                                         <li role="separator" className="divider"></li>
//                                         <li><a href="#">Separated link</a></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>


//             </div>
//         );
//     }
// }


export const Header = () => {
    return (
        <div>
            <Navbar fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">
                            <img  className="logo_registerPage" src={logo} />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>My Profile</MenuItem>
                            
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Log Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
