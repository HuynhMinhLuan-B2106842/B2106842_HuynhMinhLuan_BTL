const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, birthDay, gender, address, email, phoneNumber, password } = req.body;

    if (!firstName || !lastName || !birthDay || !gender || !address || !email || !phoneNumber || !password) {
      return res.json({
        status: "bad",
        msg: "Không được để trống thông tin!",
      });
    }

    if (password.trim().length < 5) {
      return res.json({
        status: "bad",
        msg: "Password phải chứa ít nhất 5 kí tự!",
      });
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.json({
        status: "bad",
        msg: "Email đã tồn tại!",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      birthDay,
      gender,
      address,
      email,
      phoneNumber,
      password: hashedPass,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, "tokensecret");

    res.json({
      status: "ok",
      msg: "Bạn đã đăng ký thành công!",
      user: savedUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Lỗi trong quá trình đăng ký người dùng" });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        status: "bad",
        msg: "Không được để trống email hoặc mật khẩu!",
      });
    }

    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.json({
        status: "bad",
        msg: "Email không tồn tại!",
      });
    }

    const comparePass = await bcrypt.compare(password, existUser.password);

    if (!comparePass) {
      return res.json({
        status: "bad",
        msg: "Sai mật khẩu",
      });
    }

    const token = jwt.sign({ userId: existUser._id }, "tokensecret");

    res.json({
      status: "ok",
      msg: "Bạn đã đăng nhập thành công!",
      user: existUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Lỗi trong quá trình đăng nhập" });
  }
};

const logout = async (req, res, next) => {
  try {
    res.json({
      status: "ok",
      msg: "Bạn đã đăng xuất thành công!",
    });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Lỗi trong quá trình đăng xuất" });
  }
};

module.exports = { login, register, logout };
