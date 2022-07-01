class fork_me_wrapper extends HTMLElement {
  constructor() {
    super();

    this.link= this.getAttribute("link");
    this.side = this.getAttribute("side");
    this.fixed = this.getAttribute("fixed");
    this.message = this.getAttribute("message");
    this.color = this.getAttribute("color");
    this.text_color = this.getAttribute("text-color");
    
  }

  async connectedCallback() {

    this.initShadowDom();
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template;
  }

  get style() {
    return `
    
    
    `;
  }


  get template() {
    var Link = this.link
    
     
    var Message = this.message
     if (Link == undefined || Link == ""){
      
       Message = "Error: No Link Found"
    } else{
      
      Message = Message
    }
   
    
     if (Message == undefined || Message == ""){
      
       Message = "Fork Me On GitHub"
    } else{
      
      Message = Message
    }
    
    var Side = this.side
    
     if (Side == undefined || Side == ""){
      
       Side = `  right`
    } else{
      
      Side = Side
    }
    
    
    
    var Color = this.color
     
    if (Color == undefined || Color == ""){
      
       Color = "red"
    } else{
      
      Color = Color
    }
    
    var Text_Color = this.text_color
    if (Text_Color == undefined){
      
      Text_Color= "#fff"
    } else {
      
      Text_Color = Text_Color
      
    }
    var Style = `<style>
  .github-fork-ribbon {
  width: 12.1em;
  height: 12.1em;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
  font-size: 13px;
  text-decoration: none;
  text-indent: -999999px;
}

.github-fork-ribbon.fixed {
  position: fixed;
}

.github-fork-ribbon:hover, .github-fork-ribbon:active {
  background-color: rgba(0, 0, 0, 0.0);
}

.github-fork-ribbon:before, .github-fork-ribbon:after {
  /* The right and left classes determine the side we attach our banner to */
  position: absolute;
  display: block;
  width: 15.38em;
  height: 1.54em;

  top: 3.23em;
  right: -3.23em;

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.github-fork-ribbon:before {
  content: "";

  /* Add a bit of padding to give some substance outside the "stitching" */
  padding: .38em 0;

  /* Set the base colour */
  background-color:${Color};

  /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)));
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
  background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));

  /* Add a drop shadow */
  -webkit-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);

  pointer-events: auto;
}

.github-fork-ribbon:after {
  /* Set the text from the data-ribbon attribute */
  content: attr(data-ribbon);

  /* Set the text properties */
  color: ${Text_Color};
  font: 700 1em "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.54em;
  text-decoration: none;
  text-shadow: 0 -.08em rgba(0, 0, 0, 0.5);
  text-align: center;
  text-indent: 0;

  /* Set the layout properties */
  padding: .15em 0;
  margin: .15em 0;

  /* Add "stitching" effect */
  border-width: .08em 0;
  border-style: dotted;
  border-color: #fff;
  border-color: rgba(255, 255, 255, 0.7);
}

.github-fork-ribbon.left-top, .github-fork-ribbon.left-bottom {
  right: auto;
  left: 0;
}

.github-fork-ribbon.left-bottom, .github-fork-ribbon.right-bottom {
  top: auto;
  bottom: 0;
}

.github-fork-ribbon.left-top:before, .github-fork-ribbon.left-top:after, .github-fork-ribbon.left-bottom:before, .github-fork-ribbon.left-bottom:after {
  right: auto;
  left: -3.23em;
}

.github-fork-ribbon.left-bottom:before, .github-fork-ribbon.left-bottom:after, .github-fork-ribbon.right-bottom:before, .github-fork-ribbon.right-bottom:after {
  top: auto;
  bottom: 3.23em;
}

.github-fork-ribbon.left-top:before, .github-fork-ribbon.left-top:after, .github-fork-ribbon.right-bottom:before, .github-fork-ribbon.right-bottom:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
}</style>`
    
    if (Side == undefined || Side == ""){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  right`
      
    }
    
     if (Side == "top-right"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  right-top`
      
    }
       if (Side == "top-left"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  left-top`
      
    }
    
        if (Side == "bottom-right"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  right-bottom`
      
    }
    
      if (Side == "bottom-left"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  left-bottom`
      
    }
    
    var Fixed = this.fixed
      if (Fixed == undefined || Fixed == ""){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Fixed = `  fixed`
      
      }
    
       if (Fixed == "False"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Fixed = ``
      
      }
    
    
    
      var OpenInNewWindow = this.getAttribute("new-window")
        if (OpenInNewWindow == "True"){
           var TargetBlank = `target="_blank"`
         
       } else {
          var TargetBlank = ``
       }  
    
    
     var Ribbon = ` 
   
   <a class="github-fork-ribbon ${Side} ${Fixed}" href="${Link}" ${TargetBlank} data-ribbon="${Message}" title="${Message}">${Message}</a>
   `
    
    return `
    ${Style} 
      
          ${Ribbon}
     
    `;
  }
}

window.customElements.define("fork-me", fork_me_wrapper);
