$(window).on('load',function(){
  function engine (degree5t, degree4t,degree3t,degree2t,degree1t,degreet){
    $('#tab').empty();
    var data = "<tr><th>X</th><th>Y</th><th>Y&prime;</th><th>Y&Prime;</th><th>Y&tprime;</th><th>Y&qprime;</th><th>Y&qprime;&prime;</th></tr>";

    var degree5val = degree5t;
    var degree4val = degree4t;
    var degree3val = degree3t;
    var degree2val = degree2t;
    var degree1val = degree1t;
    var degreeval = degreet;

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

  function load(){

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

  }

  function check(){
    if(window.location.href.endsWith('#/') == true){
      $('#button').on('click',function(){
        load();
      });
    }
  }

  setInterval(check, 1000);


});
