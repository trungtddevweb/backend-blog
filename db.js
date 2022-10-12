import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Trung02032001",
  database: "blog",
});
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Trung02032001';

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database !");
});
