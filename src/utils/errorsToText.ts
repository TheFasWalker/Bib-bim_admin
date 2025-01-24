import errorsArray from '../../helperData/erros.json'

export default function(errorCode:string):string{
    if(errorsArray[errorCode]){
        return errorsArray[errorCode]

    }else{
        return 'Неизвестная ошибка'
    }
}