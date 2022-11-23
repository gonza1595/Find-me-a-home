const {Router} = require('express');
const {
	agregarComentario,
	eliminarComentario,
	traeComentariosProducto,
	traeTodosLosComentarios,
} = require('./controllers');
const router = Router();

// agrega un comentario al producto por ID (CREO QUE ANDA BIEN)
router.post('', async (req, res) => {
	const {texto, userId, productId} = req.body;
	try {
		const comentario = await agregarComentario(userId, productId, texto);
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

//trae todos los comentarios
router.get('', async (req, res) => {
	try {
		const comentarios = await traeTodosLosComentarios();
		res.status(200).json(comentarios);
	} catch (error) {
		res.status(404).json({error: error.message});
	}
});

// trae comentarios de un producto por ID (ANDA BIEN)
router.get('/:productId', async (req, res) => {
	const {productId} = req.params;
	try {
		const comentarios = await traeComentariosProducto(productId);
		res.status(200).json(comentarios);
	} catch (error) {
		res.status(404).json({error: error.message});
	}
});

module.exports = router;
