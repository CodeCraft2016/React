import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion';
import {useState} from "react"


const Value = ()=>{

    return ( <div>
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/*left Side  */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                 {/*right Side  */}
             <div className="flexColStart v-right">
                <span className="greenText">Our Value</span>
                <span className="primaryText">Value We Give to you</span>
                <span className="secondaryText">
                    We always ready to help by providing the best services for you.<br/>
                    We beleive a good blace to live can make your life better
                </span>
                <Accordion
                className="accordion"
                allowMultipleExpanded = {false}
                preExpanded={[0]}
                
                >
                   {
                    data.map((item,i)=>{
                        const[className, setClassName] = useState(null) 
                        return(
                            <AccordionItem
                            className={`accordionItems ${className}` } key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButtons">
                                        <AccordionItemState>
                                            {({expanded})=> 
                                            expanded 
                                                ? setClassName("expanded") 
                                                : setClassName("collaped")
                                            } 
                                        </AccordionItemState>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                        <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>

                                </AccordionItemHeading>   

                                <AccordionItemPanel>

                                    <p className="secondaryText">{item.detail}</p>

                                </AccordionItemPanel>

                            </AccordionItem>
                        )
                    })

                   } 

                </Accordion>
             </div>
            </div>
            

        </section>
    </div>)
}

export default Value