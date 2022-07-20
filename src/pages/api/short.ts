import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../middleware/mongodb'
import shortModel from '../../models/short'
import { nanoid } from 'nanoid'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(422).send({ error: 1, message: 'req_method_not_supported' })

  if (!req.body.url) return res.status(400).send({ error: 1, message: 'invalid_url' })
  if (!/http:\/\/|https:\/\//g.test(req.body.url)) return res.status(400).send({ error: 1, message: 'invalid_url' })

  const short = await shortModel.create({ url: req.body.url, shorturl: nanoid(8) })
  res.status(200).send({ short })
}

export default connectDB(handler)
