const Component = require('../models/Component');


exports.post = (req,res) =>{
    const{etiqueta,name,type} = req.body;
    const valor = requ.body.value;
    if(!etiqueta || !name || !type){
        return res.status(400).json("Parametros incompletos");
    }
    Component.finOne({etiqueta:etiqueta})
    .then(component => {
        if(component){
            return res.status(400).json("Componente ya existente");
        }else{
            component  = new Component({
                etiqueta:etiqueta,
                name:name,
                type:type,
                value:valor
            });
            componet.save();
            res.json({
                success:true,
                message:"Componente creado excitosament",
                component:component
                });
        }
    })
    .catch(err =>{
        res.json("Ha ocurrido un error " + err);
    });
};

///ojo la validacion es por la etiqueta pq no tiene sentido que sea la misma