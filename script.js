document.getElementById("fetch-button").addEventListener("click", function() {
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json",
        data: {
            size: 10, // Fetch more events to demonstrate scrolling
            apikey: "YOUR_API_KEY_HERE" // Replace with your actual API key
        },
        async: true,
        dataType: "json",
        success: function(json) {
            if (json._embedded && json._embedded.events) {
                var events = json._embedded.events;
                var htmlContent = "";

                events.forEach(event => {
                    var eventName = event.name;
                    var eventDate = event.dates.start.localDate;
                    var eventId = event.id;

                    htmlContent += `
                        <div>
                            <strong>Event Name:</strong> ${eventName} <br>
                            <strong>Event Date:</strong> ${eventDate} <br>
                            <strong>Event ID:</strong> ${eventId}
                        </div>
                        <hr>
                    `;
                });

                // Display the data in the #data div
                document.getElementById("data").innerHTML = htmlContent;

                // Display a success message
                document.getElementById("message").textContent = "Data fetched successfully!";
            } else {
                document.getElementById("message").textContent = "No events found.";
            }
        },
        error: function(xhr, status, err) {
            document.getElementById("message").textContent = "Error fetching data: " + status + " - " + err;
        }
    });
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    const newTransformValue = `translateX(-${index * 100}%)`;
    document.querySelector('.slides').style.transform = newTransformValue;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto slide
setInterval(nextSlide, 4000);


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // You can replace the alert with the actual search functionality,
            // like redirecting to a search results page or filtering content dynamically.
        } else {
            alert('Please enter a search term');
        }
    }

    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
