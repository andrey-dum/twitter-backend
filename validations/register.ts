import { body } from 'express-validator'

export const registerValidations = [
    body('email', 'Введите email').isEmail().withMessage('Некорректный email').isLength({
        min: 10,
        max: 40
    }).withMessage('Некорректная длина email'),
    body('fullname', 'Введите полное имя')
        .isString()
        .isLength({
            min: 2,
            max: 40
        }).withMessage('Колличество символов имени 2-40'),
    body('username', 'Логин')
        .isString()
        .isLength({
            min: 2,
            max: 40
        }).withMessage('Колличество символов 2-40'),
    body('password', 'Укажите пароль')
        .isString()
        .isLength({
            min: 6
        }).withMessage('Минимальная длина пароля 6 символов')
        .custom((value, { req }) => {
             if (value !== req.body.password2) {
                 throw new Error('Пароли не совпадают')
             } else {
                 return value
             }
        })
]