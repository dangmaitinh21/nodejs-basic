import createConnectionPool from "../configs/configDB";

export const getHomePage = async (req, res) => {
  const sql = "SELECT * FROM users";
  const [rows] = await createConnectionPool.query(sql);
  return res.render("homePage", { dataUser: rows });
};

export const getDetailPage = async (req, res) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  const [rows] = await createConnectionPool.query(sql, [req.params["userId"]]);
  return res.render("detailPage", { dataUser: rows[0] });
};
