import bcrypt from 'bcrypt';
import jwt, { JwtPayload} from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../types/custom';

// type AuthorizedRequest = Request & { authorization: string };


export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password: string, hash: string) => {
    return bcrypt.compare(password, hash);
}

export const createJWT = (user: { id: string; email: string; role: string }) => {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET as string)

    return token;
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {

    // case without authorization header in cookie
    // const bearer = req.headers.authorization;

    // if (!bearer || !bearer.startsWith('Bearer ')) {
    //     return res.status(401).json({ error: 'Unauthorized' }); 
    // }

    // const [, token] = bearer.split('Bearer ');

    // case with token in cookie
    const token = req.cookies.access_token;

    console.log("token", token)


    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string);
        console.log(user)

        req.user = user as User;
        next();
    } catch(err) {
        console.log(err)
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

}