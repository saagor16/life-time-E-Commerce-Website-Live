/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import Footer from "./Components/Footer";

const MyContext = createContext();

function App() {

  const [countryList,setCountryList]=useState([]);
  const [selectedCountry,setSelectedCountry]=useState('');
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry=async (url)=>{
    const responsive =await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
    })
  }

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header></Header>
        <Routes>
          <Route path="/" exact={true} Component={Home}></Route>
        </Routes>
        <Footer></Footer>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
