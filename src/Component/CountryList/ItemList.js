import React from 'react'
import './ItemList.css'
import {useHistory} from 'react-router-dom'
function ItemList() {
          const history = useHistory()
          const onClinkIndia = () => {
                    history.push('/india')
          }
          const onClickHandlerUk=()=>{
                    history.push('/uk')
          }
          const onClickHandlerUs=()=>{
                    history.push('/us')
          }
          const onClickHandlerEuro=()=>{
                    history.push('/euro')
          }
          return (
                    <div>
                              <div className="main">
                              <div className="card4 shadow2 zoom" onClick={onClinkIndia}>
                                        <div className='hader'>
                                                  <h6>Conversion Rupees to other currency</h6>
                                        </div>
                                        
                              </div>
                              <div className="card3 shadow2 zoom" onClick={onClickHandlerUs}>
                                        <div className='hader'>
                                                  <h6>Conversion Dollar to other currency</h6>
                                        </div>
                                        
                              </div>
                              <div className="card5 shadow zoom" onClick={onClickHandlerUk}>
                                        <div className='hader'>
                                                  <h6>Conversion Pound sterling to other currency</h6>
                                        </div>
                                        
                              </div>
                              <div className="card5 shadow zoom" onClick={onClickHandlerEuro }>
                                        <div className='hader'>
                                                  <h6>Conversion Euro sterling to other currency</h6>
                                        </div>
                                        
                              </div>
                              </div>
                    </div>
          )
}

export default ItemList
