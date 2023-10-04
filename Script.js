document.addEventListener('DOMContentLoaded', function () {
    const carImageInput = document.getElementById("carImages");
    const submitButton = document.querySelector("input[type='submit']");
    const vinBtn = document.getElementById("vinBtn");
    const plateBtn = document.getElementById("plateBtn");
    const idInput = document.getElementById("idValue");
    const stateSelect = document.getElementById("stateSelect");

    function toggleIDInput(option) {
        if (option === 'vin') {
            vinBtn.classList.add("active");
            plateBtn.classList.remove("active");
            idInput.placeholder = "Enter VIN";
            idInput.name = "vin";
            stateSelect.style.display = "none";  // Hide the state dropdown
        } else if (option === 'plate') {
            vinBtn.classList.remove("active");
            plateBtn.classList.add("active");
            idInput.placeholder = "License Plate";
            idInput.name = "licensePlate";
            stateSelect.style.display = "inline-block";  // Show the state dropdown
        }
    }

    // Initial setup: make sure correct fields are displayed based on selected option
    if (vinBtn.classList.contains("active")) {
        toggleIDInput('vin');
    } else if (plateBtn.classList.contains("active")) {
        toggleIDInput('plate');
    }

    // Attach the toggle function to buttons
    vinBtn.addEventListener('click', function() {
        toggleIDInput('vin');
    });

    plateBtn.addEventListener('click', function() {
        toggleIDInput('plate');
    });

    carImageInput.addEventListener("change", function (event) {
        const container = document.querySelector('.file-input-container');
        const existingPreviews = container.querySelectorAll('img');
        existingPreviews.forEach(img => container.removeChild(img));

        if (this.files && this.files.length > 0) {
            Array.from(this.files).forEach(file => {
                const imgPreview = document.createElement('img');
                imgPreview.src = URL.createObjectURL(file);
                imgPreview.style.maxWidth = '300px';
                imgPreview.style.marginTop = '10px';
                container.appendChild(imgPreview);
            });
        }
    });

    submitButton.addEventListener("click", function (event) {
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea, select');
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
                input.classList.add('invalid');  // Add 'invalid' class
            } else {
                input.classList.remove('invalid');  // Remove 'invalid' class if input is filled
            }
        });

        if (!allFilled) {
            alert('Please fill out all fields before submitting.');
            event.preventDefault();
        }
    });
});
