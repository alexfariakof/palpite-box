import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';
const doc = new GoogleSpreadsheet('1HFQG-YKKJEzQAUe89lhRS0Xd9qTK_pxqIi2I05HNhgs');

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[2];
        await sheet.loadCells('A2:B2');
        const mensagemPromocao = sheet.getCell(1, 1);

        await sheet.loadCells('A3:B3');
        const isActivePromocao = sheet.getCell(2, 0).value;
        const textPromocao = sheet.getCell(2, 1).value;

        res.end(JSON.stringify({
            showCupom: isActivePromocao === 'VERDADEIRO',
            messageCupom: textPromocao
        }))
    }
    catch (err){
        res.end(JSON.stringify({
            showCupom: false,
            messageCupom: ''
        }))
        
     }
}