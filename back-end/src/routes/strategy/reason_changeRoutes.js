const express = require('express');
const reason_changeRouter = express.Router();
const {updateSentence, postTable, deleteTable} = require('../../controllers/strategy_controllers/reason_controllers');

//ESTRATEGIA
// Ruta GET => para traer toda la informacion general (resumen)
// Ruta PUT /reason_change => se postea la vision de innovacion de la empresa // modificable.

reason_changeRouter.put('/reason_change', (req, res) => {
    try {
        const { sentence, autor } = req.body;

        if (!sentence || !autor) throw Error('Debes llenar todos los campos');
        const enterprice_sentence = updateSentence(sentence, autor);
        if (enterprice_sentence.error) throw Error (enterprice_sentence.error);
        return res.status(200).json(enterprice_sentence);

    } catch (error) {
        return res.status(404).send(error.message);
        
    }
})

reason_changeRouter.post('/reason_change', (req, res) => {
    try {
        const {position, pressure, why } = req.query;
        if (!why) throw Error('Debes llenar este campo');
        const table = postTable(position, pressure, why);
        if (table.error) throw Error (table.error);
        return res.status(200).json(table);

    } catch (error) {
        return res.status(404).send(error.message);
        
    }
})

reason_changeRouter.delete('/reason_change', (req, res) => {
   try {
       const {position} = req.query;
       const table = deleteTable(position);
       return res.status(200).json(table);
    } catch (error) {
        return res.status(404).send(error.message);
   } 

})

module.exports = reason_changeRouter;