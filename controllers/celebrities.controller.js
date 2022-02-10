const Celebrity = require('../models/Celebrity.model')

exports.getCelebrities = async (req, res) => {
    const allCelebrities = await Celebrity.find({});

    console.log(allCelebrities);

    return res.render("celebrities/list", {
		celebrities: allCelebrities
	})
}
exports.create = (req, res) => {
    return res.render('celebrities/new-celebrity')
}
exports.createForm = async (req, res) => {
    const { name, occupation, catchPhrase } = req.body;

    if (!name || !occupation || !catchPhrase) {
        errorMg: 'Hubo un error en el formulario. Llena los espacios vacios'
    }

    try {
        const newCelebrity = await Celebrity.create({
            name,
            occupation,
            catchPhrase
        });

        console.log(newCelebrity);
        res.redirect('/celebrities')
    } catch (error) {
        console.log(error);
        res.render('celebrities/new-celebrity', {
            errorMsg: 'Error interno del servidor. Intente más tarde'
        });
    }
}