module.exports = app => {
    const pendaftarans = require("../controllers/pendaftaran.controller.js");
  
    var router = require("express").Router();
  
    // Create a new pendaftarans
    router.post("/", pendaftarans.create);
  
    // Retrieve all Pendaftaran
    router.get("/", pendaftarans.findAll);
  
    // Retrieve all published pendaftarans
    router.get("/published", pendaftarans.findAllPublished);
  
    // Retrieve a single Pendaftaran with id
    router.get("/:id", pendaftarans.findOne);
  
    // Update a Pendaftaran with id
    router.put("/:id", pendaftarans.update);
  
    // Delete a Pendaftaran with id
    router.delete("/:id", pendaftarans.delete);
  
    // Delete all Pendaftarans
    router.delete("/", pendaftarans.deleteAll);
  
    app.use('/api/pendaftarans', router);
  };