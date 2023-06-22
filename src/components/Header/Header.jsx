import React from "react";

export default function Header() {

    return(
        <header>
            <div className="wrapper">
                <div className="content">
                    <div className="logo">
                        <img src="./images/logo.png" alt="" className="logo_img" />
                    </div>
                    <nav>
                        <ul className="nav">
                            <li className="nav_item"><a href="#home" className="nav_link">Главная</a></li>
                            <li className="nav_item"><a href="#company" className="nav_link">Компания</a></li>
                            <li className="nav_item"><a href="#catalog" className="nav_link">Каталог</a></li>
                            <li className="nav_item"><a href="#product" className="nav_link">Продукты</a></li>
                            <li className="nav_item"><a href="#business" className="nav_link">Бизнес</a></li>
                            <li className="nav_item"><a href="#questions" className="nav_link">Вопросы</a></li>
                            <li className="nav_item"><a href="#registration" className="nav_link">Регистрация</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )

}