$(document).ready(function() {

  extractJSONProperties(graph_json.graph);

  //Renders the cytoscape element on the page
    //with the given options
    window.cy = cytoscape({
      container: $('#csjs')[0],

// ** NOTE: REPLACE - WITH _ SO CYTOSCAPEJS WILL RENDER PROPERTIES

      //Style properties of NODE body
      style: cytoscape.stylesheet()
      .selector('node[width]').css({
        'width': 'data(width)'
      })
      .selector('node[height]').css({
        'height': 'data(height)'
      })
      .selector('node[shape]').css({
        'shape': 'data(shape)'
      })
      .selector('node[background_color]').css({
        'background-color': 'data(background_color)'
      })
      .selector('node[background_blacken]').css({
        'background-blacken': 'data(background_blacken)'
      })
      .selector('node[background_opacity]').css({
        'border-opacity': 'data(background_opacity)'
      })
      .selector('node[border_width]').css({
        'border-width': 'data(border_width)'
      })
      .selector('node[border_style]').css({
        'border-style': 'data(border_style)'
      })
      .selector('node[border_color]').css({
        'border-color': 'data(border_color)'
      })
      .selector('node[border_opacity]').css({
        'border-opacity': 'data(border_opacity)'
      })

      //BACKGROUND IMAGE PROPERTIES
      .selector('node[background_image]').css({
        'background-image': 'data(background_image)'
      })
      .selector('node[background_image_opacity]').css({
        'background-image-opacity': 'data(background_image_opacity)'
      })
      .selector('node[background_width]').css({
        'background-width': 'data(background_width)'
      })
      .selector('node[background_height]').css({
        'background-height': 'data(background_height)'
      })
      .selector('node[background_fit]').css({
        'background-fit': 'data(background_fit)'
      })
      .selector('node[background_repeat]').css({
        'background-repeat': 'data(background_repeat)'
      })
      .selector('node[background_position_x]').css({
        'background-position-x': 'data(background_position_x)'
      })
      .selector('node[background_position_y]').css({
        'background-position-y': 'data(background_position_y)'
      })
      .selector('node[background_clip]').css({
        'background-clip': 'data(background_clip)'
      })

      //LABEL PROPERTIES
      .selector('node[color]').css({
        'color': 'data(color)'
      })
      .selector('node[content]').css({
        'content': 'data(content)'
      })
      .selector('node[font_family]').css({
        'font-family': 'data(font_family)'
      })
      .selector('node[font_size]').css({
        'font-size': 'data(font_size)'
      })
      .selector('node[font_style]').css({
        'font-style': 'data(font_style)'
      })
      .selector('node[font_weight]').css({
        'font-weight': 'data(font_weight)'
      })
      .selector('node[text_transform]').css({
        'text-transform': 'data(text_transform)'
      })
      .selector('node[text_wrap]').css({
        'text-wrap': 'data(text_wrap)'
      })
      .selector('node[text_max_width]').css({
        'text-max-width': 'data(text_max_width)'
      })
      .selector('node[edge_text_rotation]').css({
        'edge-text-rotation': 'data(edge_text_rotation)'
      })
      .selector('node[text_opacity]').css({
        'text-opacity': 'data(text_opacity)'
      })
      .selector('node[text_outline_color]').css({
        'text-outline-color': 'data(text_outline_color)'
      })
      .selector('node[text_outline_opacity]').css({
        'text-outline-opacity': 'data(text_outline_opacity)'
      })
      .selector('node[text_outline_width]').css({
        'text-outline-width': 'data(text_outline_width)'
      })
      .selector('node[text_shadow_blur]').css({
        'text-shadow-blur': 'data(text_shadow_blur)'
      })
      .selector('node[text_shadow_color]').css({
        'text-shadow-color': 'data(text_shadow_color)'
      })
      .selector('node[text_shadow_offset_x]').css({
        'text-shadow-offset-x': 'data(text_shadow_offset_x)'
      })
      .selector('node[text_shadow_offset_y]').css({
        'text-shadow-offset-y': 'data(text_shadow_offset_y)'
      })
      .selector('node[text_shadow_opacity]').css({
        'text-shadow-opacity': 'data(text_shadow_opacity)'
      })
      .selector('node[text_background_shape]').css({
        'text-background-shape': 'data(text_background_shape)'
      })
      .selector('node[text_border_width]').css({
        'text-border-width': 'data(text_border_width)'
      })
      .selector('node[text_border_style]').css({
        'text-border-style': 'data(text_border_style)'
      })
      .selector('node[text_border_color]').css({
        'text-border-color': 'data(text_border_color)'
      })
      .selector('node[min_zoomed_font_size]').css({
        'min-zoomed-font-size': 'data(min_zoomed_font_size)'
      })
      .selector('node[text_halign]').css({
        'text-halign': 'data(text_halign)'
      })
      .selector('node[text_valign]').css({
        'text-valign': 'data(text_valign)'
      })

      //EDGE LINE PROPERTIES
      .selector('edge[width]').css({
        'width': 'data(width)'
      })
      .selector('edge[curve_style]').css({
        'curve-style': 'data(curve_style)'
      })
      .selector('edge[haystack_radius]').css({
        'haystack-radius': 'data(haystack_radius)'
      })
      .selector('edge[control_point_step_size]').css({
        'control-point-step-size': 'data(control_point_step_size)'
      })
      .selector('edge[control_point_distance]').css({
        'control-point-distance': 'data(control_point_distance)'
      })
      .selector('edge[control_point_weight]').css({
        'control-point-weight': 'data(control_point_weight)'
      })
      .selector('edge[line_color]').css({
        'line-color': 'data(line_color)'
      })
      .selector('edge[line_style]').css({
        'line-style': 'data(line_style)'
      })

      //EDGE ARROW PROPERTIES
      .selector('edge[source_arrow_color]').css({
        'source-arrow-color': 'data(source_arrow_color)'
      })
      .selector('edge[source_arrow_shape]').css({
        'source-arrow-shape': 'data(source_arrow_shape)'
      })
      .selector('edge[source_arrow_fill]').css({
        'source-arrow-fill': 'data(source_arrow_fill)'
      })
      .selector('edge[mid_source_arrow_color]').css({
        'mid-source-arrow-color': 'data(mid_source_arrow_color)'
      })
      .selector('edge[mid_source_arrow_shape]').css({
        'mid-source-arrow-shape': 'data(mid_source_arrow_shape)'
      })
      .selector('edge[mid_source_arrow_fill]').css({
        'mid-source-arrow-fill': 'data(mid_source_arrow_fill)'
      })
      .selector('edge[target_arrow_color]').css({
        'target-arrow-color': 'data(target_arrow_color)'
      })
      .selector('edge[target_arrow_shape]').css({
        'target-arrow-shape': 'data(target_arrow_shape)'
      })
      .selector('edge[target_arrow_fill]').css({
        'target-arrow-fill': 'data(target_arrow_fill)'
      })
      .selector('edge[mid_target_arrow_color]').css({
        'mid-target-arrow-color': 'data(mid_target_arrow_color)'
      })
      .selector('edge[mid_target_arrow_shape]').css({
        'mid-target-arrow-shape': 'data(mid_target_arrow_shape)'
      })
      .selector('edge[mid_target_arrow_fill]').css({
        'mid-target-arrow-fill': 'data(mid_target_arrow_fill)'
      })
      .selector('node:selected')
        .css({
          'border-width': 3,
          'border-color': '#ff0000'
      })
      .selector('edge:selected')
        .css({
          'width': 3,
          'line-color': '#ff0000',
          'target-arrow-color': '#ff0000',
          'source-arrow-color': '#ff0000'
      }),

      // default layout set to be arbor
      layout: getLayoutFromQuery(),

      ready: function() {

        //If there is a title for this graph,
        //Add it to the screen and adjust side margin
        if ($("#title").text().length > 0) {
          $("#graph_title").html("<h1>" + $("#title").text() + "</h1>");
          $(".side_menu").css("margin-top", -50);
        }

      	//Adding in the panzoom functionality 
      	this.panzoom();

      	// make the selection states of the elements mutable
      	this.elements().selectify();

      	// load the graph to display
  	    this.load(graph_json.graph, function(e) {
  	        console.log('working');
  	      }, function() {
  	        console.log('done');
            applyLayoutStyles();
            revealChatOnLoad();
  	    });

	    // enable user panning (hold the left mouse button to drag
      	// the screen)
      	this.userPanningEnabled(false);

        $("#move_green_right_button").click(function (e) {
         e.preventDefault();
         for (var i = 0; i < window.cy.elements().length; i++) {
          var testNode = window.cy.elements()[i];

          var nodeColor = testNode.style("background-color");

          if (nodeColor == "#01DF01") {
            var tempPosition = testNode.renderedPosition();
            testNode.renderedPosition({x:tempPosition.x + 50, y:tempPosition.y});  
          }
         }
        });

        $("#move_green_square_down_button").click(function (e) {
         e.preventDefault();
         for (var i = 0; i < window.cy.elements().length; i++) {
          var testNode = window.cy.elements()[i];
          var nodeColor = testNode.style("background-color");
          var nodeShape = testNode.style("shape");

          if (nodeColor == "#01DF01") {
            if (nodeShape == "rectangle") {
              var tempPosition = testNode.renderedPosition();
            testNode.renderedPosition({x:tempPosition.x, y:tempPosition.y + 50});  
            }
          }
         }
        });

        $("#select_purple_button").click(function (e) {
         e.preventDefault();
         for (var i = 0; i < window.cy.elements().length; i++) {
          var testNode = window.cy.elements()[i];

          var nodeColor = testNode.style("background-color");

          if (nodeColor == "#AC58FA") {
            var tempPosition = testNode.renderedPosition();
            testNode.select();
          }
         }
        });

        $("#select_circle_button").click(function (e) {
         e.preventDefault();
         for (var i = 0; i < window.cy.elements().length; i++) {
          var testNode = window.cy.elements()[i];

          var nodeShape = testNode.style("shape");

          if (nodeShape == "ellipse") {
            testNode.select();
          }
         }
        });

        $("#move_selected_down_button").click(function (e) {
         e.preventDefault();
         // console.log(graph_json.graph);
         for (var i = 0; i < window.cy.elements().length; i++) {
          var testNode = window.cy.elements()[i];
          var nodeColor = testNode.style("background-color");
          var nodeShape = testNode.style("shape");

          if (testNode.selected() && testNode.isNode()) {
            var tempPosition = testNode.renderedPosition();
            testNode.renderedPosition({x:tempPosition.x, y:tempPosition.y + 50});
          }
         }

        });

        $("#unselect_button").click(function (e) {
         e.preventDefault();
         for (var i = 0; i < window.cy.elements().length; i++) {
          var testNode = window.cy.elements()[i];
          testNode.unselect();
         }
        });

      }
    });

    //Allow a user to select multiple elements by dragging cursor across
    cy.boxSelectionEnabled(true);

    $('#accordion_design').accordion({
        collapsible: true,
        heightStyle: "content",
        autoHeight: false,
        clearStyle: true,
        active: 0
    });

    $("#accordion_information").accordion({
        collapsible: true,
        active: 0 ,
        heightStyle: "content"
    });

    $("#accordion_layouts").accordion({
        collapsible: true,
        active: 0 ,
        heightStyle: "content"
    });

    $("#save_layout").click(function(e) {
        e.preventDefault();

        var userId = $("#userId").text();
        var graphId = $("#graphId").text();
        var loggedIn = $("#loggedIn").text();

        //Replaces all spaces with '_' character for ease of saving
        var layoutName = $("#layout_name").val();
        if (layoutName && layoutName.length > 0) {
          layoutName = layoutName.replace(" ", "_");
        }

        if (layoutName == null || layoutName.length == 0) {
          alert("Please enter some text!");
          return;
        }

        //When save is clicked, it gets location of all the nodes and saves it
        //so that nodes can be placed in this location later on
        var nodes = window.cy.elements('node');
        var layout = [];
        for (var i = 0; i < Object.keys(nodes).length - 2; i++) {
           var nodeData = {
            'x': nodes[i]._private.position.x,
            'y': nodes[i]._private.position.y,
            'id': nodes[i]._private.data.id,
            'background_color': nodes[i]._private['style']['background-color']['strValue'],
            'shape': nodes[i]._private['style']['shape']['strValue']
           };
           layout.push(nodeData);
        }

        layout = JSON.stringify(layout);
        var feedback = $("#layout_note").val();

        //Post information about layout to GraphSpace
        $.post("../../../save_task_layout_through_ui/", {
          "user_id": userId,
          "graph_id": graphId,
          "layout_name": layoutName,
          "layout_owner": loggedIn,
          "layout": layout,
          "feedback": feedback
        }, function( data ) {
          if (data.StatusCode == 201) {
            window.location.href = $("#taskURL").text() + "?layout=" + layoutName + "&layout_owner=" + loggedIn
          } else {
            alert(data.Error);
          }
        });
    });

    $(".feedback").click(function(e) {
      e.preventDefault();

      var layout_name = $(this).val();
      var layout_owner = $(this).attr("id");
      var userId = $("#userId").text();
      var graphId = $("#graphId").text();
      var loggedIn = $("#loggedIn").text();

      fetchChatData(layout_name, layout_owner, userId, graphId, loggedIn);
    });

    function fetchChatData(layout_name, layout_owner, userId, graphId, loggedIn) {
      $.post("../../fetch_feedback/", {
        "user_id": userId,
        "graph_id": graphId,
        "layout_name": layout_name,
        "layout_owner": layout_owner
      }, function (data) {
        var messages = data.Message.feedback;
        $("#layout_feedback").html("");
        for (var i = 0; i < messages.length; i++) {
          var message = messages[i];
          if (message[0] == loggedIn) {
            $("#layout_feedback").append("<div class='mess'><div class='me'>" + message[0] + " said: " + message[1] + "</div></div><br>");
          } else {
            $("#layout_feedback").append("<div class='mess'><div class='other'>" + message[0] + " said: " + message[1] + "</div></div><br>");
          }
        }
      });

      $("#feedback_model").modal('toggle');

      $("#save_new_note").click(function (e) {
        e.preventDefault();

        var new_note = $("#feedback_note").val();

        if (new_note.length == 0) {
          return alert("Please enter some notes!");
        }

        $.post("../../add_feedback_note/", {
          "user_id": userId,
          "graph_id": graphId,
          "layout_name": layout_name,
          "layout_owner": layout_owner,
          "feedback_owner": loggedIn,
          "note": new_note
        }, function (data) {
          if (data.StatusCode == 201) {
            $("#feedback_note").val("");
            $("#layout_feedback").append("<div class='mess'><div class='me'>" + loggedIn + " said: " + new_note + "</div></div><br>");
          }
        });
      });
    }

    function getLayoutFromQuery() {

    //The following code retrieves the specified layout
    //of a graph to be displayed.
    //Some of them are pre-defined. Check Cytoscapejs.org
    var graph_layout = {
      name: 'random',
      padding: 10,
      fit:true,
      animate: false,
      // maxSimulationTime: 1000
    };

    var query = getQueryVariable("layout");

    if (query == "default_breadthfirst") {
      graph_layout = {
        name: "breadthfirst",
        padding: 10,
        fit: true,
        avoidOverlap: true,
        animate: false
      }
    } else if (query == "default_concentric") {
       graph_layout = {
        name: "concentric",
        fit: true,
        padding: 10,
        avoidOverlap: true,
        animate: false
      }
    } else if (query == "default_circle") {
       graph_layout = {
        name: "circle",
        padding: 10,
        fit: true,
        avoidOverlap: true,
        animate: false
      }
    } else if (query == "default_dagre") {
       graph_layout = {
        name: "dagre",
        fit: true,
        padding: 10,
        animate: true,
        nodeSep: 50,
        edgeSep: 50
      }
    } else if (query == 'default_cose') {
      graph_layout = {
        name: "cose",
        padding: 10,
        fit: true,
        animate: true,
        nodeOverlap: 30
      }
    } else if (query == "default_cola") {
      graph_layout = {
        name: "cola",        
        fit: true,
        nodeSpacing: function( node ){ return 20; },
        padding: 10,
        animate: true,
        avoidOverlap: true
      }
    }  else if (query == "default_arbor") {
      graph_layout = {
        name: "arbor",
        padding: 30,
        fit: false,
        animate: true,
        maxSimulationTime: 1000
      }
    }  else if (query == "default_springy") {
      graph_layout = {
        name: 'springy',

        animate: true, // whether to show the layout as it's running
        maxSimulationTime: 4000, // max length in ms to run the layout
        ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
        fit: true, // whether to fit the viewport to the graph
        padding: 30, // padding on fit
        boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
        random: false, // whether to use random initial positions
        infinite: false, // overrides all other options for a forces-all-the-time mode
        ready: undefined, // callback on layoutready
        stop: undefined, // callback on layoutstop

        // springy forces
        stiffness: 400,
        repulsion: 400,
        damping: 0.5
      }
    } else {

       if (layout && layout.json != null) {
        graph_layout = {
          name: 'preset',
          positions: JSON.parse(layout.json)
        };
      } else if (query) {
          alert("Layout does not exist or has not been shared yet!");
          var loc = window.location.href;
          var baseLoc = loc.substring(0, loc.indexOf("?"));
          window.location.href = baseLoc;
      }
    }
    return graph_layout;
}

function applyLayoutStyles() {
  if (layout) {

    parsed_json = JSON.parse(layout.json);
      for (var i in parsed_json) {
        node_obj = parsed_json[i];
        
        if (node_obj.hasOwnProperty("background_color")) {
          window.cy.$('[id="' + i + '"]').css('background-color', node_obj["background_color"]);
        }

        if (node_obj.hasOwnProperty("shape")) {
          window.cy.$('[id="' + i + '"]').css('shape', node_obj["shape"]);
        }
      }
  }
}

/** 
 * When user submits a layout for review.
 */
 $(".submit").click(function(e) {
    e.preventDefault();

    var layout_name = $(this).val();
    var layout_owner = $(this).attr("id");
    var userId = $("#userId").text();
    var graphId = $("#graphId").text();
    var loggedIn = $("#loggedIn").text();

    $.post("../../../submitTaskLayout/", {
      "layout_owner": layout_owner,
      "layout_name": layout_name,
      "user_id": userId,
      "graph_id": graphId, 
      "logged_in": loggedIn 
    }, function(data) {
      if (data.Error) {
        return alert(data.Error);
      } else {
        window.location.reload();
      }
    });
 });

/**
 * When a user wants to delete a layout.
 */
$(".delete").click(function(e) {
  e.preventDefault();

  var layout_name = $(this).val();
  var layout_owner = $(this).attr("id");
  var userId = $("#userId").text();
  var graphId = $("#graphId").text();

  $.post("../../../deleteTaskLayout/", {
    "layout_owner": layout_owner,
    "layout_name": layout_name,
    "user_id": userId,
    "graph_id": graphId
  }, function(data) {
    if (data.Error) {
      return alert(data.Error);
    } else {
      window.location.href = $("#taskURL").text();
    }
  });
});

//Gets query variables from the url
function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}

/**
 * Get all properties of the JSON
*/
function extractJSONProperties(graphJson) {
  var nodePropertyDictionary = {};
  var edgePropertyDictionary = {};

  //Get all the node properties
  for (var i = 0; i < graphJson.nodes.length; i++) {
    var node = graphJson.nodes[i].data;

    var keys = Object.keys(node);

    for (var j in keys) {
      var key = keys[j];
      if (key == "shape" || key == "background_color") {
        if (nodePropertyDictionary.hasOwnProperty(key)) {
          var curArray = nodePropertyDictionary[key];
          if (curArray.indexOf(node[key]) == -1) {
            curArray.push(node[key]);
            nodePropertyDictionary[key] = curArray;
          }
        } else {
          nodePropertyDictionary[key] = [node[key]];
        }
      }
    }
  }

  //Get all the edge properties
  for (var i = 0; i < graphJson.edges.length; i++) {
    var edge = graphJson.edges[i].data;
    var keys = Object.keys(edge);

    for (var j in keys) {
      var key = keys[j];
      if (edgePropertyDictionary.hasOwnProperty(key)) {
        var curArray = edgePropertyDictionary[key];
        curArray.push(edge[key]);
        edgePropertyDictionary[key] = curArray;
      } else {
        edgePropertyDictionary[key] = [edge[key]];
      }
    }
  }
  
  var layoutPropertyDictionary = {}
  if (layout) {
    var parsed_json = JSON.parse(layout.json);
    for (var i in parsed_json) {
      var node_obj = parsed_json[i];
      
      var colorKey = "background_color";
      var shapeKey = "shape"

      if (node_obj.hasOwnProperty(colorKey)) {
        if (layoutPropertyDictionary.hasOwnProperty(colorKey)) {
          var curArray = layoutPropertyDictionary[colorKey];
          if (curArray.indexOf(node_obj[colorKey]) == -1) {
            curArray.push(node_obj[colorKey]);
            layoutPropertyDictionary[colorKey] = curArray;
          }
        } else {
          layoutPropertyDictionary[colorKey] = [node_obj[colorKey]];
        }
      }

      if (node_obj.hasOwnProperty(shapeKey)) {
        if (layoutPropertyDictionary.hasOwnProperty(shapeKey)) {
          var curArray = layoutPropertyDictionary[shapeKey];
          if (curArray.indexOf(node_obj[shapeKey]) == -1) {
            curArray.push(node_obj[shapeKey]);
            layoutPropertyDictionary[shapeKey] = curArray;
          }
        } else {
          layoutPropertyDictionary[shapeKey] = [node_obj[shapeKey]];
        }
      }
    }
  } else {
    layoutPropertyDictionary = nodePropertyDictionary;
  }

  //Go through and display all the different properties in template
  for (var key in layoutPropertyDictionary) {
    var subtitle = "";
    if (key == "background_color") {
      subtitle = "Background Color";
    } else {
      subtitle = "Shape";
    }
    $("#selection").append("<p style='text-align: left; font-weight: bold;'>" + subtitle + "</p>");
    var valueArray = layoutPropertyDictionary[key];
    var checkboxString = "<p style='text-align: left;'>";

    for (var index in valueArray) {
      var value = colourNameToHex(valueArray[index]);
      if (key == "background_color") {
          checkboxString += '<input id="'+value.substring(1)+'" type="checkbox" name="colors">&nbsp;<canvas class="canvas" id="'+value.substring(1)+'" width="20" height="20"></canvas>&nbsp;&nbsp;&nbsp;';
      } else {
        checkboxString += '<input id="'+value+'" type="checkbox" name="shapes">&nbsp;'+ value[0].toUpperCase() + value.slice(1) +'&nbsp;&nbsp;&nbsp;';
      }
      if ((index+1) % 3 == 0) {
        checkboxString+="<br><br>";
      }
    }
    checkboxString += "</p>";
    $("#selection").append(checkboxString);

    $(".canvas").each(function() {
      $(this)[0].getContext("2d").fillStyle = "#"+$(this)[0].id;
      $(this)[0].getContext("2d").fillRect(0,0,20,20);
    });
  }
};

var colorValues = []
$('input:checkbox[name=colors]').click(function() {
  colorValues = $('input:checkbox[name=colors]:checked').map(function() {
    return "#" + this.id
  }).get();
  
  combineSelections("background-color", colorValues, "shape", shapeValues);

});

var shapeValues = []
$('input:checkbox[name=shapes]').click(function() {
  shapeValues = $('input:checkbox[name=shapes]:checked').map(function() {
    return this.id
  }).get();

  combineSelections("shape", shapeValues, "background-color", colorValues);
});

function combineSelections(selection1, selectionArray1, selection2, selectionArray2) {

    var matching_shape_nodes = []

    var shapes = []
    for (var i = 0; i < selectionArray1.length; i++) {
        var shape = selectionArray1[i];
      for (var j = 0; j < window.cy.nodes().length; j++) {
            var node = window.cy.nodes()[j];

            var nodeShape = node.style(selection1);
            if (selectionArray1.indexOf(nodeShape) != -1) {
              shapes.push(nodeShape);
              matching_shape_nodes.push(node["_private"]["data"]["id"]);
            }
      }
    }

    var matching_color_nodes = []
    var colors = []
    for (var i = 0; i < selectionArray2.length; i++) {
        var color = selectionArray2[i];
      for (var j = 0; j < window.cy.nodes().length; j++) {
            var node = window.cy.nodes()[j];

            var nodeColor = node.style(selection2);
            if (selectionArray2.indexOf(nodeColor) != -1) {
              colors.push(nodeColor);
              matching_color_nodes.push(node["_private"]["data"]["id"]);
            }
      }
    }

    matching_nodes = []
    if (selectionArray2.length > 0 && selectionArray1.length > 0) {
      matching_nodes = intersect(matching_shape_nodes, matching_color_nodes);
    } else if (selectionArray2.length > 0) {
      matching_nodes = matching_color_nodes;
    } else {
      matching_nodes = matching_shape_nodes;
    }

    cy.nodes().unselect();

    for (var i = 0; i < matching_nodes.length; i++) {
      cy.$("#" + matching_nodes[i]).select();
    }
}

var modifiedColor

$("#selectionPalette").spectrum({
    showPalette: true,
    palette: [ ],
    showSelectionPalette: true, // true by default
    change: function(color) {
      modifiedColor = color.toHexString();

      for (var j = 0; j < window.cy.nodes().length; j++) {
            var node = window.cy.nodes()[j];

            if (node.selected()) {
              node.style("background-color", modifiedColor);
              node.style("border-color", modifiedColor);
              node.style("text-outline-color", modifiedColor);
            }
      }
    }
    
});

// $('#valueInput').bind("DOMSubtreeModified", function() {
//   modifiedColor = "#" + $(this).text();

//   for (var j = 0; j < window.cy.nodes().length; j++) {
//         var node = window.cy.nodes()[j];

//         if (node.selected()) {
//           node.style("background-color", modifiedColor);
//           node.style("border-color", modifiedColor);
//           node.style("text-outline-color", modifiedColor);
//         }
//   }

// });

var modifiedShape
$(".dropdown-menu li a").click(function (){
    modifiedShape = $(this).data("value");
    console.log(modifiedShape);

    for (var j = 0; j < window.cy.nodes().length; j++) {
          var node = window.cy.nodes()[j];

          if (node.selected()) {
            node.style("shape", modifiedShape);
          }
    }
});

$("#group").click(function (e) {
    e.preventDefault();

    var center = {x: window.cy.width()/2, y: window.cy.height()/2};
    var sideLength = 100;

    for (var j = 0; j < window.cy.nodes().length; j++) {
          var node = window.cy.nodes()[j];

          if (node.selected()) {
            var position = node.renderedPosition();

            if (position.x < (center.x - sideLength/2)) {
              position.x += 10;
              
            }
            if (position.x > (center.x + sideLength/2)) {
              position.x -= 10;
            }

            if (position.y < (center.y - sideLength/2)) {
              position.y += 10;
            }
            if (position.y > (center.y + sideLength/2)) {
              position.y -= 10;
            }

            node.renderedPosition(position);
          }
    }
});

function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        if (b.indexOf(e) !== -1) return true;
    });
}

/** 
* Returns the HEX value of a color
*/
function colourNameToHex(colour)
{
    var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (colour in colours) {
      return colours[colour]
    }

    return colour;
}

function revealChatOnLoad() {
  var layout_name = getQueryVariable("layout");
  var layout_owner = getQueryVariable("layout_owner");
  if (getQueryVariable("showChat") && layout && layout_owner) {
      var userId = $("#userId").text();
      var graphId = $("#graphId").text();
      var loggedIn = $("#loggedIn").text();

      fetchChatData(layout_name, layout_owner, userId, graphId, loggedIn);
  }
}


});