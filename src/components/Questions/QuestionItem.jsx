import React from "react";
import { useState } from "react";

export default function QuestionItem({question, answer, index}) {

    const [active, setActive] = useState(false);

    const changeClasses = (index) => {
        let el = document.querySelectorAll(".q_block")[index];
        let plus = el.firstElementChild.firstElementChild.firstElementChild;
        let answer = el.lastElementChild;
        if(answer.classList.contains("opened")){
            answer.classList.add("close");
            plus.classList.remove("rotate");
            answer.classList.remove("opened");
            setTimeout(() => {
                answer.classList.remove("close");
            }, 200);
        }
        else {
            answer.classList.add("opened");
            plus.classList.add("rotate");
        }
    }

    if(typeof answer === "string")
        return(

            <div className="q_block">
                <div className="question" onClick={() => {setActive(!active); changeClasses(index)}}>
                    {question}
                    <div className="adv_ico">
                        <img src="./images/plus.png" alt="" className=""/>
                    </div>
                </div>
                <div className="answer" >
                    <p>{answer}</p>
                </div>
            </div>

        )
    else {
        return(

            <div className="q_block">
                <div className="question" onClick={() => {setActive(!active); changeClasses(index)}}>
                    {question}
                    <div className="adv_ico">
                        <img src="./images/plus.png" alt="" className="" />
                    </div>
                </div>
                <div className="answer">
                    <p>{answer.p}</p>
                    <p>1. {answer.ol.lis[0]}</p><p>2. {answer.ol.lis[1]}</p><p>3. {answer.ol.lis[2]}</p><p>4. {answer.ol.lis[3]}</p>
                    <p>{answer.ps[0]}</p>
                    <p>{answer.ps[1]}</p>
                </div>
            </div>
    
        )
    }

}