// $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey={apikey}",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });


  $.ajax({
   type: "GET",
   url: "https://app.ticketmaster.com/discovery/v2/events.json",
   data: {
       size: 1,
       apikey: "YOUR_API_KEY_HERE"
   },
   async: true,
   dataType: "json",
   success: function(json) {
       console.log(json);
       // Parse the response.
       if (json._embedded && json._embedded.events) {
           var events = json._embedded.events;
           events.forEach(event => {
               console.log("Event Name: " + event.name);
               console.log("Event Date: " + event.dates.start.localDate);
               // Add other details or actions you need
           });
       } else {
           console.log("No events found.");
       }
   },
   error: function(xhr, status, err) {
       console.error("Error: " + status + " - " + err);
   }
});
