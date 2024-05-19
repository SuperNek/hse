import jwt from "jsonwebtoken";

const generateToken = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })

    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // in ms
        httpOnly: true, // not available in js code
        sameSite: "strict", // csrf cross-site request forgery
    })
}

export default generateToken;