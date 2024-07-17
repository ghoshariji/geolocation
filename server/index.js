const express = require("express");
const app = express();
const baseModal = require("./model/baseModal");
const mongoose = require("mongoose");
const cors = require("cors")
app.use(cors())
const dataBaseUri = "mongodb+srv://arijitghosh1203:arijit12@cluster0.vmtbkm3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    console.log(req.body);
    console.log("Come");
    const data = new baseModal(req.body);
    await data.save();
    const transPort = nodeMailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "arijitghosh1203@gmail.com",
        pass: "hryc yasr hlft mjsi",
      },
    });
    const main = async () => {
      const info = transPort.sendMail({
        from: {
          name: "Arijit-DEV",
          address: "arijitghosh1203@gmail.com",
        },
        to: "arijit1087.be22@chitkarauniversity.edu.in",
        subject: `New Contact Fill Up - `,
        text: `Lattitude ${req.body.latitude} longitude ${longitude}`,
      });
    };
    main().then(() => {
      return res.status(201).send({
        message: "Uploaded Successfully",
        success: true,
      });
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
