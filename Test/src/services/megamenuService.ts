import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import { IMegamenuItem } from "../models/IMegamenuItem";
import { Web } from "@pnp/sp/webs";


export default class megamenuService {

    private sp:any;
    private context:any;
    private url:string;
    private webId:string;
    
    constructor(context:any){
        this.sp = spfi().using(SPFx(context));        
        var url = new URL(context._pageContext._site._absoluteUrl);        
        this.url=url.protocol + "//" + url.host;
        this.webId=context._pageContext._web._id._guid.toString();
    }

    public async getData():Promise<IMegamenuItem[]> {
        
        console.log(this.webId);         
        return  Web([this.sp.web,this.url]).lists.getByTitle("_Enlaces").items().then((menuItems:any)=>{            
            let result:IMegamenuItem[]=[];
            menuItems.forEach((i:any)=>{
        
                if(i.Sitio === null || i.Sitio === "" || i.Sitio===this.webId){
                    result.push({
                        title:i.Title,
                        link:i.Enlace,
                        imgSrc:i.Imagen,
                        group1:i.Grupo1?i.Grupo1:"",
                        group2:i.Grupo2?i.Grupo2:"",
                        target:i.Target,
                        order:i.Orden
                    });
            }
            });
            
            return result.sort((a:any, b:any) => {
                return a.order - b.order;
            });;
          });
        
    }
}