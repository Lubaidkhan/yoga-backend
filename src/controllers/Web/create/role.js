const Role = require("../../../models/role");
const { success, error } = require("../../../helpers/response");
const { createRouter } = require("../../../routes/createRouter");
const { UserAuthMiddleware } = require('../../../middleware/AuthMiddleware')

const Handler = async (req, res) => {
  const {
    name,
    userId,
    isActive
  } = req.body;
  try {
    const role = new Role({
      name,
      userId,
      user: userId,
      isActive:false,
    });

    await role.save();

    return res.send(success("Role Created Successfully", { role }));
  } catch (err) {
    return res.send(error("Fail to create Role"))
  }

};
createRouter.post("/role", UserAuthMiddleware(), Handler);
