import React from "react";
import Header from '../Components/Header/Header';
import AboutUs from "../Components/AboutUs/AboutUs";


export default class Homepage extends React.Component{
    render() {
        return (
          <>
              <Header />
              <AboutUs />
          </>
        );
    }
}