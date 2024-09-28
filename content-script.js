// Function to check if the modal is open by checking for the CSS variable "--ig-dropdown-background"
const isModalOpen = () => {
	const modalContainer = document.querySelector('[style*="--ig-dropdown-background"]');
	return modalContainer !== null;
};

// Function to find and click the "Next" or "Go back" button
const navigateGallery = (direction) => {
	let button;
	if (direction === 'next') {
		button = document.body.querySelector('button[aria-label="Next"]');
	} else if (direction === 'previous') {
		button = document.body.querySelector('button[aria-label="Go back"]');
	}

	if (button) {
		button.click();
	}
};

// Event listener for Shift + Arrow keys
document.addEventListener('keydown', (event) => {
	if (!isModalOpen()) return;

	// Check if Shift is held down
	if (event.shiftKey) {
		// Navigate to the next image if the right arrow is pressed
		if (event.key === 'ArrowRight') {
			navigateGallery('next');
		}
		// Navigate to the previous image if the left arrow is pressed
		else if (event.key === 'ArrowLeft') {
			navigateGallery('previous');
		}
	}
});
