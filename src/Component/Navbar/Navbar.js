import React from 'react'
import './Navbar.css'
import { BsFillBellFill} from 'react-icons/bs';
import {HiUserCircle} from 'react-icons/hi'
import {CgLayoutGridSmall} from 'react-icons/cg'
import {HiCurrencyRupee} from 'react-icons/hi'
import Sider from '../Sider/Sider'
import {Link} from 'react-router-dom'
const Navbar = () => {
          return (
                    <div>
                              <nav className="navbar navbar-expand-lg " >
                                        {/* <span></span> */}
                                        <div className="logo">
                                                  <Link to='/'>
                                                  <HiCurrencyRupee/>
                                                  </Link>
                                        </div>
                                        <div>
                                                  <bold className="cname">Rate of currency</bold>
                                        </div>
                                        <div>
                                                  <h1 className="dash">Dashboard</h1>
                                        </div>
                                        
                                                  {/* <div className="mi"> */}
                                                  <div className='bs'>
                                                            <BsFillBellFill />
                                                  </div>
                                                  <div className="cg">
                                                            <CgLayoutGridSmall />
                                                  </div>
                                                  <div className="hi">
                                                            <Link to='/login'>
                                                            <HiUserCircle  />
                                                            </Link>
                                                  </div>
                                                  
                                                  

                                                  
                                       
                                        
                                        
                              </nav>
                              <Sider/>
                    </div>
          )
}

export default Navbar
