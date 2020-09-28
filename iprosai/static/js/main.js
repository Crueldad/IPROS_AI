
(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
	
	const healthbody = document.querySelector("#health_table > tbody");
	var data = JSON.parse("{{sql_query|escapejs}}");

	window.onload = (event) => {
		populatehealth(data);
		
	};

	function populatehealth (data) {
		while (healthbody.firstChild) {
			healthbody.removeChild(healthbody.firstChild);
	} 
		var num = 1;
		data.forEach((row) => {
			const tr = document.createElement("tr");
			tr.setAttribute('class', 'row100');
			row.forEach((cell) =>{
				const td = document.createElement("td");
				td.setAttribute('class', 'column100 column1');
				td.setAttribute('data-column', 'column1');
				num += 1
				td.textContent = cell;
				tr.appendChild(td);
			
			});
			healthbody.appendChild(tr);

		});

}

})(jQuery);



