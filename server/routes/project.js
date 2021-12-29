// Importar Router
import { Router } from 'express';

// Importando el controlador de proyectos
import projectController from '@server/controllers/projectController';

// Creando Instancia de un Router
const router = new Router();

// "/projects" "/projects/index"
router.get(['/', '/index'], projectController.index);
// "/projects/add"
// sirve el formulario para agregar proyectos
router.get('/add', projectController.add);

// POST "projects/add"
// procesa el formulario
router.post('/add', projectController.addPost);

export default router;