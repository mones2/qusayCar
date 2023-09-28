document.addEventListener('DOMContentLoaded', function () {
    const carImageInput = document.getElementById("carImage");
    const submitButton = document.querySelector("input[type='submit']");

    carImageInput.addEventListener("change", function (event) {
        if (this.files && this.files[0]) {
            let label = document.querySelector(".camera-icon");
            label.innerHTML = `<i class="fas fa-camera"></i> ${this.files[0].name}`;

            // Display a preview of the uploaded image
            const imgPreview = document.createElement('img');
            imgPreview.src = URL.createObjectURL(this.files[0]);
            imgPreview.style.maxWidth = '300px';
            imgPreview.style.marginTop = '10px';
            const container = document.querySelector('.file-input-container');
            // Remove existing preview
            const existingPreview = container.querySelector('img');
            if (existingPreview) {
                container.removeChild(existingPreview);
            }
            container.appendChild(imgPreview);
        }
    });

    submitButton.addEventListener("click", function (event) {
        const nameInput = document.querySelector("input[name='name']");
        const emailInput = document.querySelector("input[name='email']");
        const phoneInput = document.querySelector("input[name='phone']");

        // Simple validation for demonstration
        if (!nameInput.value || !emailInput.value || !phoneInput.value) {
            alert("Please fill out the customer info section.");
            event.preventDefault(); // This will prevent the form from submitting if the validation fails.
        }
    });
});
