import React from 'react';
import ReactDOM from "react-dom/client";
import Megamenu from './components/megamenu/Megamenu';
import './index.css';
import megamenuService from "./services/megamenuService";

declare global {
  interface Window { spContext: any; wpProperties:any;_spPageContextInfo:any }
}

function waitForElm(selector:any){
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              observer.disconnect();
              resolve(document.querySelector(selector));
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}



waitForElm(document.currentScript?.getAttribute("extContainer") || "").then((ctn:any) => {

  const root = ReactDOM.createRoot(
    ctn as HTMLElement
  );
    try {
  root.render(  
    <div>    
        <Megamenu provider={new megamenuService(window.spContext)}/>
        </div>
  );
    }
    catch(e) {

      console.log("Error cargando ")
    }

});




