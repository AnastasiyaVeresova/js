if ("geolocation" in navigator) {
	/* местоположение доступно */
} else {
	/* местоположение недоступно */
}


navigator.geolocation.getCurrentPosition((position) => {
	const { latitude, longitude } = position.coords;
	console.log("Географические координаты устройства", latitude, longitude);
});


// let watchId = navigator.geolocation.watchPosition(({ coords }) => {
// 	console.log(
// 		"Устройство обновило местоположение",
// 		coords.latitude,
// 		coords.longitude
// 	);
// });

navigator.geolocation.clearWatch(watchId);


const handlePositionSuccess = ({ coords }) => {
	console.log(
		"Устройство обновило местоположение",
		coords.latitude,
		coords.longitude
	);
};
// const handlePositionError = (error) => {
// 	console.log("Извините, местоположение недоступно", error);
// };
const positionOptions = {
	enableHighAccuracy: true,
	maximumAge: 30000,
	timeout: 1000 * 30,
};
const watchId = navigator.geolocation.watchPosition(
	handleSuccessLocation,
	handleLocationError,
	positionOptions
);


const handlePositionError = (error) => {
	switch (error.code) {
		case 1:
			console.log("Пользователь ограничил доступ к местоположению");
			break;
		case 2:
			console.log("Ошибка устройства определения местоположения");
			break;
		case 3:
			console.log("Достигнут тайм-аут");
			break;
		default:
			console.log("Извините, местоположение недоступно", error);
			break;
	}
};



const box = document.querySelector("#box");
console.log(box.scrollTop, box.scrollLeft);
// Устанавливаем количество прокрученных пикселей
box.scrollTop = 500;


const rulesElement = document.getElementById("rules");
const agreeCheckbox = document.getElementById("agree");
const nextStepButton = document.getElementById("nextstep");
const { scrollHeight, scrollTop, clientHeight } = rulesElement;
let isRead = false;
const handleCheckReading = () => {
	if (isRead) {
		return;
	}
	isRead = scrollHeight - scrollTop === clientHeight;
	agreeCheckbox.disabled = nextStepButton.disabled = !isRead;
};
rulesElement.addEventListener("scroll", handleCheckReading, false);



window.scrollTo(0, 1000);
// Этот код меняет поведение прокрутки на smooth
window.scrollTo({
	top: 1000,
	behavior: "smooth",
});



const hiddenElement = document.getElementById("box");
const button = document.querySelector("button");
const handleButtonClick = () => {
	hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
};
button.addEventListener("click", handleButtonClick);


const handleDragLeave = ({ target }) => {
	target.classList.remove("over");
};
// items.forEach((item) => {
// 	item.addEventListener("dragstart", handleDragStart);
// 	item.addEventListener("dragover", handleDragOver);
// 	item.addEventListener("dragenter", handleDragEnter);
// 	item.addEventListener("dragleave", handleDragLeave);
// 	item.addEventListener("dragend", handleDragEnd);
// });





// const items = document.querySelectorAll(".container .box");
// const handleDragStart = ({ target }) => {
// 	target.style.opacity = "0.4";
// };
// const handleDragEnd = ({ target }) => {
// 	target.style.opacity = "1";
// };
// items.forEach((item) => {
// 	item.addEventListener("dragstart", handleDragStart);
// 	item.addEventListener("dragend", handleDragEnd);
// });


const items = document.querySelectorAll(".container .box");
// const handleDragStart = ({ target }) => {
// 	target.style.opacity = "0.4";
// };
const handleDragEnd = ({ target }) => {
	target.style.opacity = "1";
	items.forEach((item) => {
		item.classList.remove("over");
	});
};
const handleDragOver = (event) => {
	if (event.cancelable) {
		event.preventDefault();
	}
	return false;
};
const handleDragEnter = ({ target }) => {
	target.classList.add("over");
};

// const handleDrop = (event) => {
// event.stopPropagation()
// return false
// }
// items.forEach((item) => {
// item.addEventListener('dragstart', handleDragStart)
// item.addEventListener('dragover', handleDragOver)
// item.addEventListener('dragenter', handleDragEnter)
// item.addEventListener('dragleave', handleDragLeave)
// item.addEventListener('dragend', handleDragEnd)
// item.addEventListener('drop', handleDrop)
// })



const handleDragStart = ({ target }) => {
	target.style.opacity = "0.4";
	e.dataTransfer.effectAllowed = "move";
	e.dataTransfer.setData("text/html", target.innerHTML);
};


const handleDrop = (event) => {
	event.stopPropagation();
	const sourceElementHtml = e.dataTransfer.getData("text/html");
	if (event.target.innerHtml === sourceElementHtml) {
		return;
	}
	event.target.innerHtml = sourceElementHtml;
	return false;
};
