const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por haccer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea indicada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}