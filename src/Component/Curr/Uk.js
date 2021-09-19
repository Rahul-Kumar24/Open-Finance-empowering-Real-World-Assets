import React, {useState, useEffect} from 'react'
import './Uk.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Nav from '../Nav/Nav'
const Uk = () => {
          
          const history = useHistory()
          
          
          const [ratesList, setRatesList] = useState([]);
          const [base, setBase] = useState("GBP");
          
          useEffect(() => {
          getRates("GBP");
          }, []);
          let price=0;
          const getRates = async (base) => {
          const data = await axios.get(
          ` https://v6.exchangerate-api.com/v6/922787ffd64528da27903f57/latest/${base}`
          );
          console.log(data.data.conversion_rates)
          const { rates } = data.data.conversion_rates;
          const ratesTemp = [];
          for (const [symbol, rate] of Object.entries(data.data.conversion_rates)) {
                    if(symbol === 'USD'){
                              price=rate;
                    }
          ratesTemp.push({ symbol, rate });
          }
          setRatesList(ratesTemp);
          };
         
          // console.log(ratesList)
          return (
                    <div>
                              <Nav/>
                                        {ratesList.map((item)=>(
                                        <div className="hor">
                                        <div className="card2 shadow3 zoom">
                                                  <div className="mapcard">
                                                            <h6 className="mh6">GBP</h6>
                                                            <h6 className="mh7">{item.symbol}</h6>
                                                  </div>
                                                  <div className="price">
                                                            <h6>1 </h6>
                                                            <h6>{item.rate}</h6>
                                                  </div>
                                                  <div>
                                                            <h6>{(1/item.rate).toPrecision(5)}</h6>
                                                  </div>
                                                  <div>
                                                            <progress className="prog" max={100} value={1/item.rate} ></progress>

                                                            <progress className="" max={price} value={1/item.rate} />
                                                  </div>
                                        </div>
                                        </div>
                                        ))}
                              
                    </div>
                    
          )
}

export default Uk
















// const feact = async ()=>{
          //           const data = await axios.get('https://v6.exchangerate-api.com/v6/922787ffd64528da27903f57/latest/INR')
          //           setCurrent(data.data.conversion_rates)
          //           var obj = data.data.conversion_rates;
          //           console.log(JSON.stringify(obj))
          //           setCurrent(JSON.stringify(obj))
                    // for (let [key, val] of Object.entries(obj)) {
                              // console.log(key)
                              // var objectcreate = new Object();
                              // var objectcreate = {"contry":key,"price":val}
                              // data[i++]=key
                              // console.log("hello ", data[i-1] )
                    // }
                    // Object.keys(obj).map(function (key, val) {
                    //           console.log(key)
                    //           var objectcreate = {"contry":key,"price":val}
                    //           data.push(objectcreate)
                    // })
                    
          // }
          // console.log("asd",data[0])
          // Object.keys(obj).map(function (key, val) {console.log(key,val)})
