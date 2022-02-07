"use strict";
// // import express, { Application, Request, Response } from "express";
// import express = require("express");
// import { getPostgresClient } from "./postgres";
// import sjcl = require("sjcl");
exports.__esModule = true;
// const cors = require("cors");
// let insertOrder = (db, values: any) => {
//   return db
//     .query(
//       `INSERT INTO orders (id, first_name, last_name, quantity, city, province, country)
//       VALUES ($1, $2, $3, $4, $5, $6, $7)
//       RETURNING *`,
//       values
//     )
//     .then((res) => res.rows[0])
//     .catch((err) => console.log("BREAKS HERE", err));
// };
// getPostgresClient()
//   .then((pgClient) => {
//     console.log("connected to db!");
//     const app = express();
//     app.use(
//       cors({
//         origin: "http://localhost:3000",
//       })
//     );
//     app.use(express.json());
//     app.use(express.urlencoded());
//     app.get("/", (req, res) => {
//       res.send("HELLO");
//     });
//     // app.get("/order/:id", async (req, res) => {
//     //   console.log("REQ", req.params);
//     //   const id = req.params.id;
//     //   const data = await pgClient.query(
//     //     `SELECT * FROM public.photographer WHERE id = ${id};`
//     //   );
//     //   res.send(data.rows);
//     // });
//     app.post("/order/:id", async (req, res) => {
//       //decrypting incoming data
//       let password: string = "encryptData71&$";
//       var decryptedText = sjcl.decrypt(password, req.body.name);
//       console.log("decrypteddd", decryptedText);
//       console.log("REQ", req.body);
//       const name: unknown = decryptedText.split(" ");
//       const first_name: string = name[0];
//       const last_name: string = name[1];
//       const { id, quantity, city, province, country } = req.body;
//       const values = [
//         id,
//         first_name,
//         last_name,
//         quantity,
//         city,
//         province,
//         country,
//       ];
//       const command = `INSERT INTO purchase_orders (order_id, first_name, last_name, quantity, city, province, country)
//       VALUES (75, '13', 'b' , '5', 'mtl', 'qc', 'canada')
//       RETURNING *;`;
//       await pgClient.query(command, async (err: any, result) => {
//         err
//           ? res.json({ error: err.detail })
//           : res.json({ message: "User created!" });
//       });
//       res.send(id);
//     });
//     app.listen(5002, () => console.log("Server running"));
//   })
//   .catch((err) => {
//     console.error("Error connecting to postgres: ", err);
//   });
var express = require("express");
var api = require("./postgres");
var app = express();
var port = 5002;
var cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.json());
// url - http://localhost:10091/
app.get("/", api.index);
// // url - http://localhost:10091/health
// app.get('/health', api.health);
// // url - http://localhost:10091/users
// app.get('/users', api.getUsers);
// // url - http://localhost:10091/users/2
// app.get('/users/:id', api.getUserById);
// url - http://localhost:10091/users
// sample request body
/*
  {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@gupshup.com",
      "gender": "F",
      "phone": "860-861-4604"
  }
  */
app.post("/order/:id", api.save);
// url - http://localhost:10091/users/10
// app.delete('/users/:id', api.deleteUser)
// url - http://localhost:10091/users/10
// sample request body
/*
  {
      "firstName": "Radhe Shyam",
      "lastName": "Tiwari",
      "email": "radhe-shyam.tiwari@gupshup.com",
      "gender": "M",
      "phone": "727-213-8139"
  }
  */
// app.put('/users/:id', api.updateUser);
app.listen(port, function () {
    console.log("Application listening on port ".concat(port));
});
