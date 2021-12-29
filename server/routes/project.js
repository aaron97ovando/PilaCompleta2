// Importar Router
import { Router } from 'express';

//  Importar el controlador de proyectos
import projectController from '@server/controllers/projectController';

// Importar el validador
import Validate from '@server/validators/validateFactory';

// Importar esquema de validacion de projectos
import projectValidator from '@server/validators/projectValidator';

// Creando Instancia de Router
const router = new Router();

// GET "/projects" "/projects/index"
router.get(['/', '/index'], projectController.index);

// GET "/projects/add"
// sirve el formulario para agregar proyectos
router.get('/add', projectController.add);

// POST "/projects/add"
// Procesa el formulario
router.post(
  '/add',
  Validate({
    shape: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.addPost,
);

export default router;