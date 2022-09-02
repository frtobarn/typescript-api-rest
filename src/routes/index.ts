import { Router } from "express";
import {readdirSync} from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router();

const cleanFilename=(fileName:string)=>{
    const file = fileName.split(".").shift()
    return file
}

readdirSync(PATH_ROUTER).filter((filename)=>{
    const cleanName =  cleanFilename(filename)
    if(cleanName !== "index"){
        console.log(`loading routes from: ${cleanName}`)
        import(`./${cleanName}`).then((moduleRouter)=>{
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export {router};