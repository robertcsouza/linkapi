
class DateTime{

    

    now(){
        
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        const dataAtual = dia + '/' + mes + '/' + ano;

        return dataAtual
       
    }

}

export default new  DateTime();





