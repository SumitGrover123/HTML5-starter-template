/* Image show/hide image */
toggleButtonText = btn_ID_Par=> btn_ID_Par.innerHTML = btn_ID_Par.innerHTML=='Show Image'?'Hide Image':'Show Image';

function toggleImageVisibility(image_ID_Par) {
	var image_Var = document.getElementById(image_ID_Par);
	if (image_Var.style.display === "none") {
		image_Var.style.display = "block";
	} else {
		image_Var.style.display = "none";
	}
}

/* Last edit: 2024-12-10, 14:43 IST */