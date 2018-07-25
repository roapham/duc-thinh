const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const gql = require('graphql-tag');

mongoose.connect('mongodb://localhost/test');

const Todo = mongoose.model('Todo', {
  text: String,
  complete: Boolean,
});

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

const typeDefs = gql`
  type Query {
    hello(name: String): String!
    todos: [Todo]
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
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }
  type Mutation {
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
    createTodo(text: String!): Todo
    updateTodo(id: ID!, complete: Boolean): Boolean
    removeTodo(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    todos: () => Todo.find(),
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
    createTodo: async (_, { text }) => {
      const todo = new Todo({ text, complete: false });
      await todo.save();
      return todo;
    },
    updateTodo: async (_, { id, complete }) => {
      await Todo.findByIdAndUpdate(id, { complete });
      return true;
    },
    removeTodo: async (_, { id }) => {
      await Todo.findByIdAndRemove(id);
      return true;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once('open', () => {
  server.start(() => console.log('Server is running on localhost:4000'));
});
