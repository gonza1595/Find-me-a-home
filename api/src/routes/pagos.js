const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");

const stripe = new Stripe("sk_test_51M4ABWC8eMk9oyZJpjcP24wNeIfdssN4zFTJNr9sMI0vVrYXjQ65b0UxWCDUSHsDyTOwunDjkapHajfBFRgqU7VU00ExunevT4");

router.post("/" , async (req, res) => {
    const {amount, id} = req.body;
    console.log(id);
    try{
      await stripe.paymentIntents.create({
        amount,
        currency: "ARS",
        description: "compra de productos",
        payment_method: id,
        confirm: true
      });
      res.status(200).send("pago exitoso");
    }catch(error){
        console.log(error);
        res.status(400).send({error: error.message});
    }
});

module.exports= router;