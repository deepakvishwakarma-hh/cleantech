const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
export default async function handler(req: NextApiRequest, res: any) {
  if (req.method === "POST") {
    const { email } = await req.body;

    try {
      const request = await mailjet.post("contact").request({
        Email: email,
        IsExcludedFromCampaigns: true,
        Name: "Unknown",
      });

      // const resutl = await request.json();
      return res.json({ message: "contact added" });
    } catch (err) {
      return NextResponse.error();
    }
  } else {
    return res.json({ message: "Invalid Request" });
  }
}
