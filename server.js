const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/biodata", function (req, res) {
  const nama = req.query.nama;
  const tempat_lahir = req.query.tempat_lahir;
  const tanggal_lahir = req.query.tanggal_lahir;
  const alamat = req.query.alamat;

  res.send({
    nama: nama,
    "tempat-lahir": tempat_lahir,
    "tanggal-lahir": tanggal_lahir,
    alamat: alamat,
  });
});

app.post("/biodata", function (req, res) {
  const nama = req.body.nama;
  const tempat_lahir = req.body.tempat_lahir;
  const tanggal_lahir = req.body.tanggal_lahir;
  const alamat = req.body.alamat;

  res.send({
    nama: nama,
    "tempat-lahir": tempat_lahir,
    "tanggal-lahir": tanggal_lahir,
    alamat: alamat,
  });
});

app.listen(port);
console.log("Server started at http://localhost: " + port);
