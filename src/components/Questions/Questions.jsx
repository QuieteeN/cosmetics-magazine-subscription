import React from "react";
import QuestionItem from "./QuestionItem";
import questions from "../../data/questions.json";

export default function Questions() {
    
    return(

        <section className="questions" id="questions">
            <div className="wrapper">
                <div className="content">
                    <div className="section_content">

                        <h2>Часто задаваемые вопросы</h2>

                        {questions.map((item, index) => 
                            <QuestionItem key={index} question={item.question} answer={item.answer} index={index} />    
                        )}

                    </div>
                </div>
            </div>
        </section>

    )
}