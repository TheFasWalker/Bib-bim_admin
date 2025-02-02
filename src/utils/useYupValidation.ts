import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'


function setupYupLocale(){
    yup.setLocale({
        mixed:{
            required:'Обязательно для заполнения',
            default:'Значение неподходит'
        },
        string:{
            email:"Невалидный email",
            min:'Минимум ${min} символа',
            max:'Максимум ${max} символов',
            length:'Длинна должна быть ${length} символов'
        },
        number:{
            min: 'Должно быть больше или равно ${min}',
            max: 'Должно быть меньше или равно ${max}',
            positive:'Должно быть положительное число'
        }
    })
}
interface ValidationSchemaOptions {
    email?: boolean;
    name?: boolean;
    surname?: boolean;
    password?: boolean;
    login?:boolean,
    user_id?:boolean,
    role?: boolean,
    description?:boolean,
    images?: boolean;
    isPublished?: boolean;
    [key: string]: boolean | undefined;
}

export function useYupValidation(options: ValidationSchemaOptions) {
    setupYupLocale();

    const schemaObject: any = {}
    if (options.email) {
        schemaObject.email = yup.string().required().email();
    }
    if (options.name) {
        schemaObject.name = yup.string().required().min(3).max(15);
    }
    if (options.surname) {
        schemaObject.surname = yup.string().required().min(3).max(20);
    }
    if (options.password) {
        schemaObject.password = yup.string().min(3);
    }
    if(options.login){
        schemaObject.login = yup.string().required()
    }
    if(options.user_id){
        schemaObject.user_id = yup.string().required()
    }
    if(options.role){
        schemaObject.role = yup.string().required('выберите роль')
    }
    if(options.description){
        schemaObject.description = yup.string().required('Текст поста не может быть пустым')
    }
    if(options.images){
        schemaObject.images = yup.array().min(1, 'Должна быть хотя бы 1 фотография').required()
    }
    if (options.isPublished) {
        schemaObject.isPublished = yup.boolean()
    }

    const schema = toTypedSchema(yup.object(schemaObject));
    return schema;
}