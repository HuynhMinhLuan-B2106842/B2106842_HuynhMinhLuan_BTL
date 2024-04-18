const Staff = require("../models/Staff");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerStaff = async (req, res, next) => {
    try {
      const { address, email,  phoneNumber, password , role } = req.body;
      // const data = req.body;
      // const { username, password, email, address, phone, cart } = req.body;
      console.log({ address, email,  phoneNumber, password , role });
      // console.log(data);
     
      const exist = await Staff.findOne({ email });
  
      if (exist) {
        return res.json({
          status: "bad",
          msg: "Username đã tồn tại!",
        });
      }
      const hashedPass = await bcrypt.hash(password, 10);
  
      // Set a default empty cart if not provided
      // const userCart = cart || { products: [] };
  
      const newStaff = new Staff({
        address,
        email,
        phoneNumber,    
        password: hashedPass,
        role
      });
  
      const savedStaff = await newStaff.save();
  
      const token = await jwt.sign({ Staffid: savedStaff._id }, "tokensecret");
  
      res.json({
        status: "ok",
        msg: "Bạn đã đăng ký thành công!",
      });
    } catch (error) {
      console.log(error);
      res.json({ msg: "loi controler" });
    }
  };
  const loginStaff = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.json({
          status: "bad",
          msg: "Không được để trống tên nhân viên hoặc mật khẩu!",
        });
      }
  
      const existStaff = await Staff.findOne({ email: email });
      if (!existStaff) {
        return res.json({
          status: "bad",
          msg: "Tên nhân viên không tồn tại!",
        });
      }
  
      const comparePass = await bcrypt.compare(password, existStaff.password);
      if (!comparePass) {
        return res.json({
          status: "bad",
          msg: "Sai mật khẩu",
        });
      }
  
      const token = await jwt.sign({ userId: existStaff._id }, "tokensecret");
      const decodedToken = await jwt.verify(token, "tokensecret");
      console.log(decodedToken);
  
      res.json({
        status: "ok",
        msg: "Bạn đã đăng nhập thành công!",
        token,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        status: "error",
        msg: "Đã xảy ra lỗi trong quá trình xử lý yêu cầu!",
      });
    }
  };
  

module.exports = { registerStaff , loginStaff};
