const express = require("express");
const app = express();
const baseModal = require("./model/baseModal");
const mongoose = require("mongoose");
const dataBaseUri = "mongodb://localhost:27017";
mongoose
  .connect(dataBaseUri)
  .then(() => {
    console.log("Database conn");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

app.post("/data", async (req, res) => {
  try {
    console.log(req.body)
    const data = new baseModal(req.body);
    await data.save();
    return res.status(201).send({
      message: "Data send Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(201).send({
      message: "An error occured",
      success: false,
    });
  }
});
app.listen(5000, () => {
  console.log("Sevrer start");
});
