$( function() {

  $( "a", ".answer" ).draggable({
     
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      // helper: "clone",
      cursor: "move"
    });

   $(".match div").droppable({
      accept: ".answer > div > a",
      tolerance: 'intersect',
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) {
        var drop_p = $(this).offset();
        var drag_p = ui.draggable.offset();
        var left_end = drop_p.left - drag_p.left;
        var top_end = drop_p.top - drag_p.top;
        ui.draggable.animate({
            top: '+=' + top_end,
            left: '+=' + left_end
        }, 100 );
        
        
      }
    });

   $(".answer div").droppable({
      accept: ".answer > div > a",
      tolerance: 'intersect',
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) {

        var drop_p = $(this).offset();
        var drag_p = ui.draggable.offset();
        var left_end = drop_p.left - drag_p.left;
        var top_end = drop_p.top - drag_p.top;
        ui.draggable.animate({
          top: '+=' + top_end,
          left: '+=' + left_end
        }, 100); 
       
      }
    });


} );