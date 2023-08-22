import React from "react";
import './Contact.css'
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from "react-icons/hi2";


const Contact = () =>{

    return( <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/*Left Side */}
            <div className="flexColStart c-left">
                <span className="greenText">Our Contact</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione tempore quibusdam suscipit, id sapiente odit pariatur fugiat minus deleniti qu</span>
                <div className="flexColStart contactModes">
                    {/*first row  */}
                    <div className="flexStart row">
                        {/*first mode  */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={20}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">+212 06 04 81 58 13</span>

                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>

                        </div>
                        {/*second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={20}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">+212 06 04 81 58 13</span>

                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>

                        </div>
                    </div>
                    {/*second row  */}
                    <div className="flexStart row">
                        {/*theerth mode  */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={20}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">+212 06 04 81 58 13</span>

                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>

                        </div>
                        {/*fourth mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={20}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">+212 06 04 81 58 13</span>

                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>

                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="c-right">
                <div className="image-container image-none">
                    <img src="./contact.jpg" alt="" />
                </div>

            </div>

        </div>
    </section>)
}

export default Contact