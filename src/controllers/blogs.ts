import { Request, Response } from "express"
import { handelHttp } from "../utils/error.handle"



const getItem= (/*req*/{body}:Request, res:Response)=>{
    try {
        //const {body}=req
        res.send(body)        
    } catch (error) {
        handelHttp(res,"ERROR_GETTING_BLOG")
    }
}

const getItems= (req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handelHttp(res,"ERROR_GETTING_BLOGS")
    }
}

const updateItem= (req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handelHttp(res,"ERROR_UPDATING_BLOG")
    }
}

const postItem= ({body}:Request, res:Response)=>{
    try {
        res.send(body)          
    } catch (error) {
        handelHttp(res,"ERROR_POSTING_BLOG")
    }
}

const deleteItem= (req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handelHttp(res,"ERROR_DELETING_BLOG")
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem}