const gql = require('graphql-tag');
const Lenh = require('./lenh.model');

const lenhTypeDefs = gql`
  extend type Query {
    lenhs: [Lenh]
  }
  input ChuyenInput {
    stt: Int,
    noiDi: String,
    noiDen: String,
    khachHang: String,
    hangHoa: String,
    soKien: Float,
    khoiLuong: Float,
    phiVanChuyen: Float,
    phiBocXep: Float,
    phiKhac: Float,
    tongCong: Float
  }
  type Chuyen {
    stt: Int,
    noiDi: String,
    noiDen: String,
    khachHang: String,
    hangHoa: String,
    soKien: Float,
    khoiLuong: Float,
    phiVanChuyen: Float,
    phiBocXep: Float,
    phiKhac: Float,
    tongCong: Float
  }
  type Lenh{
    id: ID!
    chiPhi: Float
    taiXes: [String]
    keToan: String
    ngayNhap: String
    soLenh: String
    soXe: String
    chuyens: [Chuyen]
  }

  extend type Mutation {
    createLenh(
      chiPhi: Float,
      taiXes:[String],
      keToan: String,
      ngayNhap: String,
      soLenh: String,
      soXe: String,
      chuyens: [ChuyenInput]): Lenh
    updateLenh(
      id: ID!,
      chiPhi: Float,
      taiXes: [String],
      keToan: String,
      ngayNhap: String,
      soLenh: String,
      soXe: String,
      chuyens: [ChuyenInput]): Lenh
    deleteLenh(id: ID!): Boolean
  }
`;

const lenhResolvers = {
  Query: {
    lenhs: () => Lenh.find(),
  },
  Mutation: {
    createLenh: async (_, {
      chiPhi, taiXes, keToan, ngayNhap, soLenh, soXe, chuyens,
    }) => {
      const lenh = new Lenh({
        chiPhi, taiXes, keToan, ngayNhap, soLenh, soXe, chuyens,
      });
      await lenh.save();
      return lenh;
    },
    updateLenh: async (_, {
      id, chiPhi, taiXes, keToan, ngayNhap, soLenh, soXe, chuyens,
    }) => {
      await Lenh.findByIdAndUpdate(id, {
        chiPhi, taiXes, keToan, ngayNhap, soLenh, soXe, chuyens,
      });
      return Lenh.findById(id);
    },
    deleteLenh: async (_, { id }) => {
      await Lenh.findByIdAndRemove(id);
      return true;
    },
  },
};

module.exports = { lenhTypeDefs, lenhResolvers };
