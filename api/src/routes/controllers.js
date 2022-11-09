const { Pet } = require("../db");
const db = require("../db.js");
const mascotasJson = require("../../../mascotas.json");

const setMascotasJson = async () => {
  try {
    const pets = mascotasJson.mascotas.map((pet) => {
      return {
        nombre: pet.nombre,
        descripcion: pet.descripcion,
        edad: pet.edad,
        imagen: pet.imagen,
        tamaño: pet.tamaño,
        raza: pet.raza,
        sexo: pet.sexo,
        especie: pet.especie,
      };
    });

    const mascotas = Pet.bulkCreate(pets);
    return mascotas;
  } catch (error) {
    console.log(error);
  }
};

const getMascotas = async () => {
  try {
    const pets = await Pet.findAll();

    if (pets.length === 0) {
      return setMascotasJson();
    } else {
      return pets;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMascotas,
};
