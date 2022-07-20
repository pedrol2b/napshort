import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../middleware/mongodb'
import shortModel from '../../models/short'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.status(422).send({ error: 1, message: 'req_method_not_supported' })
  const { shorturl } = req.query

  const short = await shortModel.findOneAndUpdate({ shorturl }, { $inc: { clicks: 1 } })
  if (!short) return res.status(400).send({ error: 1, message: 'not_found' })
  short.clicks++
  res.status(200).send({ short })
}

export default connectDB(handler)
