import React from "react";
import { useState } from "react";
import Business from "./components/Business/Business";
import BusinessAdd from "./components/Business/BusinessAd";
import Catalog from "./components/Catalog/Catalog";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Logos from "./components/Logos/Logos";
import Modal from "./components/Modal/Modal";
import Products from "./components/Products/Products";
import Questions from "./components/Questions/Questions";
import * as Validator from './FormValidator';

import './styles/App.css';
import './styles/laptop.css';
import './styles/laptopm.css';
import './styles/tablet.css';


function App() {

    const [modalActive, setModalActive]     = useState(false);  // modal window activator

    // user registration
    const registration = () => {
        const   childes = document.querySelector('#registrationForm').childNodes;      // take form childrens
        let     data    = {};                   // from data

        childes.forEach(element => {            // take data from form
            data[element.name] = element.value;
        });
        
        // give data to server
        fetch("./index.php", {  
            method: 'POST',
            header: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(data)      // data as JSON object in string
        })
        .then(response => response.text())
        .then(response => {console.log(response); ; setModalActive(true);});


    }

    // form validation
    const formError = () => {
        Validator.fioValidate(document.querySelector('#registration input[name="fio"]'));
        Validator.birthdayValidate(document.querySelector('#registration input[name="birthday"]'));
        Validator.phoneNumberValidate(document.querySelector('#registration input[name="phoneNumber"]'));
        Validator.mailValidate(document.querySelector('#registration input[name="mail"]'));
        Validator.addressValidate(document.querySelector('#registration input[name="address"]'));
    }

    const formGood = () => {
        document.querySelector('#registration input[name="fio"]').classList.add('good_form_input');
        document.querySelector('#registration input[name="birthday"]').classList.add('good_form_input');
        document.querySelector('#registration input[name="phoneNumber"]').classList.add('good_form_input');
        document.querySelector('#registration input[name="mail"]').classList.add('good_form_input');
        document.querySelector('#registration input[name="address"]').classList.add('good_form_input');
        
        document.querySelector('#registration input[name="fio"]').setAttribute('disabled', 'disabled');
        document.querySelector('#registration input[name="birthday"]').setAttribute('disabled', 'disabled');
        document.querySelector('#registration input[name="phoneNumber"]').setAttribute('disabled', 'disabled');
        document.querySelector('#registration input[name="mail"]').setAttribute('disabled', 'disabled');
        document.querySelector('#registration input[name="address"]').setAttribute('disabled', 'disabled');
        document.querySelector('#registration input[name="form_btn"]').setAttribute('disabled', 'disabled');
    }

    return (
        <div className="App">

            <Header/>

            <Home />

            <Company />
            
            <Catalog />

            <Products />

            <Gallery />

            <Business />

            <BusinessAdd />

            <Questions />

            <Logos />

            <section className="registration" id="registration">
                <div className="wrapper">
                    <div className="content">
                        <div className="section_content section_content_half">

                            <h2>Регистрация</h2>
                            <p className="section_description">Стань частью дружной семьи Farmasi уже сейчас</p>

                            <form action="" id="registrationForm">
                                <input className="typing" type="text" name="fio" placeholder="ФИО" onBlur={() => Validator.fioValidate(document.querySelector('#registration input[name="fio"]'))} /> 
                                <p className="error_text"></p>
                                <input className="typing" type="date" name="birthday" placeholder="Дата рождения" onBlur={() => Validator.birthdayValidate(document.querySelector('#registration input[name="birthday"]'))} />
                                <p className="error_text"></p>
                                <input className="typing" type="phone" name="phoneNumber" placeholder="Номер телефона" onBlur={() => Validator.phoneNumberValidate(document.querySelector('#registration input[name="phoneNumber"]'))} />
                                <p className="error_text"></p>
                                <input className="typing" type="mail" name="mail" placeholder="Электронная почта" onBlur={() => Validator.mailValidate(document.querySelector('#registration input[name="mail"]'))} />
                                <p className="error_text"></p>
                                <input className="typing" type="text" name="address" placeholder="Адрес" onBlur={() => Validator.addressValidate(document.querySelector('#registration input[name="address"]'))} />
                                <p className="error_text"></p>
                                <input type="button" name="form_btn" value='Зарегистрирваться' onClick={() => {
                                    let clickable = true;
                                    formError();
                                    let formm = document.querySelector('#registrationForm');
                                    for(let elem of formm.childNodes){
                                        clickable &= !(elem.classList.contains("error_form_input"));
                                        if(!clickable)
                                            break;
                                    }
                                    if(clickable){
                                        formGood();
                                        registration();
                                    }
                                    }}/>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

            <Modal active={modalActive} setActive={setModalActive}>
            </Modal>

            <Footer />
        </div>
    );
}

export default App;
