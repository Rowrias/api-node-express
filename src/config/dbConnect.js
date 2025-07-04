/* eslint-disable no-undef */
import mongoose from "mongoose"

// mongoose.connect("mongodb+srv://admin:<db_password>@cluster0.buvwgnd.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;
