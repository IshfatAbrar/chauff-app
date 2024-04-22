import { Document, Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
  rider: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  chauffeur: {
    type: Schema.Types.ObjectId,
    ref: "Driver",
  },
  type: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  dropoffLocation: {
    type: String,
    required: true,
  },
  detailedLocation: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  selectedCar: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "ordered",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = models.Booking || model("Booking", BookingSchema);

export default Booking;
