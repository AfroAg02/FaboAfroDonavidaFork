const Meta = require("../models/Meta");
const Rol = require("../models/Rol");

exports.post = (req, resp) => {
  //valido que el rol no este vacio
  const { rol, componentes } = req.body;
  if (!rol) {
    return resp.status(400).json("Rol no valido");
  }
  //Valido la existencia de ese rol
  Rol.findOne({ rol: rol })
    .then(rol => {
      if (!rol) {
        throw new Error("Rol no existe");
      } else {
        meta = new Meta({
          rol: rol_id,
          componentes: componentes,
        });
        return meta.save();
      }
    })
    .then(meta => {
      resp.json({
        success: true,
        message: "Fue creado la plantilla",
        meta: meta,
      });
    })
    .catch(err => {
      resp.status(400).json("Error en la creacion" + err);
    });
};
