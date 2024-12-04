import { Usuario } from "../models/Usuario.js"

export const getUsuario = async(req, res) => {
    const data = await Usuario.findAll();
    res.json(data)
}

export const postUsuario = async(req, res) => {
    const {
        nombre, 
        apellido,
        direccion,
        telefono,
        email,
        clave,
        clave2 } = req.body
    const newResult = await Usuario.create({
        nombre,
        apellido,
        direccion,
        telefono,
        email,
        clave,
        clave2
    })
    res.json(newResult)
}

export const putUsuario = async (req, res) => {
    const { id } = req.params; // Obtén el ID del usuario desde los parámetros de la solicitud
    const { nombre, apellido } = req.body; // Obtén los datos que se actualizarán desde el cuerpo de la solicitud

    try {
        // Encuentra el usuario por ID
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            // Si no se encuentra el usuario, responde con un error 404
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualiza los datos del usuario
        await usuario.update({
            nombre,
            apellido,
        });

        // Responde con el usuario actualizado
        res.json(usuario);
    } catch (error) {
        // Maneja errores
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
