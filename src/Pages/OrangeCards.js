import React from "react";
import '../styles/App.css'
import { OrangeCardContainer} from "../styles/ProductsElements";




export const OrangeCards = () =>{
    return(
        <OrangeCardContainer>
            <hr />
        <div className="row container" style={{marginLeft:"60px"
        }}>
            <div className="cards-orange " style={{width: "18rem"}}>
                <div className="card-body-orange">
                        <ul className="list-group list-group-flush" >
                            <li  className="list-group-item orange"></li>
                            <li className="list-group-item orange">How many days will it take to sell?</li>
                            <li  className="list-group-item orange">Do I have to open house for public inspection?</li>
                            <li  className="list-group-item orange">Do I have to repair house before selling?</li>
                            <li  className="list-group-item orange">Do I have to pay selling commission?</li>
                            <li  className="list-group-item orange">Can i stay till my other house is ready?</li>
                        </ul>
                    </div>
            </div>
            <div className="cards-orange " style={{width: "18rem"}}>
                <div className="card-body-orange">
                    <ul className="list-group list-group-flush">
                        <li  className="list-group-item orange1">Housecart</li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox1" value="" aria-label="..."/>
                                    <label htmlFor="checkbox1"> </label> <span style={{marginLeft:"10px"}}>Receive an all cash offer in 24 hours</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox2" value="" aria-label="..."/>
                                    <label htmlFor="checkbox2"> </label> <span style={{marginLeft:"10px"}}>No showing or public inspections</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox3" value="" aria-label="..."/>
                                    <label htmlFor="checkbox3"> </label> <span style={{marginLeft:"10px"}}>No repairs or dress for sale</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox4" value="" aria-label="..."/>
                                    <label htmlFor="checkbox4"> </label> <span style={{marginLeft:"10px"}}>Thousands of dollars for sale</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox5" value="" aria-label="..."/>
                                    <label htmlFor="checkbox5"> </label> <span style={{marginLeft:"10px"}}>Stay till you move to your new house</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cards-orange " style={{width: "18rem"}}>
                <div className="card-body-orange">
                    <ul className="list-group list-group-flush">
                        <li  className="list-group-item orange1">Traditional Home Sales</li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox6" value="" aria-label="..."/>
                                    <label htmlFor="checkbox6"> </label> <span style={{marginLeft:"10px"}}>House on market for over 3 month</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox7" value="" aria-label="..."/>
                                    <label htmlFor="checkbox7"> </label> <span style={{marginLeft:"10px"}}>Spend Thousands of dollars in repair to make it ready for sale</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox8" value="" aria-label="..."/>
                                    <label htmlFor="checkbox8"> </label> <span style={{marginLeft:"10px"}}>Pay thousands of dollars in agent fees</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox9" value="" aria-label="..."/>
                                    <label htmlFor="checkbox9"> </label> <span style={{marginLeft:"10px"}}>Pay thousands of dollars in agent fees</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox10" value="" aria-label="..."/>
                                    <label htmlFor="checkbox10"> </label> <span className="col-md-12" style={{marginLeft:"10px"}}>Make immediately nice sold may need to double mortgage </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </OrangeCardContainer>
    )
}