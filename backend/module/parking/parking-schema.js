const mongoose = require('mongoose')
const moment = require('moment')

const parkingSchema = mongoose.Schema({
  vehicle: {
    type: String,
    require: true
  },
  vehiclePlate: {
    type: String,
    require: true
  },
  parkingStartAt: {
    type: Date,
    require: true
  },
  parkingEndAt: Date,
  pricePerHour: {
    type: Number,
    require: true
  }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

parkingSchema.index({ vehicle: 1, vehiclePlate: 1, parkingStartAt: 1 })

parkingSchema.virtual('parkingCost').get(function () {
  const costPerMinute = this.pricePerHour / 60
  const _parkingEndAt = this.parkingEndAt ? moment(this.parkingEndAt) : moment()
  const _parkingStartAt = moment(this.parkingStartAt)
  const diffInMinutes = _parkingEndAt.diff(_parkingStartAt, 'minutes')
  if (diffInMinutes > 0)
  return (costPerMinute * diffInMinutes).toFixed(2)
  else
    return (0.00).toFixed(2)
})

module.exports = mongoose.model('parking', parkingSchema)