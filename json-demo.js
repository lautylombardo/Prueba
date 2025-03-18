let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
      "Javascript",
      "Node.js"
    ],
    "esPubblico": true
};
//Obejto -> Cadena de caracteres
//Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);

// cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
//const curso = require('./curso.json');
//console.log(curso);