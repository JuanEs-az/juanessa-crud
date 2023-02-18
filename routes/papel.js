
const {Router} = require('express');
const router = Router();
const {getAllPapelitos, postPapelito, updatePapelito, deletePapelito} = require("../controllers/papel");

router.get('/', getAllPapelitos);
router.put('/:id', updatePapelito);
router.delete('/:id',deletePapelito);

router.post('/', postPapelito)
module.exports = router;