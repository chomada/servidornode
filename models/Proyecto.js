const mongoose = require ('mongoose');
const ProyectoSchema = mongoose.Schema({

    nombre: { type: String,
        required: true,
        trim:true
    },
    creador:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    descripcion: { type: String,
        required: true,
        trim:true
    },
    precio: { type: String,
        required: true,
        trim:true
    },
    imagen: { type: String,
        required: true,
        trim:true
    },
    categoria: { type: String,
        required: true,
        trim:true
    },

    creado:{
        type:Date,
        default: Date.now()

    }

});

module.exports = mongoose.model ('Proyecto',ProyectoSchema);