$(document).ready(function() {

	/**
	* When the user wants to end the current task.
	*/
	$(".end_task").click(function (e) {
		var graph_id = $(this).attr('id');
		var user_id = $(this).val();

		$.post("/end_task_through_ui/", {
			"graph_id": graph_id,
			"user_id": user_id
		}, function(data) {

	        if (data.Error) {
	          return alert(data.Error);
	        }
	        window.location.reload();
		});
	});

});