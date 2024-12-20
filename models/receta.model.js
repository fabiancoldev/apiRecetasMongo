const mongoose = require("mongoose");

const recetaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: String,
    required: true,
  },
  instucciones: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: "Activa",
  },
  categoria: { 
    type: String, 
    default: "Plato fuerte" 
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

const Receta = mongoose.model("Receta", recetaSchema);

module.exports = Receta;