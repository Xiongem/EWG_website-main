//BADGES
function toggleImage1() {
    imgsrc= document.getElementById("start-1st-project").src;
    if (imgsrc.indexOf("images/badges/start-1st-project-mono.webp")!=-1){
        document.getElementById("start-1st-project").src = "images/badges/start-1st-project-color.webp";
        //assign values
        var id = "start-1st-project";
        var badge = "images/badges/start-1st-project-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("start-1st-project").src = "images/badges/start-1st-project-mono.webp";
        //assign values
        var id = "start-1st-project";
        var badge = "images/badges/start-1st-project-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  
  function toggleImage2() {
    imgsrc= document.getElementById("first-daily").src;
    if (imgsrc.indexOf("images/badges/first-daily-mono.webp")!=-1){
        document.getElementById("first-daily").src = "images/badges/first-daily-color.webp";
        //assign values
        var id = "first-daily";
        var badge = "images/badges/first-daily-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("first-daily").src = "images/badges/first-daily-mono.webp";
        //assign values
        var id = "first-daily";
        var badge = "images/badges/first-daily-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  
  function toggleImage3() {
    imgsrc= document.getElementById("quarter-quomplete").src;
    if (imgsrc.indexOf("images/badges/quarter-quomplete-mono.webp")!=-1){
        document.getElementById("quarter-quomplete").src = "images/badges/quarter-quomplete-color.webp";
        //assign values
        var id = "quarter-quomplete";
        var badge = "images/badges/quarter-quomplete-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("quarter-quomplete").src = "images/badges/quarter-quomplete-mono.webp";
        //assign values
        var id = "quarter-quomplete";
        var badge = "images/badges/quarter-quomplete-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  
  function toggleImage4() {
    imgsrc= document.getElementById("half-way").src;
    if (imgsrc.indexOf("images/badges/half-way-mono.webp")!=-1){
        document.getElementById("half-way").src = "images/badges/half-way-color.webp";
        //assign values
        var id = "half-way";
        var badge = "images/badges/half-way-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("half-way").src = "images/badges/half-way-mono.webp";
        //assign values
        var id = "half-way";
        var badge = "images/badges/half-way-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  
  function toggleImage5() {
    imgsrc= document.getElementById("all-downhill").src;
    if (imgsrc.indexOf("images/badges/all-downhill-mono.webp")!=-1){
        document.getElementById("all-downhill").src = "images/badges/all-downhill-color.webp";
        //assign values
        var id = "all-downhill";
        var badge = "images/badges/all-downhill-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("all-downhill").src = "images/badges/all-downhill-mono.webp";
        //assign values
        var id = "all-downhill";
        var badge = "images/badges/all-downhill-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  
  function toggleImage6() {
    imgsrc= document.getElementById("cross-finish").src;
    if (imgsrc.indexOf("images/badges/cross-finish-mono.webp")!=-1){
        document.getElementById("cross-finish").src = "images/badges/cross-finish-color.webp";
        //assign values
        var id = "cross-finish";
        var badge = "images/badges/cross-finish-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("cross-finish").src = "images/badges/cross-finish-mono.webp";
        //assign values
        var id = "cross-finish";
        var badge = "images/badges/cross-finish-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  
  function toggleImage7() {
    imgsrc= document.getElementById("on-track").src;
    if (imgsrc.indexOf("images/badges/on-track-mono.webp")!=-1){
        document.getElementById("on-track").src = "images/badges/on-track-color.webp";
        //assign values
        var id = "on-track";
        var badge = "images/badges/on-track-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("on-track").src = "images/badges/on-track-mono.webp";
         //assign values
         var id = "on-track";
         var badge = "images/badges/on-track-mono.webp";
         //begin post method
         $.post("php-processes/update-badges", {
             //DATA
             id: id,
             badge: badge
         });
    }
  }
  function toggleImage8() {
    imgsrc= document.getElementById("out-gate").src;
    if (imgsrc.indexOf("images/badges/out-gate-mono.webp")!=-1){
        document.getElementById("out-gate").src = "images/badges/out-gate-color.webp";
        //assign values
        var id = "out-gate";
        var badge = "images/badges/out-gate-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("out-gate").src = "images/badges/out-gate-mono.webp";
        //assign values
        var id = "out-gate";
        var badge = "images/badges/out-gate-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage9() {
    imgsrc= document.getElementById("streak-two").src;
    if (imgsrc.indexOf("images/badges/streak-two-mono.webp")!=-1){
        document.getElementById("streak-two").src = "images/badges/streak-two-color.webp";
        //assign values
        var id = "streak-two";
        var badge = "images/badges/streak-two-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("streak-two").src = "images/badges/streak-two-mono.webp";
        //assign values
        var id = "streak-two";
        var badge = "images/badges/streak-two-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage10() {
    imgsrc= document.getElementById("streak-three").src;
    if (imgsrc.indexOf("images/badges/streak-three-mono.webp")!=-1){
        document.getElementById("streak-three").src = "images/badges/streak-three-color.webp";
        //assign values
        var id = "streak-three";
        var badge = "images/badges/streak-three-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("streak-three").src = "images/badges/streak-three-mono.webp";
        //assign values
        var id = "streak-three";
        var badge = "images/badges/streak-three-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage11() {
    imgsrc= document.getElementById("streak-seven").src;
    if (imgsrc.indexOf("images/badges/streak-seven-mono.webp")!=-1){
        document.getElementById("streak-seven").src = "images/badges/streak-seven-color.webp";
        //assign values
        var id = "streak-seven";
        var badge = "images/badges/streak-seven-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("streak-seven").src = "images/badges/streak-seven-mono.webp";
        //assign values
        var id = "streak-seven";
        var badge = "images/badges/streak-seven-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage12() {
    imgsrc= document.getElementById("streak-fourteen").src;
    if (imgsrc.indexOf("images/badges/streak-fourteen-mono.webp")!=-1){
        document.getElementById("streak-fourteen").src = "images/badges/streak-fourteen-color.webp";
        //assign values
        var id = "streak-fourteen";
        var badge = "images/badges/streak-fourteen-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("streak-fourteen").src = "images/badges/streak-fourteen-mono.webp";
        //assign values
        var id = "streak-fourteen";
        var badge = "images/badges/streak-fourteen-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage13() {
    imgsrc= document.getElementById("streak-twentyOne").src;
    if (imgsrc.indexOf("images/badges/streak-twentyOne-mono.webp")!=-1){
        document.getElementById("streak-twentyOne").src = "images/badges/streak-twentyOne-color.webp";
        //assign values
        var id = "streak-twentyOne";
        var badge = "images/badges/streak-twentyOne-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("streak-twentyOne").src = "images/badges/streak-twentyOne-mono.webp";
        //assign values
        var id = "streak-twentyOne";
        var badge = "images/badges/streak-twentyOne-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage14() {
    imgsrc= document.getElementById("every-streak").src;
    if (imgsrc.indexOf("images/badges/every-streak-mono.webp")!=-1){
        document.getElementById("every-streak").src = "images/badges/every-streak-color.webp";
        //assign values
        var id = "every-streak";
        var badge = "images/badges/every-streak-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("every-streak").src = "images/badges/every-streak-mono.webp";
        //assign values
        var id = "every-streak";
        var badge = "images/badges/every-streak-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage15() {
    imgsrc= document.getElementById("back-it-up").src;
    if (imgsrc.indexOf("images/badges/back-it-up-mono.webp")!=-1){
        document.getElementById("back-it-up").src = "images/badges/back-it-up-color.webp";
        //assign values
        var id = "back-it-up";
        var badge = "images/badges/back-it-up-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("back-it-up").src = "images/badges/back-it-up-mono.webp";
        //assign values
        var id = "back-it-up";
        var badge = "images/badges/back-it-up-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage16() {
    imgsrc= document.getElementById("outline").src;
    if (imgsrc.indexOf("images/badges/outline-mono.webp")!=-1){
        document.getElementById("outline").src = "images/badges/outline-color.webp";
        //assign values
        var id = "outline";
        var badge = "images/badges/outline-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("outline").src = "images/badges/outline-mono.webp";
        //assign values
        var id = "outline";
        var badge = "images/badges/outline-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage17() {
    imgsrc= document.getElementById("journey").src;
    if (imgsrc.indexOf("images/badges/journey-mono.webp")!=-1){
        document.getElementById("journey").src = "images/badges/journey-color.webp";
        //assign values
        var id = "journey";
        var badge = "images/badges/journey-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("journey").src = "images/badges/journey-mono.webp";
        //assign values
        var id = "journey";
        var badge = "images/badges/journey-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage18() {
    imgsrc= document.getElementById("dual-wielder").src;
    if (imgsrc.indexOf("images/badges/dual-wielder-mono.webp")!=-1){
        document.getElementById("dual-wielder").src = "images/badges/dual-wielder-color.webp";
        //assign values
        var id = "dual-wielder";
        var badge = "images/badges/dual-wielder-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("dual-wielder").src = "images/badges/dual-wielder-mono.webp";
         //assign values
         var id = "dual-wielder";
         var badge = "images/badges/dual-wielder-mono.webp";
         //begin post method
         $.post("php-processes/update-badges", {
             //DATA
             id: id,
             badge: badge
         });
    }
  }
  function toggleImage19() {
    imgsrc= document.getElementById("gathering").src;
    if (imgsrc.indexOf("images/badges/gathering-mono.webp")!=-1){
        document.getElementById("gathering").src = "images/badges/gathering-color.webp";
        //assign values
        var id = "gathering";
        var badge = "images/badges/gathering-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("gathering").src = "images/badges/gathering-mono.webp";
        //assign values
        var id = "gathering";
        var badge = "images/badges/gathering-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage20() {
    imgsrc= document.getElementById("hear-ye").src;
    if (imgsrc.indexOf("images/badges/hear-ye-mono.webp")!=-1){
        document.getElementById("hear-ye").src = "images/badges/hear-ye-color.webp";
        //assign values
        var id = "hear-ye";
        var badge = "images/badges/hear-ye-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("hear-ye").src = "images/badges/hear-ye-mono.webp";
        //assign values
        var id = "hear-ye";
        var badge = "images/badges/hear-ye-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage21() {
    imgsrc= document.getElementById("breakthrough").src;
    if (imgsrc.indexOf("images/badges/breakthrough-mono.webp")!=-1){
        document.getElementById("breakthrough").src = "images/badges/breakthrough-color.webp";
        //assign values
        var id = "breakthrough";
        var badge = "images/badges/breakthrough-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("breakthrough").src = "images/badges/breakthrough-mono.webp";
         //assign values
         var id = "breakthrough";
         var badge = "images/badges/breakthrough-mono.webp";
         //begin post method
         $.post("php-processes/update-badges", {
             //DATA
             id: id,
             badge: badge
         });
    }
  }
  function toggleImage22() {
    imgsrc= document.getElementById("starting-fresh").src;
    if (imgsrc.indexOf("images/badges/starting-fresh-mono.webp")!=-1){
        document.getElementById("starting-fresh").src = "images/badges/starting-fresh-color.webp";
        //assign values
        var id = "starting-fresh";
        var badge = "images/badges/starting-fresh-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("starting-fresh").src = "images/badges/starting-fresh-mono.webp";
        //assign values
        var id = "starting-fresh";
        var badge = "images/badges/starting-fresh-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage23() {
    imgsrc= document.getElementById("ever-persist").src;
    if (imgsrc.indexOf("images/badges/ever-persist-mono.webp")!=-1){
        document.getElementById("ever-persist").src = "images/badges/ever-persist-color.webp";
        //assign values
        var id = "ever-persist";
        var badge = "images/badges/ever-persist-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("ever-persist").src = "images/badges/ever-persist-mono.webp";
        //assign values
        var id = "ever-persist";
        var badge = "images/badges/ever-persist-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage24() {
    imgsrc= document.getElementById("touch-grass").src;
    if (imgsrc.indexOf("images/badges/touch-grass-mono.webp")!=-1){
        document.getElementById("touch-grass").src = "images/badges/touch-grass-color.webp";
        //assign values
        var id = "touch-grass";
        var badge = "images/badges/touch-grass-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("touch-grass").src = "images/badges/touch-grass-mono.webp";
        //assign values
        var id = "touch-grass";
        var badge = "images/badges/touch-grass-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage25() {
    imgsrc= document.getElementById("business").src;
    if (imgsrc.indexOf("images/badges/business-mono.webp")!=-1){
        document.getElementById("business").src = "images/badges/business-color.webp";
        //assign values
        var id = "business";
        var badge = "images/badges/business-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("business").src = "images/badges/business-mono.webp";
        //assign values
        var id = "business";
        var badge = "images/badges/business-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage26() {
    imgsrc= document.getElementById("tears-wept").src;
    if (imgsrc.indexOf("images/badges/tears-wept-mono.webp")!=-1){
        document.getElementById("tears-wept").src = "images/badges/tears-wept-color.webp";
        //assign values
        var id = "tears-wept";
        var badge = "images/badges/tears-wept-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("tears-wept").src = "images/badges/tears-wept-mono.webp";
        //assign values
        var id = "tears-wept";
        var badge = "images/badges/tears-wept-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage27() {
    imgsrc= document.getElementById("overachiever").src;
    if (imgsrc.indexOf("images/badges/overachiever-mono.webp")!=-1){
        document.getElementById("overachiever").src = "images/badges/overachiever-color.webp";
        //assign values
        var id = "overachiever";
        var badge = "images/badges/overachiever-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("overachiever").src = "images/badges/overachiever-mono.webp";
        //assign values
        var id = "overachiever";
        var badge = "images/badges/overachiever-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage28() {
    imgsrc= document.getElementById("finish-him").src;
    if (imgsrc.indexOf("images/badges/finish-him-mono.webp")!=-1){
        document.getElementById("finish-him").src = "images/badges/finish-him-color.webp";
        //assign values
        var id = "finish-him";
        var badge = "images/badges/finish-him-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("finish-him").src = "images/badges/finish-him-mono.webp";
        //assign values
        var id = "finish-him";
        var badge = "images/badges/finish-him-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage29() {
    imgsrc= document.getElementById("complete-one-project").src;
    if (imgsrc.indexOf("images/badges/complete-one-project-mono.webp")!=-1){
        document.getElementById("complete-one-project").src = "images/badges/complete-one-project-color.webp";
        //assign values
        var id = "complete-one-project";
        var badge = "images/badges/complete-one-project-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("complete-one-project").src = "images/badges/complete-one-project-mono.webp";
        //assign values
        var id = "complete-one-project";
        var badge = "images/badges/complete-one-project-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage30() {
    imgsrc= document.getElementById("complete-five-project").src;
    if (imgsrc.indexOf("images/badges/complete-five-project-mono.webp")!=-1){
        document.getElementById("complete-five-project").src = "images/badges/complete-five-project-color.webp";
        //assign values
        var id = "complete-five-project";
        var badge = "images/badges/complete-five-project-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("complete-five-project").src = "images/badges/complete-five-project-mono.webp";
        //assign values
        var id = "complete-five-project";
        var badge = "images/badges/complete-five-project-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage31() {
    imgsrc= document.getElementById("complete-ten-project").src;
    if (imgsrc.indexOf("images/badges/complete-ten-project-mono.webp")!=-1){
        document.getElementById("complete-ten-project").src = "images/badges/complete-ten-project-color.webp";
        //assign values
        var id = "complete-ten-project";
        var badge = "images/badges/complete-ten-project-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("complete-ten-project").src = "images/badges/complete-ten-project-mono.webp";
        //assign values
        var id = "complete-ten-project";
        var badge = "images/badges/complete-ten-project-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage32() {
    imgsrc= document.getElementById("streak-fiend").src;
    if (imgsrc.indexOf("images/badges/streak-fiend-mono.webp")!=-1){
        document.getElementById("streak-fiend").src = "images/badges/streak-fiend-color.webp";
         //assign values
         var id = "streak-fiend";
         var badge = "images/badges/streak-fiend-color.webp";
         //begin post method
         $.post("php-processes/update-badges", {
             //DATA
             id: id,
             badge: badge
         });
    } 
    else {
        document.getElementById("streak-fiend").src = "images/badges/streak-fiend-mono.webp";
        //assign values
        var id = "streak-fiend";
        var badge = "images/badges/streak-fiend-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage33() {
    imgsrc= document.getElementById("hydra-slayer").src;
    if (imgsrc.indexOf("images/badges/hydra-slayer-mono.webp")!=-1){
        document.getElementById("hydra-slayer").src = "images/badges/hydra-slayer-color.webp";
        //assign values
        var id = "hydra-slayer";
        var badge = "images/badges/hydra-slayer-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        }).done(function() {
            $("#overlay").removeClass("hide");
            $("#overlay").addClass("show");
            $("#pfp-overlay").removeClass("hide");
            $("#pfp-overlay").addClass("show");
            alert("Successfully updated! If the overlay does not change, please refresh the page.");
        });
    } 
    else {
        document.getElementById("hydra-slayer").src = "images/badges/hydra-slayer-mono.webp";
        //assign values
        var id = "hydra-slayer";
        var badge = "images/badges/hydra-slayer-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        }).done(function() {
            $("#overlay").removeClass("show");
            $("#overlay").addClass("hide");
            $("#pfp-overlay").removeClass("show");
            $("#pfp-overlay").addClass("hide");
            alert("Successfully updated! If the overlay does not change, please refresh the page.");
        });
    }
  }
  function toggleImage34() {
    imgsrc= document.getElementById("vet-streaker").src;
    if (imgsrc.indexOf("images/badges/vet-streaker-mono.webp")!=-1){
        document.getElementById("vet-streaker").src = "images/badges/vet-streaker-color.webp";
        //assign values
        var id = "vet-streaker";
        var badge = "images/badges/vet-streaker-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("vet-streaker").src = "images/badges/vet-streaker-mono.webp";
        //assign values
        var id = "vet-streaker";
        var badge = "images/badges/vet-streaker-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage35() {
    imgsrc= document.getElementById("vet-guild").src;
    if (imgsrc.indexOf("images/badges/vet-guild-mono.webp")!=-1){
        document.getElementById("vet-guild").src = "images/badges/vet-guild-color.webp";
        //assign values
        var id = "vet-guild";
        var badge = "images/badges/vet-guild-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("vet-guild").src = "images/badges/vet-guild-mono.webp";
        //assign values
        var id = "vet-guild";
        var badge = "images/badges/vet-guild-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage36() {
    imgsrc= document.getElementById("start-first-project").src;
    if (imgsrc.indexOf("images/badges/start-first-project-mono.webp")!=-1){
        document.getElementById("start-first-project").src = "images/badges/start-first-project-color.webp";
        //assign values
        var id = "start-first-project";
        var badge = "images/badges/start-first-project-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("start-first-project").src = "images/badges/start-first-project-mono.webp";
        //assign values
        var id = "start-first-project";
        var badge = "images/badges/start-first-project-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage37() {
    imgsrc= document.getElementById("spicy-spicy").src;
    if (imgsrc.indexOf("images/badges/spicy-spicy-mono.webp")!=-1){
        document.getElementById("spicy-spicy").src = "images/badges/spicy-spicy-color.webp";
        //assign values
        var id = "spicy-spicy";
        var badge = "images/badges/spicy-spicy-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("spicy-spicy").src = "images/badges/spicy-spicy-mono.webp";
        //assign values
        var id = "spicy-spicy";
        var badge = "images/badges/spicy-spicy-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }
  function toggleImage38() {
    imgsrc= document.getElementById("tears-alltime").src;
    if (imgsrc.indexOf("images/badges/tears-alltime-mono.webp")!=-1){
        document.getElementById("tears-alltime").src = "images/badges/tears-alltime-color.webp";
        //assign values
        var id = "tears-alltime";
        var badge = "images/badges/tears-alltime-color.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    } 
    else {
        document.getElementById("tears-alltime").src = "images/badges/tears-alltime-mono.webp";
        //assign values
        var id = "tears-alltime";
        var badge = "images/badges/tears-alltime-mono.webp";
        //begin post method
        $.post("php-processes/update-badges", {
            //DATA
            id: id,
            badge: badge
        });
    }
  }