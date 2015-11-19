$(document).ready(function() {

	/**
	* When the user wants to end the current task.
	*/
	$(".end_task").click(function (e) {
		var graph_id = $(this).attr('id');
		var user_id = $(this).val();

		//User confirms they want to end the task
		$("#end_task").on('click', function(e) {
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
});