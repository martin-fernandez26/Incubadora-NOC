const profesorSevice = require('../services/profesorService');

async function createProfesor(req, res) {
  try {
    const nuevoProfesor = req.body;

    const profesorCreado = await profesorSevice.crearProfesor(nuevoProfesor);
    return res.status(201).json(profesorCreado);
  } catch (error) {
    console.error('Error al crear profesor: ', error);
    return res.status(400).json({ mensaje: 'Error al crear profesor' });
  }
}
async function getAllProfesors(req, res) {
  const profesors = await profesorSevice.getAll();
  res.status(200).send(profesors);
}

async function getProfesorById(req, res, next) {
  const { id } = req.params;
  try {
    const profesor = await profesorSevice.getById(id);
    if (profesor != null) {
      return res.status(200).send(profesor);  
    } else {
      res.status(404).json({ mensaje: 'Error al buscar profesor' })
    }
    
  } catch (error) {
    next(error)
  
  }
}
module.exports = { createProfesor, getAllProfesors, getProfesorById};
