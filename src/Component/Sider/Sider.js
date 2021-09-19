import React from "react";
import "./Sider.css";
import { HiCurrencyRupee } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiCurrencyPound } from "react-icons/hi";
import { HiCurrencyEuro } from "react-icons/hi";
import ItemList from "../CountryList/ItemList";

import { useHistory } from "react-router-dom";
const Sider = () => {
  const history = useHistory();
  const onClickRupee = () => {
    history.push("/india");
  };
  const onClickDollar = () => {
    history.push("/us");
  };
  const onClickPound = () => {
    history.push("/uk");
  };
  const onClickEuro = () => {
    history.push("/euro");
  };
  return (
    <div>
      <div className="main-sider">
        <div className="left-sider">
          <div className="div1" onClick={onClickRupee}>
            <HiCurrencyRupee className="icon" />
            <h6 className="h6">INR</h6>
          </div>
          <div className="div2" onClick={onClickDollar}>
            <HiCurrencyDollar className="icon" />
            <h6 className="h6">USD</h6>
          </div>
          <div className="div3" onClick={onClickPound}>
            <HiCurrencyPound className="icon" />
            <h6 className="h6">GBP</h6>
          </div>
          <div className="div4" onClick={onClickEuro}>
            <HiCurrencyEuro className="icon" />
            <h6 className="h6">EUR</h6>
          </div>
        </div>

        <div className="right-sider">
          <ItemList />
        </div>
      </div>
    </div>
  );
};

export default Sider;
