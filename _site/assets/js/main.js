$(window).on('load',function(){
  function engine (degree5t, degree4t,degree3t,degree2t,degree1t,degreet){
    $('#tab').empty();
    $('#equa').empty();

    var data = "<tr><th>X</th><th>Y</th><th>Y&prime;</th><th>Y&Prime;</th><th>Y&tprime;</th><th>Y&qprime;</th><th>Y&qprime;&prime;</th></tr>";

    var degree5val = degree5t;
    var degree4val = degree4t;
    var degree3val = degree3t;
    var degree2val = degree2t;
    var degree1val = degree1t;
    var degreeval = degreet;

    y_equation = `(${degree5val})X<sup>5</sup>+(${degree4val})X<sup>4</sup>+(${degree3val})X<sup>3</sup>+(${degree2val})X<sup>2</sup>+(${degree1val})X+(${degreeval})`;

    $('#equa').append(y_equation);

    var y_base = degreeval;

    var y_prime = (degreeval+degree1val+degree2val+degree3val+degree4val+degree5val)- y_base;

    var y_dbl_prime = (((degree5val*Math.pow(2,5)) + (degree4val*Math.pow(2,4)) + (degree3val*Math.pow(2,3)) + (degree2val*Math.pow(2,2)) + (degree1val*Math.pow(2,1)) + degreeval) - (degreeval+degree1val+degree2val+degree3val+degree4val+degree5val)) - y_prime;

    var y_trip_prime = ((((degree5val*Math.pow(3,5)) + (degree4val*Math.pow(3,4)) + (degree3val*Math.pow(3,3)) + (degree2val*Math.pow(3,2)) + (degree1val*Math.pow(3,1)) + degreeval) -
    ((degree5val*Math.pow(2,5)) + (degree4val*Math.pow(2,4)) + (degree3val*Math.pow(2,3)) + (degree2val*Math.pow(2,2)) + (degree1val*Math.pow(2,1)) + degreeval)) -
    (((degree5val*Math.pow(2,5)) + (degree4val*Math.pow(2,4)) + (degree3val*Math.pow(2,3)) + (degree2val*Math.pow(2,2)) + (degree1val*Math.pow(2,1)) + degreeval) - (degreeval+degree1val+degree2val+degree3val+degree4val+degree5val))) - y_dbl_prime;

    var y_quad_prime = ((((degree5val*Math.pow(4,5)) + (degree4val*Math.pow(4,4)) + (degree3val*Math.pow(4,3)) + (degree2val*Math.pow(4,2)) + (degree1val*Math.pow(4,1)) + degreeval) -
    ((degree5val*Math.pow(3,5)) + (degree4val*Math.pow(3,4)) + (degree3val*Math.pow(3,3)) + (degree2val*Math.pow(3,2)) + (degree1val*Math.pow(3,1)) + degreeval)) -
    (((degree5val*Math.pow(3,5)) + (degree4val*Math.pow(3,4)) + (degree3val*Math.pow(3,3)) + (degree2val*Math.pow(3,2)) + (degree1val*Math.pow(3,1)) + degreeval) -
    ((degree5val*Math.pow(2,5)) + (degree4val*Math.pow(2,4)) + (degree3val*Math.pow(2,3)) + (degree2val*Math.pow(2,2)) + (degree1val*Math.pow(2,1)) + degreeval))) -
    ((((degree5val*Math.pow(3,5)) + (degree4val*Math.pow(3,4)) + (degree3val*Math.pow(3,3)) + (degree2val*Math.pow(3,2)) + (degree1val*Math.pow(3,1)) + degreeval) -
    ((degree5val*Math.pow(2,5)) + (degree4val*Math.pow(2,4)) + (degree3val*Math.pow(2,3)) + (degree2val*Math.pow(2,2)) + (degree1val*Math.pow(2,1)) + degreeval)) -
    (((degree5val*Math.pow(2,5)) + (degree4val*Math.pow(2,4)) + (degree3val*Math.pow(2,3)) + (degree2val*Math.pow(2,2)) + (degree1val*Math.pow(2,1)) + degreeval) - (degreeval+degree1val+degree2val+degree3val+degree4val+degree5val))) - y_trip_prime;

    var y_fif_prime = degree5val*5*4*3*2*1;

    var count = $('#num').val();

    data += `<tr> <td>0</td> <td>${y_base}</td> <td>${y_prime}</td> <td>${y_dbl_prime}</td> <td>${y_trip_prime}</td> <td>${y_quad_prime}</td> <td>${y_fif_prime}</td> </tr>`;

    for(var i=1; i<= count; i++){
      y_base = y_base+y_prime;
      y_prime = y_prime+y_dbl_prime;
      y_dbl_prime = y_dbl_prime + y_trip_prime;
      y_trip_prime = y_trip_prime+y_quad_prime;
      y_quad_prime = y_quad_prime+y_fif_prime;
      data += `<tr> <td>${i}</td> <td>${y_base}</td> <td>${y_prime}</td> <td>${y_dbl_prime}</td> <td>${y_trip_prime}</td> <td>${y_quad_prime}</td> <td>${y_fif_prime}</td> </tr>`;
    }


    $('#tab').append(data);
    //console.log(degree5, degree4, degree3, degree2, degree1, degree);
  }

  function engine_alternate(difft, diff1t, diff2t, diff3t, diff4t, diff5t){
    $('#tab').empty();
    $('#equa').empty();
    var diffp = difft;
    var diff1p = diff1t;
    var diff2p = diff2t;
    var diff3p = diff3t;
    var diff4p = diff4t;
    var diff5p = diff5t;

    var data1 = "<tr><th>X</th><th>Y</th><th>Y&prime;</th><th>Y&Prime;</th><th>Y&tprime;</th><th>Y&qprime;</th><th>Y&qprime;&prime;</th></tr>";
    var count1 = $('#num').val();
    data1 += `<tr> <td>0</td> <td>${diffp}</td> <td>${diff1p}</td> <td>${diff2p}</td> <td>${diff3p}</td> <td>${diff4p}</td> <td>${diff5p}</td> </tr>`;

    for(var i=1; i<= count1; i++){
      diffp = diffp+diff1p;
      diff1p = diff1p+diff2p;
      diff2p = diff2p + diff3p;
      diff3p = diff3p+diff4p;
      diff4p = diff4p+diff5p;
      diff5p = diff5p;
      data1 += `<tr> <td>${i}</td> <td>${diffp}</td> <td>${diff1p}</td> <td>${diff2p}</td> <td>${diff3p}</td> <td>${diff4p}</td> <td>${diff5p}</td> </tr>`;
    }
    $('#tab').append(data1);

  }

  function load(){
    if($('#dec').prop('checked') == true){
      var deg5 = parseInt($('#deg5').val());
      var deg4 = parseInt($('#deg4').val());
      var deg3 = parseInt($('#deg3').val());
      var deg2 = parseInt($('#deg2').val());
      var deg1 = parseInt($('#deg1').val());
      var deg = parseInt($('#deg').val());

      if(isNaN(deg5) == true){
        deg5 = 0;
      }
      if(isNaN(deg4) == true) {
        deg4 = 0;
      }

      if(isNaN(deg3) == true){
        deg3 = 0;
      }

      if(isNaN(deg2) == true) {
        deg2 = 0;
      }

      if(isNaN(deg1) == true) {
        deg1 = 0;
      }

      if(isNaN(deg) == true) {
        deg = 0;
      }

      console.log(deg5,deg4,deg3,deg2,deg1,deg);
      engine(deg5,deg4,deg3,deg2,deg1,deg);
    }else{
      var diff5 = parseInt($('#diff5').val());
      var diff4 = parseInt($('#diff4').val());
      var diff3 = parseInt($('#diff3').val());
      var diff2 = parseInt($('#diff2').val());
      var diff1 = parseInt($('#diff1').val());
      var diff = parseInt($('#diff').val());

      if(isNaN(diff5) == true){
        diff5 = 0;
      }
      if(isNaN(diff4) == true) {
        diff4 = 0;
      }

      if(isNaN(diff3) == true){
        diff3 = 0;
      }

      if(isNaN(diff2) == true) {
        diff2 = 0;
      }

      if(isNaN(diff1) == true) {
        diff1 = 0;
      }

      if(isNaN(diff) == true) {
        diff = 0;
      }
      engine_alternate(diff,diff1,diff2,diff3,diff4,diff5);
    }


  }


  $('#button').on('click',function(){
    load();
  });

  $('#doc').on('click', function(){
    $('#calc').slideUp(1000);
    $('.panel').delay(1300).slideDown();

  });

  $('#home').on('click', function(){
    $('.panel').slideUp(1000);
    $('#calc').delay(1300).slideDown();

  });


});
