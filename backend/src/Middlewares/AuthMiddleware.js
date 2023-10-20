export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        console.log("Received Token:", token);

        if (!token) {
            console.log("Token not provided");
            return res.status(403).json({ message: "Unauthorized access" });
        }

        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.id;
        console.log("Authenticated User:", req.userId);

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "No user found" });
        }

        next();
    } catch (error) {
        console.error("Error in token verification:", error);
        return res.status(401).json({ message: "Unauthorized access" });
    }
};
