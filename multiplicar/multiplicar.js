
const { promises } = require('dns');
const fs = require('fs');
const colors = require('colors');

let crearData = (base, limite = 10) => {

    if (!Number(base) || !Number(limite)) {
        reject(`El valor introducido ${base} es un numero`);
        return;
    }
    return new Promise((resolve, reject) => {

        let information = '';
        for (let i = 1; i <= limite; i++) {
            information += `${base}* ${i}= ${base * i}\n`;

        }

        const data = new Uint8Array(Buffer.from(information));
        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else resolve(`tabla-del-${base}-al-${limite}`)

        });

    })
}

let listarTabla = (base, limite = 10) => {
    let information = '';
    for (let i = 1; i <= limite; i++) {

        information += `${base} * ${i}= ${base * i}\n`;

    }

    console.log(`======Tabla del ${base} al ${limite}======`.green);
    console.log(information.red);
    console.log('======================'.green);


}

module.exports = {
    crearData,
    listarTabla
}