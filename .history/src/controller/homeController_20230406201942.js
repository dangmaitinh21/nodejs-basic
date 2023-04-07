import createConnectionPool from "../configs/configDB";

export const getHomePage = async (req, res) => {
  try {
    const sql = "SELECT * FROM users";
    const [rows] = await createConnectionPool.query(sql);
    return res.render("homePage", { dataUser: rows });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailPage = async (req, res) => {
  try {
    const sql = "SELECT * FROM users WHERE id = ?";
    const [rows] = await createConnectionPool.query(sql, [
      req.params["userId"],
    ]);
    return res.render("detailPage", { dataUser: rows[0] });
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (req, res) => {
  try {
    const sql = "INSERT INTO users VALUES (?,?,?,?)";
    // const [rows] = await createConnectionPool(sql, [req.body])
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
