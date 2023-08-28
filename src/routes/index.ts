
import { Router } from "express";
import {readdirSync} from "fs";
const PATH_ROUTER=`${__dirname}`
const router=Router();
const cleanFileName=(fileName:string)=>{
    const file=fileName.split(".").shift();
    return file;
}

readdirSync(PATH_ROUTER).forEach((fileName)=>{
    const cleanName=cleanFileName(fileName);
    if(cleanName!=="index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`Importing route /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
    
})

//exportar la ruta
export{router};