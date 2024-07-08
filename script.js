document.addEventListener('DOMContentLoaded', function() {
    const bubble = document.getElementById('bubble');
    const sensitivity = 2; // Adjust the sensitivity factor as needed

    function updateBubble(event) {
        // Get the x and y tilt values
        let xTilt = event.beta;  // In degree in the range [-180,180)
        let yTilt = event.gamma; // In degree in the range [-90,90)

        // Ensure xTilt is in the range [-90, 90]
        if (xTilt > 90) {
            xTilt = 90;
        }
        if (xTilt < -90) {
            xTilt = -90;
        }

        // Calculate the position of the bubble with sensitivity
        let left = (50 - (yTilt * sensitivity)).toFixed(2);
        let top = (50 - (xTilt * sensitivity)).toFixed(2);

        // Update bubble position
        bubble.style.left = `calc(${left}% - 20px)`;
        bubble.style.top = `calc(${top}% - 20px)`;
    }

    // Check if the device orientation event is available
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', updateBubble, true);
    } else {
        alert('Device orientation not supported');
    }
});
