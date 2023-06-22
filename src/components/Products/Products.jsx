import React from "react";

export default function Products() {
    return(

        <section className="products_plus" id="product">
            <div className="wrapper">
                <div className="content">
                    <div className="plus">
                        <div className="plus_ico">
                            <img src="./images/star.png" alt="" className="plus_img" />
                        </div>
                        <div className="plus_content">
                            <h3 className="plus_header">Не содержит</h3>
                            <p className="plus_description">парабен и триклозан</p>
                        </div>
                    </div>
                    <div className="plus">
                        <div className="plus_ico">
                            <img src="./images/search.png" alt="" className="plus_img" />    
                        </div>
                        <div className="plus_content">
                            <h3 className="plus_header">Проверено</h3>
                            <p className="plus_description">соответствуют нормам</p>
                        </div>
                    </div>
                    <div className="plus">
                        <div className="plus_ico">
                            <img src="./images/pencil.png" alt="" className="plus_img" />
                        </div>
                        
                        <div className="plus_content">
                            <h3 className="plus_header">Тестировано</h3>
                            <p className="plus_description">дерматологами</p>
                        </div>
                    </div>
                    <div className="plus">
                        <div className="plus_ico">
                            <img src="./images/card.png" alt="" className="plus_img" />
                        </div>

                        <div className="plus_content">
                            <h3 className="plus_header">Сертифицикации</h3>
                            <p className="plus_description">FDA, TSEK, BfR, LSR</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}