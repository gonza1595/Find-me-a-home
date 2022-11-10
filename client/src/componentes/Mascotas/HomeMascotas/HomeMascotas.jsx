import React from "react";
import CardMascotas from "../CardMascotas/CardMascotas";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { traerMascotas } from "../../../redux/actions/index";
import { Link } from "react-router-dom";

export default function HomeMascotas() {
  let mascotasState = useSelector((state) => state.mascotas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerMascotas());
  }, [dispatch]);

  return (
    <div>
      <div>
        {mascotasState?.length > 0 ? (
          mascotasState.map((mascota) => (
            <Link key={mascota.id} to={`/mascotas/${mascota.id}`}>
              <CardMascotas
                imagen={mascota.imagen}
                nombre={mascota.nombre}
                edad={mascota.edad}
                sexo={mascota.sexo}
              />
            </Link>
          ))
        ) : (
          <h2>Colocar Loader</h2>
        )}
      </div>
    </div>
  );
}
