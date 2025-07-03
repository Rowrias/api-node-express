import mongoose from "mongoose"

// mongoose.connect("mongodb+srv://admin:<db_password>@cluster0.buvwgnd.mongodb.net/");

mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;
