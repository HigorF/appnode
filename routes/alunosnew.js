var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('alunosnew', { title: 'Novo Aluno', alunos: {} });
})

module.exports = router;