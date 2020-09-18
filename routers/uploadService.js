const express = require("express");
const handler = require("./uploadHandler");
const logger = require("../config/loggerUtil");

const router = express.Router();

router.post("/upload", async (req, res) => {
  logger.info("**upload**");
  let File = req.files.file;
  try {
    let response;
    response = await handler.processFile(File);
    //logger.info("Respuesta:", JSON.stringify(response));
    return res.status(200).send(response);
  } catch (e) {
    logger.error("upload Error:" + e.message);
    return res.status(500).send({ status: false, message: e.message });
  }
});


module.exports = router;
