import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(async function userInfoRoute(req, res) {
  const { field, value } = req.body;
  // Initialize req.session.user if it doesn't exist yet
  if (!req.session.user) {
    req.session.user = {};
  }

  req.session.user[field] = value;
  console.log(req.session);
  await req.session.save();
  res.send({ ok: true });
}, sessionOptions);
