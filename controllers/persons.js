const persons = require('../data/persons.json');

const getPersons = (req, res) => res.json({ success: true, data: persons });

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ success: false, msg: 'Please provide your name' });
  res.status(201).json({ success: true, person: name });
};

const createPersonWithPostman = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ success: false, msg: 'Please provide your name' });
  res.status(201).json({ success: true, data: [...persons, { id: persons.length + 1, name }] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = persons.find((person) => person.id === parseInt(id));

  if (!person) return res.status(404).json({ success: false, msg: `No person with id ${id}` });

  const modifiedPersons = persons.map((person) => {
    if (person.id === parseInt(id)) return { ...person, name };
    return person;
  });

  res.status(200).json({ success: true, data: modifiedPersons });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = persons.find((person) => person.id === parseInt(id));
  if (!person) return res.status(404).json({ success: false, msg: `No person with id ${id}` });

  const modifiedPersons = persons.filter((person) => person.id !== parseInt(id));
  res.status(200).json({ success: true, data: modifiedPersons });
};

module.exports = { getPersons, createPerson, createPersonWithPostman, updatePerson, deletePerson };
