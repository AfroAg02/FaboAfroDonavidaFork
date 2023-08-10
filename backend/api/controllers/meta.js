const Meta = require('../models/Meta');
const Rol = require('../models/Rol');


exports.post = (req,resp) => {
    //valido que el rol no este vacio
    const {rol,Components} = req.body;
    if(!rol){
       return resp.status(400).json('Rol no valido');
    }
    //Valido la existencia de ese rol
    const rolexist = Rol.exists({name:rol.title});
    if(!rolexist){
       return resp.status(400).json('Este rol no existe');
    }
    let newMeta;
    Meta.findOne({rol:rol})
    .then(meta => {
        if(meta){
           Meta.updateOne({rol:rol},{Componentes: Components});
        }else{
        newMeta = new Meta({
            rol: req.body.rol,
            Components :req.body.Components
        });
        newMeta.save();
        resp.json({
            success:true,
            message:"Fue creado la plantilla",
            meta: newMeta
        });
        }

    })
    .catch(err =>{
        resp.status(400).json("Error en la creacion" + err);
    })

}