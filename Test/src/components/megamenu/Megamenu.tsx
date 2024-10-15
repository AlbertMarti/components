import { faChevronDown, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as  React from "react";
import { IMegamenuItem } from "../../models/IMegamenuItem";
import megamenuService from "../../services/megamenuService";
import './megamenu.css';

export interface IMegamenuProps {
  provider:megamenuService;
}

export interface IMegamenuState {
    menu:IMegamenuItem[];
    nivel1?:string[];
    nivel2?:string[];
}
export default class Megamenu extends React.Component<IMegamenuProps,IMegamenuState> {

  

    constructor(props:any){
        super(props);
        this.state={menu:[],nivel1:[],nivel2:[]};        
    }
    componentDidMount(): void {        
        this.props.provider.getData().then((d:IMegamenuItem[])=>{            
            this.setState({
                menu:d,
                nivel1:d.map(item => item.group1?item.group1:item.title).filter((value, index, self) => self.indexOf(value) === index) as string[]
              });              
        });
    }

    openNew=(l:string):any=>{
      window.open(l);
    }
    openSelf=(l:string):any=>{
      window.location.href=l;
    }
    renderGroup=(props:any):any=>
    {
      const g=props.group;
      
      let items=this.state.menu.filter((i:IMegamenuItem)=>{
        return i.group1===g || i.title===g
      });
      
      if(items.length===1) {
        return(
          
          <li><a href={items[0].link} target={items[0].target==="Nueva pestaña"?"_blank":"_self"} key={items[0].title}>{items[0].title}</a></li>
        );
      }
      else {
        
        return(
          
          <li tabIndex={999} className="mgm-dropdown">{g}<FontAwesomeIcon icon={faChevronDown} />
            <div className="mega-menu">
              <div className="mgm-container">
              
                { items.map(item => item.group2?item.group2:"").filter((value, index, self) => self.indexOf(value) === index).map((n2,k)=> {
                  console.log(n2);
                return (<div className="item" key={k}>
                <h3>{n2}</h3>
                <ul>
                {items.filter((i)=>i.group2===n2).map((el:any, k)=>
                  
                  <li>
                    <span onClick={()=>{el.target==="Nueva pestaña"?this.openNew(el.link):this.openSelf(el.link)}} key={el.title}>{el.title}</span>
                    
                    </li>
                  
                  )}
                  </ul>                
                  </div>
                )}
                )
                }

              </div>
              </div>
              </li>
          
        );
      }
      
    }
    public render ():React.ReactElement<any>{        
      
        return (
          <div className="ms-compositeHeader-headerAndNavContainer">
            <div className="ms-siteHeader compact" data-automationid="SiteHeader">
              <div className="ms-siteHeader-siteLogo">
                <div>
                  <div className="ms-siteLogoContainerOuter" onClick={()=>{document.location="/"}} >
                    <div className="ms-siteLogoContainerInner" >                    
                      <div className="ms-siteLogo-actual"><img role="presentation" aria-hidden="true"
                        src="/SiteAssets/siteLogo.png" alt="logo"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-HorizontalNav root-87" role="navigation">

              <nav>
                <ul className="mgm-container">
                  {this.state.nivel1 && this.state.nivel1.map((n1:any,k)=>
                    <this.renderGroup key={k} group={n1} />
                  )}
                </ul>
              </nav>
            </div>
          </div>
        );
    }
}