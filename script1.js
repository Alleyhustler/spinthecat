const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spinButton');

// Set up a container for the message box within the body
const messageContainer = document.createElement('div');
messageContainer.classList.add('message-container');
document.body.appendChild(messageContainer);

// Define your wheel options and sections
const options = ['https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/360_F_678341834_RIflXrrwXxViWDjB2u3Cv6aBM35PNd71-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/4d0cbff9ff8fce081ea5d12269c52e51822a4dc1-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/51e1c1e3f6fba151c520655b21e4b9f0-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/51WHgHxF5YL._AC_UF1000_1000_QL80_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/74f4f548392fbdafbe8a5d9764c83eaf-removebg-preview.png'];
const numOptions = options.length;
const degreesPerOption = 360 / numOptions;

// Define an array of colors
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']; // Add more colors as needed

// Function to draw the wheel sections with multicolor rectangles
function drawWheelSectionsMulticolor() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the wheel sections with multicolor rectangles
    for (let i = 0; i < numOptions; i++) {
        const sliceAngle = (2 * Math.PI) / numOptions;
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) / 2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(sliceAngle * i);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, 0, sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length]; // Assign a color from the array based on the index
        ctx.fill();
        ctx.restore();

        // Name each rectangle as "cat"
        ctx.font = '14px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Cat', x + Math.cos(sliceAngle * i + sliceAngle / 2) * radius * 0.8, y + Math.sin(sliceAngle * i + sliceAngle / 2) * radius * 0.8);
    }

    // Draw the center circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
}

// Call drawWheelSectionsMulticolor function when the page loads
drawWheelSectionsMulticolor();

// Define a flag to track whether the wheel is spinning
let isSpinning = false;

// Function to spin the wheel
function spinWheel() {
    // If the wheel is already spinning, do nothing
    if (isSpinning) {
        return;
    }

    // Set the flag to true to indicate that the wheel is spinning
    isSpinning = true;

    // Disable the spin button to prevent multiple clicks
    spinButton.disabled = true;

    const randomDegrees = Math.floor(Math.random() * 360) + 720; // Random rotation between 720 and 1080 degrees
    canvas.style.transition = 'transform 3s ease-out';
    canvas.style.transform = `rotate(${randomDegrees}deg)`;

    // Listen for the end of the spinning animation
    canvas.addEventListener('transitionend', () => {
        // Calculate the winning option
        const winningIndex = Math.floor(randomDegrees % 360 / degreesPerOption);
        const winningOption = options[winningIndex];

        // Create a new element to display the winning message
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box');

        // Create an image element for the winning option
        const winningImg = new Image();
        winningImg.src = winningOption;

        // Add an event listener to check when the image is loaded
        winningImg.onload = () => {
            console.log("Image loaded successfully");

            // Append the image to the message box
            messageBox.appendChild(winningImg);

            // Add text to the message box
            const text = document.createElement('p');
            text.textContent = "Congratulations mf! Here is your cat, go buy $STC";
            messageBox.appendChild(text);

            // Append the message box to the body
            document.body.appendChild(messageBox);

            // Remove the message box after 5 seconds
            setTimeout(() => {
                messageBox.remove();
                // Reset the flag to indicate that the wheel has stopped spinning
                isSpinning = false;
                // Re-enable the spin button
                spinButton.disabled = false;
            }, 5000);
        };

        // Add an event listener to handle image loading errors
        winningImg.onerror = () => {
            console.error("Failed to load image");

            // If the image fails to load, still append the message box without the image
            document.body.appendChild(messageBox);

            // Remove the message box after 5 seconds
            setTimeout(() => {
                messageBox.remove();
                // Reset the flag to indicate that the wheel has stopped spinning
                isSpinning = false;
                // Re-enable the spin button
                spinButton.disabled = false;
            }, 5000);
        };
    }, { once: true }); // Ensure the event listener only fires once
}


// Event listener for the spin button
spinButton.addEventListener('click', spinWheel);
