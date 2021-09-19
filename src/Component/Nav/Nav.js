import React, {useState} from 'react'
import './Nav.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Nav = () => {
          const history = useHistory()
          const [date, setDate] = useState("")
          const fetch = async  ()=>{
          const data = await axios.get(
                    ` https://v6.exchangerate-api.com/v6/922787ffd64528da27903f57/latest/INR`
          );
                    console.log(data.data.time_last_update_utc);
                    setDate(data.data.time_last_update_utc)
          }
          fetch();
          const onClickHandlerHome = () => {
                    history.push('/')
          }
          return (
                    <div>
                              <div className="header">
                                        
                                        <h4 className="item" onClick={onClickHandlerHome} >
                                        <h6>{date}</h6>
                                                  <h3 className="live">Live</h3>
                                                  Currency Rate
                                        </h4>
                              </div>
                    </div>
          )
}

export default Nav
