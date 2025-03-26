import { Request, Response, Router } from "express";
import contactRepo from "../repository/contactRepo";

export const contactRouter = Router();

contactRouter.post('/send-query',async(req:Request, res:Response)=>{
    await contactRepo.sendQuery(req,res)
})
