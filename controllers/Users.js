import Users from "../models/UserModel.js";

export const Login = async (req, res) => {
  // const user = await Users.findOne({
  //   where: {
  //     name: req.body.name,
  // })
  try {
    // const user = await Users.findOne({
    //   where: {
    //     // name: req.body.name,
    //     name: "ben",
    //   },
    // });

    const user = await Users.findAll();
    res.json({ msg: "user find" });
    console.log(user);
  } catch (error) {
    res.status(404).json({ msg: "Email not found" });
  }
  // console.log(req.body);
};
