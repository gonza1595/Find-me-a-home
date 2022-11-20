const { Pet, User } = require("../db");
const db = require("../db.js");
const mascotasJson = require("../../mascotas.json");
const { userInfo } = require("os");

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

const filtroProductos = (array, filtro, orden, tipo) => {
  if (tipo) {
    const tipoProducto = array.filter((p) => p.tipo === tipo);

    if (filtro === "precio") {
      if (orden === "ASC") {
        tipoProducto.sort((a, b) => a.precio - b.precio);
        return tipoProducto;
      } else if (orden === "DESC") {
        tipoProducto.sort((a, b) => b.precio - a.precio);
        return tipoProducto;
      }
    } else if (filtro === "calificacion") {
      if (orden === "ASC") {
        tipoProducto.sort((a, b) => a.calificacion - b.calificacion);
        return tipoProducto;
      } else if (orden === "DESC") {
        tipoProducto.sort((a, b) => b.calificacion - a.calificacion);
        return tipoProducto;
      }
    } else {
      return tipoProducto;
    }
  } else {
    if (filtro === "precio") {
      if (orden === "ASC") {
        array.sort((a, b) => a.precio - b.precio);
        return array;
      } else if (orden === "DESC") {
        array.sort((a, b) => b.precio - a.precio);
        return array;
      }
    } else if (filtro === "calificacion") {
      if (orden === "ASC") {
        array.sort((a, b) => a.calificacion - b.calificacion);
        return array;
      } else if (orden === "DESC") {
        array.sort((a, b) => b.calificacion - a.calificacion);
        return array;
      }
    } else {
      return array;
    }
  }
};

// elimina un usuario por id

const borrarUsuario = async (id) => {
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMascotas,
  filtroProductos,
  borrarUsuario,
};
