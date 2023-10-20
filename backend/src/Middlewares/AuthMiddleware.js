import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        console.log("Received Token:", token);

        if (!token) {
            console.log("Token not provided");
            return res.status(403).json({ message: "Unauthorized access" });
        }
        try {
            const verified = jwt.verify(token, process.env.SECRET);
            req.user = verified;
            next();
        } catch (error) {
            console.error("Error in token verification:", error);
            return res.status(401).json({ message: "Unauthorized access" });
        }
    } catch (error) {
        console.error("Error in token verification:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

