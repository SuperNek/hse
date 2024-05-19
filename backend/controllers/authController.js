import { User } from "../models/user_model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const {login, password, confirmPassword, role} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"User already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            login,
            password: hashedPassword,
        })

        await newUser.save();

        if(newUser){
            generateToken(newUser.user_id, res);
            await newUser.save();
            res.status(201).json({
                user_id: newUser.user_id,
                login: newUser.login,
            });
        } else{
            res.status(400).json({error: "Invalid user data"});
        }
    } catch (error) {
        res.status(500).json({error: "Server error"});
        console.log("Error in register controller",error)
    }
}

export const login = async (req, res) => {
    try{
        const {login, password} = req.body;
        const user = await User.findOne({login});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateToken(user.user_id, res);

        res.status(200).json({
            user_id: user.user_id,
            login: user.login,
            is_admin: user.is_admin
        })
    } catch (error){
        res.status(500).json({error: "Server error"});
        console.log("Error in login controller",error.message);
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "User logged out"});
    } catch (error) {
        res.status(500).json({error: "Server error"});
        console.log("Error in logout controller",error.message);
    }
}