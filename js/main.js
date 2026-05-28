// Generic Form Alert Processing Engine
function handleFormSubmission(event, outputAlertText) {
    event.preventDefault();
    alert(outputAlertText);
    event.target.reset();
}

// Donor Portal dropdown visual controller
function toggleAidInputs() {
    const dropdown = document.getElementById('aidTypeDropdown');
    if (!dropdown) return;
    
    const selectValue = dropdown.value;
    const cashSection = document.getElementById('cash-input-group');
    const cargoSection = document.getElementById('cargo-input-group');

    if (selectValue === 'cash') {
        cashSection.classList.remove('hidden-block');
        cargoSection.classList.add('hidden-block');
    } else {
        cashSection.classList.add('hidden-block');
        cargoSection.classList.remove('hidden-block');
    }
}
