const Parking = require('./schema')

const all = async (_, res) => {
  return res.json(
    await Parking.find()
  )
}

const findById = async (req, res) => {
  const { id } = req.params
  const model = await Parking.findById(id)
  if (!model)
    return res.status(404).send('Parking not found')
  else
    return res.json(model)
}

const save = async (req, res) => {
  const { id } = req.params
  const { body } = req
  if (id) {
    await Parking.updateOne({ _id: id }, { $set: body })
    const updated = await Parking.findById(id)
    return res.status(202).send(updated)
  } else {
    const pk = new Parking(body)
    await pk.save()
    return res.status(201).send(pk)
  }
}

const remove = async (req, res) => {
  const { id } = req.params
  return res.status(204).send(
    await Parking.deleteOne({ _id: id })
  )
}

module.exports = {
  all,
  save,
  findById,
  remove
}