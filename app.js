let tab = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
];
/*
const $ = document.querySelector("");
*/
const $generate_btn = document.querySelector("#generate-btn");
const $btn_add = document.querySelector(".btn_add");
const $palette_container = document.querySelector(".palette-container");
const $copys = document.querySelectorAll(".copy");

$generate_btn.addEventListener("click", () => {
	const $colors = document.querySelectorAll(".color");
	const $hex_values = document.querySelectorAll(".hex-value");
	for (let i = 0; i < $colors.length; i++) {
		let box = $colors[i];
		let text = $hex_values[i];
		generatecolor(box, text);
	}
});

$btn_add.addEventListener("click", () => {
	const new_color = create_Box_Color();

	$palette_container.appendChild(new_color);
});

const $hex_values = document.querySelectorAll(".hex-value");
for (let i = 0; i < $copys.length; i++) {
	const hex = $hex_values[i];
	const $copy = $copys[i];

	$copy.addEventListener("click", () => {
		copy(hex.textContent);
	});
}

function generatecolor(box, text_box) {
	let the_color = "#";

	for (let h = 0; h < 6; h++) {
		the_color += tab[Math.floor(Math.random() * tab.length)];
	}

	box.style.background = the_color;
	text_box.textContent = the_color;
}

function create_Box_Color() {
	const box_color = document.createElement("div");
	const color = document.createElement("div");
	const box_info = document.createElement("div");
	const info = document.createElement("span");
	const crlt_c = document.createElement("i");

	box_color.classList.add("color-box");
	color.classList.add("color");
	box_info.classList.add("color-info");
	info.classList.add("hex-value");
	crlt_c.classList.add("far");
	crlt_c.classList.add("fa-copy");
	crlt_c.classList.add("copy-btn");
	crlt_c.classList.add("copy");

	box_info.appendChild(info);
	box_info.appendChild(crlt_c);
	box_color.appendChild(color);
	box_color.appendChild(box_info);

	generatecolor(color, info);

	crlt_c.addEventListener("click", () => {
		copy(info.textContent);
	});

	return box_color;
}

function copy(text) {
	navigator.clipboard.writeText(text);
}
