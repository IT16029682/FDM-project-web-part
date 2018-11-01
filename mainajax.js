

$('#mybutton').click(function(e){ 





$.ajax({
  //url: baseurl + '/api/repair/break',
  url: '/api/state/car/atlocation',
  type: 'POST',
  contentType: "application/json",
  data:  JSON.stringify({
  	"singleRecord": "True",
  	"attributes":{	"zip2":$('#zip').val()[0],
  					"zip3":$('#zip').val()[1],
  					"zip4":$('#zip').val()[2],
  					"zip5":$('#zip').val()[3],
  					"hod":$('#homeowner').val(),
  					"numchild":$('#numchild').val(),
  					"income":$('#income').val(),
  					"gender":$('#gender').val(),
  					"wealth":$('#wealth').val(),
  					"hv":$('#hv').val(),
  					"icmed":$('#icmed').val(),
  					"icavg":$('#icavg').val(),
  					"ic15":$('#ic15').val(),
  					"numprom":$('#numprom').val(),
  					"ramntall":$('#ramnt').val(),
  					"maxramnt":$('#maxramnt').val(),
  					"lastgift":$('#lastgift').val(),
  					"totalmonths":$('#totmonths').val(),
  					"timelag":$('#timelag').val(),
  					"avggift":$('#avggift').val()
  				}
  }),
   
  success: function(data){
	  $('res').html( JSON.stringify( data ) );
    
  },
  error: function(data) {
	   $('res').html( JSON.stringify( data ) );
  }
  //dataType: 'jsonp'
  //success: function(data) {
  //   console.log(data);
  //},
});


});






$("form#formupload").submit(function(e) {
	
	alert($('#fileformat:checked').val());
    e.preventDefault();    
    var formData = new FormData(this);

    $.ajax({
        url: window.location.pathname,
        type: 'POST',
        data: formData,
        success: function (data) {
            alert(data);
        },
        cache: false,
        contentType: false,
        processData: false
    });
});

