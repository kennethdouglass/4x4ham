
/**
 *  @Class ExternalLinks
 *
 *  @Summary Marks external links as opening in a new window.
 *           Links can be configured to open each in their own
 *           new window or the same new window.
 *
 *  @Usage
 *             var extlinks = new ExternalLinks();
 *             extlinks.setNewWinLinks('msg',allsame);
 *             @paramaters
 *                            msg : text marker for each link  (string)
 *                        allsame : boolean ( 1 or 0 )
 *                                  1 = open all marked external links
 *                                      in the same (new) window
 *                                  0 = open all marked external links
 *                                      each in their own (new) window
 *                                  This parameter is optional. The
 *                                  default is '0'.
 *
 *             HTML Requirement:
 *                              each link should be given the class 'new-win':
 *                              &lt;a href="http://google.com" class="new-win">...&lt;/a>
 *
*/
var ExternalLinks = function () {

  var allsame = false;

  /**
  *  @private OpenInNewWindow
  *  @description Opens the link in a new window or browser tab
  */
  var openInNewWindow = function(e) {
    var event, winName;

    if(allsame) {
      winName = "newWindow";
    } else {
      winName = "_blank";
    }

    if (!e) { event = window.event; }
    else { event = e; }
      
    // Abort if a modifier key is pressed
    if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
      return true;
    } else {
      var newWindow = window.open(this.getAttribute('href'), winName);
      if (newWindow) {
        if (newWindow.focus) {
          newWindow.focus();
        }
        return false;
      }
      return true;
    }
  }; // end openInNewWindow()

  /**
  *  @public setNewWinLinks
  *  @description Attaches the openInNewWindow() method to the click event of any
  *               link with the class name "new-win"
  */
  this.setNewWinLinks = function(msg, allsame) {
    allsame = allsame;
    var strNewWindowAlert, links, objWarningText, link;
    if (document.getElementById && document.createElement && document.appendChild) {
      strNewWindowAlert = ""+msg;   // " (opens in a new window)"
      links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        link = links[i];
        // Find all links with a class name of "new-win"
        if (/\bnew\-win\b/.test(link.className)) {
          objWarningText = document.createElement("em");
          objWarningText.appendChild(document.createTextNode(strNewWindowAlert));
          link.appendChild(objWarningText);
          link.onclick = openInNewWindow;
        }
      }
      objWarningText = null;
    }
  };  // end _setNewWinLinks()
    
}; // ExternalLinks
var extlinks = new ExternalLinks();


/* @Class: HAMSJS
 *
 * @Summary  
 *          
 *
*/
var HAMSJS = function () {
 
  /**
  *  @public init()
  *  @description
  */
  this.init = function () {

    /**
    * Set up external links
    */
    extlinks.setNewWinLinks('',0); // \u279A == &#10138;
    
    $("#hbx1").on( "click", function() {
    	if ($(this).hasClass('clzx')) {
      	$(this).removeClass('clzx');
      } else {
      	$(this).addClass('clzx');
      }
      return false;
    });
    
    $("#hbx2").on( "click", function() {
    	if ($(this).hasClass('sq')) {
      	$(this).removeClass('sq');
      } else {
      	$(this).addClass('sq');
      }
      return false;
    });
    
    $("#hbx3").on( "click", function() {
    	if ($(this).hasClass('cirx')) {
      	$(this).removeClass('cirx');
      } else {
      	$(this).addClass('cirx');
      }
      return false;
    });
    
    $("#hbx4").on( "click", function() {
    	if ($(this).hasClass('sqx')) {
      	$(this).removeClass('sqx');
      } else {
      	$(this).addClass('sqx');
      }
      return false;
    });

  }; // init()
    

}; // HAMSJS()
 
var hamburgers = new HAMSJS(); 

$(document).ready(function(){
  hamburgers.init(); 
});







