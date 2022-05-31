  if (document.getElementsByTagName('fork-me').length > 0) {
    

var ForkMeWrapper = document.querySelector('[repo-link]');

    const ForkMeWrapper_Color = ForkMeWrapper.getAttribute('color');
    
        const ForkMeWrapper_Text_Color = ForkMeWrapper.getAttribute('text-color');
    
    
      const ForkMeWrapper_Side = ForkMeWrapper.getAttribute('side');
    
const ForkMeWrapper_Link = ForkMeWrapper.getAttribute('repo-link');
    
    
    if (ForkMeWrapper_Color == undefined){
      var Color = "white"
    } else {
      var Color = ForkMeWrapper_Color
    }
    
    
    if (ForkMeWrapper_Text_Color == undefined){
      var Text_Color = "ffffff"
      
    } else {
      var Text_Color = ForkMeWrapper_Text_Color
    }
    
     if (ForkMeWrapper_Side == undefined){
      var Side = "right"
      
    } else {
      var Side = ForkMeWrapper_Side
    }
    
    ForkMeWrapper.innerHTML = `<a href="https://github.com/${ForkMeWrapper_Link}" class="ui-container"
      ><img
        class="fork-me"
        style="position: absolute; top: 0; ${Side}: 0; border: 0;"
        src="https://s3.amazonaws.com/github/ribbons/forkme_${Side}_${Color}_${Text_Color}.png"
        alt="Fork me on GitHub"
    /></a>` 
    
  }
    
