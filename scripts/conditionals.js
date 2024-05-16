//This function will check the current date and time of the user and then write a message of whether or not chat services are online or not
function availability() {
    //Gets current date and time
    var now = new Date();
    var day = now.getDay(); // Returns 0 for Sunday, 1 for Monday, and so on
    var hour = now.getHours();

    var avaliabilityDiv = document.getElementById('avaliability');

    // Check if it's a weekend (Saturday or Sunday)
    if (day === 0 || day === 6) {
        avaliabilityDiv.innerHTML = "<h3>Please contact us starting at 8 AM on Monday.</h3>";
    } else {
        // If user logins before 8 they will be greeted with this message
        if (hour < 8) {
            avaliabilityDiv.innerHTML = "<h3>We are ready to help you starting at 8AM.";
        //If user logs in at or after 5PM
        } else if (hour >= 17) {
            //and if its a friday as well then this message pops up
            if (day === 5) {
                avaliabilityDiv.innerHTML = "<h3>We are closed for the rest of the day and the weekend. Please contact us on Monday at 8AM.</h3>";
            //however if its any other weekday it will at or after 5pm it will print this
            } else {
                avaliabilityDiv.innerHTML = "<h3> We'll return and be ready to assist you tomorrow at 8 AM!</h3>";
            }
        //Finally if user logs in during business hours they are greeted with this message
        } else {
            avaliabilityDiv.innerHTML = "<h3> We are ready to help! Press the link above.</h3>";
        }
    }
}

//Calls the function
availability();