const fs = require('fs');
const colors = require('colors');

let listartabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} introducido no es un número`);
            return;
        }

        let data = '';
        data += `Listar multiplicar \n`.green;
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}  = ${base*i} \n`;
        }
        resolve(data);
    })


}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} introducido no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}  = ${base*i} \n`;
        }
        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla_${base}.txt`.green);
        })
    })
}

module.exports = {
    crearArchivo,
    listartabla
}