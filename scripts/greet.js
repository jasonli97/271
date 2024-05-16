console.log("There is another event listener hidden click around and see if you can find it! Please exit the inspect view to find it.");

document.addEventListener('DOMContentLoaded', function() {
    function showGreeting() {
        var today = new Date();
        var hour = today.getHours();

        var greeting;
        if (hour >= 5 && hour < 12) {
            greeting = "Good Morning";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        var userName = "Alex"; // Demo Name

        var greetingMessage = `<h1 id="greetingMessage">${greeting}, ${userName}!</h1>`;
        var contentDiv = document.getElementById('greeting');
        contentDiv.innerHTML += greetingMessage;

        // Add event listener for profile picture click
        var profilePic = document.getElementById('profile_pic');
        profilePic.addEventListener('click', function() {
            // Prompt user for a new name
            var newName = prompt('Enter a new name:');

            // Update greeting message with the new name
            if (newName) {
                userName = newName;
                document.getElementById('greetingMessage').innerText = `${greeting}, ${userName}!`;
            }
        });
    }

    showGreeting();
});
