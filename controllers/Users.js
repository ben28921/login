import Users from "../models/UserModel.js";

export const Login = async (req, res) => {
  // const user = await Users.findOne({
  //   where: {
  //     name: req.body.name,
  // })
  // try
  // {
  const user = await Users.findAll({
    where: {
      name: req.body.name,
      // name: "ben",
    },
  });
  // const user = await Users.findAll();
  if (req.body.password === user[0].password) {
    res.json({ msg: "match" });
  } else {
    res.json({ msg: "notMatch" });
  }
  // res.json({ msg: "user find" });
  console.log(user);
  // } catch (error) {
  //   res.status(404).json({ msg: "Email not found" });
  // }
  // console.log(req.body);
};
