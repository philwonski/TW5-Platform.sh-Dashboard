/*\
title: $:/platforme1.js
type: application/javascript
module-type: macro


<<getPlatform "tiddlername" "evar">>
Example to get data from wikipedia: <<getPlatform "projectid" "PLATFORM_PROJECT">>


\*/

(function(){


    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";
    const { env } = process;

    exports.name = "getPlatform";
    
    exports.params = [ {name: "tiddlername"},{name: "evar"}];
    
    
    
    /*
    Run the macro
    */
    exports.run = function(tiddlername,evar) {
    
     var evar = evar || "None";
    
     var tiddlername = tiddlername || "None";
    
     let projectId = 'env.'+evar;

      $tw.wiki.addTiddler({title:tiddlername, text:projectId, type: "application/json"});
      console.log(projectId);
      return "[["+tiddlername+"]]";
    };
    
    
    })();