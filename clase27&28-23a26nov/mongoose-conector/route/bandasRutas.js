const express = require('express')
const router = express.Router()
const Banda = require('../modelo/bandasModelo')

// AGREGAR
// Lo siguiente responderá con una promesa
router.post('/bandas', function(req, res, next){
    Banda.create(req.body).then(function(banda){
        res.send(banda)
    }).catch(next)
})

// CONSULTAR
// La variable 'router' accede al archivo rutas para saber qué tiene en ese archivo rutas
router.get('/bandas', function(req,res,next){
    Banda.find({activa : false}).then(function(bandas){
        res.send(bandas)
    }).catch(next)
})

// ACTUALIZAR
router.put('/bandas/:id', function(req,res,next){
    Banda.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Banda.findOne({_id : req.params.id}.then(function(banda){
            res.send(banda)
        }))
    }).catch(next)
})

// ELIMINAR
router.delete('/bandas/:id', function(req,res,next){
    Banda.findOneAndRemove({_id : req.params.id}).then(function(banda){
        res.send(banda)
    }).catch(next)
})

// éste es que el estamos llamando desde conexion.js
module.exports = router