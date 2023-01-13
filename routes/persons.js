const express = require('express');
const router = express.Router();

const { getPersons, createPerson, createPersonWithPostman, updatePerson, deletePerson } = require('../controllers/persons');

// router.get('/', getPersons);
// router.post('/', createPerson);
// router.post('/postman', createPersonWithPostman);
// router.put('/:id', updatePerson);
// router.delete('/:id/', deletePerson);

router.route('/').get(getPersons).post(createPerson);
router.route('/postman').post(createPersonWithPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
