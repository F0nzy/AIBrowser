let AIBrowserExtensions=true;
setInterval(function(){checkButtons();},2000);

function checkButtons(){
  let host=window.location.hostname;  
  
  //Proxy
  if(host=="www.croxyproxy.com"){
      document.querySelectorAll("input#url").forEach((item,index) => {
        item.setAttribute("loaded","loaded");
        console.log("Proxy Loaded, send message to app");
        aibrowserextension.sendmessage("ProxyLoaded");
      });
  }
  
  //Youtube
  if((host=="www.youtube.com")||(host=="youtube.com")){
      //Before you continue to YouTube
      
      //Reject cookies: 2 TYPE!!
      document.querySelectorAll("ytm-button-renderer.eom-reject button").forEach((item,index) => {
        RejectCookiesBTN=item.getAttribute("loaded");
   
        if(RejectCookiesBTN!="loaded"){
            item.setAttribute("loaded","loaded");
            item.style.border="5px solid red";
            
            item.scrollIntoView();
            item.focus();
            item.click();
              
            aibrowserextension.sendmessage("YoutubeLoaded");
            console.log("Youtube Loaded, reject cookies");
        }
      });
      
     document.querySelectorAll("ytd-button-renderer.ytd-consent-bump-v2-lightbox button").forEach((item,index) => {
        RejectCookiesBTN2=item.getAttribute("loaded");
   
        if(RejectCookiesBTN!="loaded"){
            item.setAttribute("loaded","loaded");
            item.style.border="5px solid red";
            
            if(index==1){
              item.scrollIntoView();
              item.focus();
              item.click();
            }
              
            aibrowserextension.sendmessage("YoutubeLoaded");
            console.log("Youtube Loaded, reject cookies");
        }
      });
      
      
      //Dont Use chrome
      document.querySelectorAll("#dismiss-button button").forEach((item,index) => {
        DismissChromeBTN=item.getAttribute("loaded");

        if(DismissChromeBTN!="loaded"){
            item.setAttribute("loaded","loaded");
            
            if(index==1){
              item.scrollIntoView();
              item.focus();
              item.click();
  
              console.log("Youtube Loaded, dismiss chrome download");
            }
        }
      });
      
  }
  
