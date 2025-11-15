import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

export function generateToken(payload) {
    if (!secret) throw new Error("JWT_SECRET missing");
    
    return jwt.sign(payload, secret, { expiresIn: '24h' });
}

export function verifyToken(token) {
    try {
        if (!secret) {
        throw new Error("JWT_SECRET не знайдений в змінних оточення");
    }
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}