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
    const sql =
      "INSERT INTO users(firstName, lastName, email, address) VALUES (?,?,?,?)";
    await createConnectionPool.execute(sql, [
      req.body["firstName"],
      req.body["lastName"],
      req.body["email"],
      req.body["address"],
    ]);
    const [rows] = await createConnectionPool.query("SELECT * FROM users");
    return res.render("homePage", { dataUser: rows });
  } catch (error) {
    console.log(error);
  }
};

export const delUser = (req, res) => {
  try {
    const sql = 'DELETE FROM users WHERE id=?'
    await createConnectionPool.execute(sql, [req.body['userId']])
    const [rows] = await createConnectionPool.query("SELECT * FROM users");
    return res.render("homePage", { dataUser: rows });
  } catch (error) {
    console.log(error);
  }
}
