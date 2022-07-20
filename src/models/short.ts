import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    shorturl: { type: String, required: true, unique: true, index: { unique: true } },
    clicks: { type: Number, default: 0 },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'short' }
)

const Model = mongoose.models.Short || mongoose.model('Short', Schema)
export default Model
