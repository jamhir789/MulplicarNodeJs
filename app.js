
const { crearData, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearData(argv.base, argv.limite)
            .then(res => console.log(colors.green('archivo creado:'),colors.red(res)))
            .catch(e => console.log(e));

        break;
    default:
        break;
}


