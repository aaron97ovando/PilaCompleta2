// Action Methods
// "/projects"
const index = (req, res) => {
  res.send('Respondiendo a "/Projects/index"');
};

//  GET "/projects/add"
// Enviar el formulario para crear nuevas ideas
// de Proyectos
const add = (req, res) => {
  res.send('Respondiendo a "/projects/addView"');
};

// POST "/projects/add"
// Procesa la informacion del formulario
// req, res es el controlador de la funcion flecha
const addPost = (req, res) => {
  // Rescatando la informacion del formulario
  // Apartados del formulario
  const { name, description } = req.body;
  res.json({
    name,
    description,
  });
};

// Pendiente por programar
export default {
  add,
  addPost,
  index,
};