import createConnectionPool from "../configs/configDB";

export const getHomePage = async (req, res) => {
  const sql = "SELECT * FROM users";
  const [rows, fields] = await createConnectionPool.query(sql);
  return res.render("homePage", { dataUser: rows });
};
