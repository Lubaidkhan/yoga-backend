require('dotenv').config()
const KJUR = require('jsrsasign')
const { createRouter } = require("../../../routes/createRouter");
const { UserAuthMiddleware } = require('../../../middleware/AuthMiddleware')

const CreateBlog = async (req, res) => {
const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2

  const oHeader = { alg: 'HS256', typ: 'JWT' }

  const oPayload = {
    sdkKey: "dm85ooCsSFGAjm5ovqUkA",
    mn: req.body.meetingNumber,
    role: req.body.role,
    iat: iat,
    exp: exp,
    appKey: "dm85ooCsSFGAjm5ovqUkA",
    tokenExp: iat + 60 * 60 * 2
  }

  const sHeader = JSON.stringify(oHeader)
  const sPayload = JSON.stringify(oPayload)
  const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload,"U0eRnR1HJoRGYRhr5nhO6MrbRVdZOyF9")

  res.json({
    signature: signature
  })
}

createRouter.post("/meeting-sign", UserAuthMiddleware(), CreateBlog);