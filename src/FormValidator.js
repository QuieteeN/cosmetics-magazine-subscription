
export function fioValidate(input){
    const errorText = input.nextSibling;

    if(input.value.trim() === ""){
        errorText.textContent = "Обязательное поле";
        input.classList.add('error_form_input');
        return;
    }
    if(input.value.trim().length > 200){
        errorText.textContent = "Превышение ограничения по знакам";
        input.classList.add('error_form_input');
        return;
    }

    errorText.textContent = "";
    input.classList.remove('error_form_input');

}

export function birthdayValidate(input){
    const errorText = input.nextSibling;

    if(input.value.trim() === ""){
        errorText.textContent = "Обязательное поле";
        input.classList.add('error_form_input');
        return;
    }
    
    let date = new Date(input.value.replace(/(\d+).(\d+).(\d+)/, '$2/$3/$1')); 
    let now = new Date();

    if(date.valueOf() > now.valueOf()){
        errorText.textContent = "Дата не может быть будущим";
        input.classList.add('error_form_input');
        return;
    }

    errorText.textContent = "";
    input.classList.remove('error_form_input');

}

export function phoneNumberValidate(input){
    const errorText = input.nextSibling;

    if(input.value.trim() === ""){
        errorText.textContent = "Обязательное поле";
        input.classList.add('error_form_input');
        return ;
    }

    if(!(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value))){
        errorText.textContent = "Неправильный формат";
        input.classList.add('error_form_input');
        return;
    }

    errorText.textContent = "";
    input.classList.remove('error_form_input');
}

export function mailValidate(input){
    const errorText = input.nextSibling;

    if(input.value.trim() === ""){
        errorText.textContent = "Обязательное поле";
        input.classList.add('error_form_input');
        return;
    }

    if(!(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(input.value))){
        errorText.textContent = "Неправильный формат";
        input.classList.add('error_form_input');
        return;
    }

    errorText.textContent = "";
    input.classList.remove('error_form_input');
}

export function addressValidate(input){
    const errorText = input.nextSibling;

    if(input.value.trim() === ""){
        errorText.textContent = "Обязательное поле";
        input.classList.add('error_form_input');
        return;
    }

    errorText.textContent = "";
    input.classList.remove('error_form_input');
}
