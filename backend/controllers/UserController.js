import userModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!validator.isEmail(email)) {
            return res.json({ sucess: true, message: "please enter a valid email" })
        }
        const data = await userModel.findOne({ email: email });
        if (data) {
            bcrypt.compare(password, data.password, (err, result) => {
                if (err) {
                    res.status(500).json("An error occurred");
                }
                if (result) {
                    const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET);
                    console.log(token)
                    res.json({ success: true, data: token });
                } else {
                    res.json("Incorrect password");
                }
            });
        } else {
            res.json("No user found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
}

//token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register 
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userExist = await userModel.findOne({ email: email });
        if (userExist) {
            return res.json("exists");
        }
        if (!validator.isEmail(email)) {
            return res.json({ sucess: true, message: "please enter a valid email" })
        }
        const newUser = await userModel.create({ name, email, password: hashedPassword });
        const user = await newUser.save()
        const token = createToken(user._id)
        res.status(201).json({ message: 'User created successfully', data: token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export { loginUser, registerUser }