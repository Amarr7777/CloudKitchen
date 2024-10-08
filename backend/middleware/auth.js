import jwt from 'jsonwebtoken'

const authMiddleWare = async (req, res, next) => {
    // const { token } = req.headers;
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
        return res.json({ success: false, messsage: "not authorized login again" })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode;
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, messsage: "error" })
    }

}

export default authMiddleWare;