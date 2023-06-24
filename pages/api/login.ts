
import { sessionOptions } from 'lib/session'
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'

export default withIronSessionApiRoute(
    async function loginRoute(req, res) {

        const data = { ...req.session, public: false }
        req.session.user = data
        console.log(req.session)
        await req.session.save();
        res.send({ ok: true });
    },
    sessionOptions
);