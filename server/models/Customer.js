import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  status: { type: String, enum: ['active', 'inactive'] },
  role: { type: String, enum: ['user', 'admin'] },
  wechatId: { type: String },
  paypalId: { type: String },
  creditCardIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CreditCard' }],
  addressIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
  orderIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  cartIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductInCart' }],
  avatar: { type: String },
  googleId: { type: String },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
}, { timestamps: true });


const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer;
