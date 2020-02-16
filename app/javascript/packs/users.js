// $(document).ready(function() {
//   $('#userListing').DataTable({
//     searching: false,
//     "bLengthChange": false,
//     "bFilter": true,
//   })
// });

$(document).ready(function() {
  $('#userListing').DataTable( {
    //searching: false,
    "bLengthChange": false,
    "ordering": false,
    initComplete: function () {
      this.api().columns().every( function () {
        var column = this;
        if($(column.header()).hasClass("has-filter")){
          var select = $('<select><option value="">All</option></select>')
              .appendTo( $(column.footer()).empty() )
              .on( 'change', function () {
                  var val = $.fn.dataTable.util.escapeRegex(
                      $(this).val()
                  );

                  column
                      .search( val ? '^'+val+'$' : '', true, false )
                      .draw();
              } );

            column.data().unique().sort().each( function ( d, j ) {
              select.append( '<option value="'+d+'">'+d+'</option>' )
            });
          }
      });
    }
  });
});
