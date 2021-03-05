let optiones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprimir en consola la tabla de multiplicar', optiones).command('crear', 'crea tabla de multiplicar', optiones).help()
    .argv;

const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite).then(archivo => console.log('tabla de multiplicar:  \n ' + archivo)).catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('archivo creado :' + archivo)).catch(e => console.log(e));
        break;
    default:
        console.log('comando no conocido');
}