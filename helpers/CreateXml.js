
class CreateXml{

    

    generate(title,value,status,name,email,id){
          
        
        const  xml = `<?xml version="1.0" encoding="UTF-8"?>
            <pedido>
             <cliente>
             <nome>${name}</nome>
             <tipoPessoa>J</tipoPessoa>
             
             <cpf_cnpj>00000000000000</cpf_cnpj>
             <ie>3067663000</ie>
             <numero>393</numero>
             <email>${email}</email>
             </cliente>
             <itens>
             <item>
             <codigo>001</codigo>
             <volumes>
             <volume>
             <servico> A CONTRATAR</servico>
             <codigoRastreamento>000</codigoRastreamento>
             </volume>
             </volumes>
             <descricao>${title}</descricao>
             <un>Pç</un>
             <qtde>1</qtde>
             <vlr_unit>${value}</vlr_unit>
             </item>
             </itens>
             
            </pedido>`

            return xml
    }

}

export default new  CreateXml();