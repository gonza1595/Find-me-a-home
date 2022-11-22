const {Router} = require('express');
const {
	traeTodosComentarios,
	agregarComentario,
	eliminarComentario,
} = require('./controllers');
const router = Router();

// si se pasa el id de un usuario, retorna todos los comentarios de ese usuario
// si se pasa el id de un producto, retorna todos los comentarios de ese producto
router.get('', async (req, res) => {
	const {userId, productId} = req.query;
	try {
		const comentarios = await traeTodosComentarios(userId, productId);
		res.status(200).json(comentarios);
	} catch (error) {
		res.status(404).json({error: error.message});
	}
});

// agrega un comentario al producto por ID
router.post('', async (req, res) => {
	const {text, userId, productId} = req.body;
	try {
		const comentario = await agregarComentario(userId, productId, text);
		res.status(200).json(comentario);
	} catch (error) {
		res.status(404).json({error: error.message});
	}
});

// eliminar comentario por ID
router.delete('', async (req, res) => {
	const {comentarioId} = req.query;
	try {
		const comentario = await eliminarComentario(comentarioId);
		res.status(200).json(comentario);
	} catch (error) {
		res.status(404).json({error: error.message});
	}
});

module.exports = router;
