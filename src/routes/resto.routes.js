import { Router } from "express";
import { login } from "../controller/auth.controller.js";
import { getUsuario, postUsuario, putUsuario } from "../controller/usuario.controller.js";

const router = Router()

router.get('/usuario', getUsuario)
router.post('/usuario', postUsuario)
router.put('/usuario/:id', putUsuario)
router.post('/login', login);

export default router





