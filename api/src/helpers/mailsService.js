const { transporter } = require("../transporter/transporter");


async function mailUsuarioCreado(correo, asunto, texto) {
   
    try {
        await transporter.sendMail({
            from: '"Find me a home" <findmeahome2022@gmail.com>',
            to: `${correo}`,
            subject: `${asunto}`,
            html: `${texto}`
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    mailUsuarioCreado
}