
const notRussianLetter = /[^а-я А-Я]/;
const numberPhoneRegex =  /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;

export const isRussianLetters = (str: string) : boolean => {
    return !notRussianLetter.test(str);
};

export const isNumberPhone = (numberPhone: string) : boolean => {
    return numberPhoneRegex.exec(numberPhone) != null;
};

