$(document).ready(function(){
    var selectedItem ;
    var selectedItem1 ;
    $(window).resize(function() {
        var wdth=$(window).width();
        if (wdth< 640) {
            $(window).scroll(function(){ var h=$(document.body).height();
             var c = $(document).scrollTop();
             var wh = $(window).height(); 
             if (Math.ceil(wh+c)>=h-35){
                document.getElementById("float-button").style.bottom="60px";
                document.getElementById("float-button-data").style.bottom="90px";
                
            } 
            else{
                document.getElementById("float-button").style.bottom="20px";
                document.getElementById("float-button-data").style.bottom="50px";
            }
        });
        }
    });
    $(".school").hover(function(){
        $(".school").css("color","#1E90FF");
    },function(){
        $(".school").css("color","black");
    });
    $(".csie").hover(function(){
        $(".csie").css("color","#1E90FF");
    },function(){
        $(".csie").css("color","black");
    });

             $("#about").fadeOut();
            $("#teacher").fadeOut();
            $("#course").fadeOut();
            $("#info").fadeOut();
            $("#lab").fadeOut();
    $('#float-button').click( function () {
        $('#float-button-data').on('shown.bs.collapse', function () {
            $("#about").fadeIn(1000);
            $("#teacher").fadeIn(800);
            $("#course").fadeIn(600);
            $("#info").fadeIn(400);
            $("#lab").fadeIn();
            $('#float-button').css('background-color', 'white');
            $('#float-button').css('color', '#343A40');
        });
   
        $('#float-button-data').on('hidden.bs.collapse', function () {
            $("#about").fadeOut("fast");
            $("#teacher").fadeOut("fast");
            $("#course").fadeOut("fast");
            $("#info").fadeOut("fast");
            $("#lab").fadeOut("fast");
            $('#float-button').css('background-color', '#343A40');
            $('#float-button').css('color', 'white');
        });
        
    });
    $('#select').change(function () {
        selectedItem = $(this).val();
       
        $("#table-data").find("table").each(function(){ 
            if(selectedItem==this.id){
                $("#"+String(this.id)).show();
            
            }
            else{
                $("#"+String(this.id)).hide();
            }
        });

        selectedItem1 = $('#select1').val();
        $("#table-course-data").find("table").each(function(){ 
            if(selectedItem==this.id){
                $("#"+String(this.id)).show();
                console.log("here");
                
            }
            else if(String(selectedItem)+String(selectedItem1)==this.id){
                $("#"+String(selectedItem)+String(selectedItem1)).show();
                
            }
            else{
                $("#"+String(this.id)).hide();
            }
        });
        if(String(selectedItem)=="學分規定")
        {
            $("#select1").attr('disabled', true);
            $("#select1").selectpicker('refresh');
        }
        else{
            $("#select1").attr('disabled', false);
            $("#select1").selectpicker('refresh');
        }
    });

    $('#select1').change(function () {
        selectedItem1 = $('#select1').val();
        selectedItem = $('#select').val();
        $("#table-course-data").find("table").each(function(){ 
            if(String(selectedItem)+String(selectedItem1)==this.id){
                $("#"+String(selectedItem)+String(selectedItem1)).show();
            }
            else{
                $("#"+String(this.id)).hide();
            }
        });
    });

});

   


 $(document).click(function(e) {
    if (!$(e.target).is('.panel-body')) {
        $('.collapse').collapse('hide');	   
    }

});

