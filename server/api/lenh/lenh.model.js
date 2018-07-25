const mongoose = require('mongoose');

const Lenh = mongoose.model('Lenh', {
  chiPhi: Number,
  taiXes: [String],
  keToan: String,
  ngayNhap: { type: Date, default: Date.now },
  soLenh: String,
  soXe: String,
  chuyens: [{
    stt: Number,
    noiDi: String,
    noiDen: String,
    khachHang: String,
    hangHoa: String,
    soKien: Number,
    khoiLuong: Number,
    phiVanChuyen: Number,
    phiBocXep: Number,
    phiKhac: Number,
    tongCong: Number,
  }],
});

module.exports = Lenh;
