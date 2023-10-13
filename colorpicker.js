const colorPicker = document.getElementById('colorPicker');
        const selectedColor = document.getElementById('selectedColor');

        colorPicker.addEventListener('input', (event) => {
            const selectedValue = event.target.value;
            selectedColor.style.backgroundColor = selectedValue;
            selectedColor.textContent = selectedValue;
        });