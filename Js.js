  $(document).ready(function () {
  $(".sedan").show();
  $(".SUV").hide();
 
  $(".sportcar").hide();
       $(".btn1").click(function () {
           $(".sedan").show();
           $(".SUV").hide()
           $(".sportcar").hide();
       });
        $(".btn2").click(function () {
              $(".SUV").show();
              $(".sedan").hide()
              $(".sportcar").hide();
      });
        $(".btn3").click(function () {
          $(".SUV").hide();
          $(".sedan").hide()
          $(".sportcar").show();
});
      $(".btn4").click(function () {
        
        
      });
});