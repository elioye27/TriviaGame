$(document).ready(function() {

	var correctAns = 0;
	var wrongAns = 0;
	var unAnswered = 4;
	var timer = 30;
	var intervalId;


	


	function start() {
		
	  $("#start").on("click", function() {
	        $("#question-1").html("HTML and CSS are computer languages used to create what?");
	        $(".display").css("visibility","visible"); 

	      	intervalId = setInterval(decrement, 1000);
	    }); 
	}
	  	
  	function rightAnsers () {
	  $(".form-check-input1").on( "click", function() {
	  		($(".form-check-input1").is(":checked"));
	  		correctAns++;
		});		

	};	
		

	//   	function rightAnsers () {
 //  		$(".form-check-input1").on("click", function() {
	//   		if ($(".form-check-input1").html(".form-check-input1" == rChoiceslength])) {
	//   			$(".form-check-input1").off("click");
	  		
	//   			correctAns++;
	//   		}
	//   	}); 	
	// }
			
	
	function wrongAnsers () {
	  $(".form-check-input").on( "click", function() {
	  		($(".form-check-input1").is(":checked"));
	  		wrongAns++;
		});
	}

		
	
		function decrement() {
		timer--;
		
		
		$("#start").html("<span>" + timer + "</span>");
		if (timer===0) {

			stop();
			
			
			$("#start").html("<span>" + "Time Up!" + "</span>");
			
			$("#question-1").html("");
			$(".display").html("<h3>" + "All Done!" + "</h3>" + "<br>");
			$(".display").append("<h3>" + "Correct Answers = " + correctAns + "</h3>" + "<br>");
			$(".display").append("<h3>" + "Wrong Answers = " + wrongAns + "</h3>" + "<br>");
	  		$(".display").append("<h3>" + "Unanswers = " + (unAnswered-(correctAns + wrongAns)) + "</h3>");
			console.log(correctAns);
		}

	}

	function done() {
		$("#done").on("click", function() {
			stop();
			$("#start").html("<span>" + "Submitted!" + "</span>");
			$("#question-1").html("");
			$(".display").html("<h3>" + "All Done!" + "</h3>" + "<br>");
			$(".display").append("<h3>" + "Correct Answers = " + correctAns + "</h3>" + "<br>");
			$(".display").append("<h3>" + "Wrong Answers = " + wrongAns + "</h3>" + "<br>");
  			$(".display").append("<h3>" + "Unanswers = " + (unAnswered-(correctAns + wrongAns)) + "</h3>");
  		});
		
	}


	function stop() {
		clearInterval(intervalId);
	}

	start();
	rightAnsers();
	wrongAnsers();
	done();		
});		

		