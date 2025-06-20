const express = require("express");
const router = express.Router();
const emissionController = require("../controllers/emissionControllers");

// Menyimpan data emisi baru
router.post("/add", emissionController.addEmission);

// Mengambil semua data emisi
router.get("/all", emissionController.getAllEmissions);

// Mengambil data emisi berdasarkan scope (scope1, scope2, scope3)
router.get("/scope/:scopeId", emissionController.getEmissionsByScope);

// Menghapus data emisi berdasarkan ID
router.delete("/delete/:id", emissionController.deleteEmission);

// (Opsional) Update data emisi berdasarkan ID
// router.put("/update/:id", emissionController.updateEmission);
