import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment'
import credentials from '../../credentials.json';
const doc = new GoogleSpreadsheet('1HFQG-YKKJEzQAUe89lhRS0Xd9qTK_pxqIi2I05HNhgs');
const generateCupom = () => {
    const code = parseInt(moment().format('YYYYMMDDHHmmssSSS')).toString(16).toUpperCase();
    return code.substring(0, 4) + '-' + code.substring(4, 8) + '-' + code.substring(8, 12);
}

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[1];
        const data = JSON.parse(req.body);
       
        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A3:B3');

        const mostrarPromocao = sheetConfig.getCell(2, 0).value;
        const tetxoPromocao = sheetConfig.getCell(2, 1).value;
        let cupom ='';
        let promo = '';
        
        if(mostrarPromocao === 'VERDADEIRO'){
            cupom = generateCupom();
            promo = tetxoPromocao;
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: cupom,
            Promo: promo,
            'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss a'),
            Nota: 5
        });
        res.end(req.body);
    } catch (err) {
        console.log(err);
    }
}