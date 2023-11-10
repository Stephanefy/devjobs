import { Response, Request } from "express"

export const errorHandler = (error: Error, req: Request, res: Response) => {
     console.log("reached error Handler")
     res.status(400).json({error: error})
}