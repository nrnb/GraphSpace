$(document).ready(function() {

	$("tr").click(function() {
		if ($(this).attr("event_type") != undefined) {
			var href = constructURLFromEventType($(this).attr("event_type"), $(this).attr("graph_id"), $(this).attr("user_id"), $(this).attr("group_id"), $(this).attr("group_owner"), $(this).attr("layout_name"), $(this).attr("layout_owner"));
			window.location.href = href;			
		}
	});

	function constructURLFromEventType(event_type, graph_id, user_id, group_id, group_owner, layout_name, layout_owner) {
		var href = $("#url").text();
		switch(parseInt(event_type)) {
			case 1: 
				href += "graphs/" + user_id + "/" + graph_id + "/";
				return href;
			case 2:
				href += "groups/" + group_owner + "/" + group_id + "/";
				return href;
			case 3:
				href += "graphs/" + user_id + "/" + graph_id + "?layout=" + layout_name + "&layout_owner=" + layout_owner;
				return href;
			case 4:
				href += "tasks/" + user_id + "/" + graph_id + "/";
				return href;
			case 5:
			case 6:
			case 7:
				href = "";
				return href;
			case 8:		
			case 9:
				href += "tasks/" + user_id + "/" + graph_id + "?layout=" + layout_name + "&layout_owner=" + layout_owner;
				return href;
			case 10:
				href += "tasks/" + user_id + "/" + graph_id + "/";
				return href;
			case 11:
				href = "";
				return href;
			case 12:
				href += "tasks/" + user_id + "/" + graph_id + "?layout=" + layout_name + "&layout_owner=" + layout_owner + "&showChat=true";
				return href;
		}
	};

});