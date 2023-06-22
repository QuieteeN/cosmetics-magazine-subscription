import React from "react";

export default function Footer() {

    return(
        <footer>
            <div className="wrapper">
                <div className="content">
                    <div className="section_content_third">
                        <h4>QTN Production</h4>
                        <p><img src="./images/copyright.png" alt="" /> Все права защищены.</p>
                        <p>Сайт авторства QuieteeN.</p>
                    </div>
                    <div className="section_content_third">
                        <p className="mail">jack.johnson.95@inbox.ru</p>
                        <p className="phone_number">+7 (999) 999-99-99</p>
                    </div>
                    <div className="section_content_third">
                        <ol className="info">
                            <li><a href="#home">Главная</a></li>
                            <li><a href="#business">Бизнес</a></li>
                            <li><a href="#catalog">Каталог</a></li>
                            <li><a href="#questions">Вопросы</a></li>
                        </ol>
                        <ol className="info">
                            <li><a href="#company">Компания</a></li>
                            <li><a href="#product">Продукты</a></li>
                            <li><a href="#registration">Регистрация</a></li>
                        </ol>
                        <ol className="info">
                        </ol>
                        <ol className="info">
                            <li><a href="#">VK</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </footer>
    )

}