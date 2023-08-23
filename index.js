const inputWidth = document.querySelector("#input-width");
const inputLength = document.querySelector("#input-length");
const radioAll = document.querySelectorAll(".radio-input");
const radioDouble = document.querySelector("#radio-double");
const radioSingle = document.querySelector("#radio-single");
const parameterWidth = document.querySelector("#parameter-width");
const parameterLength = document.querySelector("#parameter-length");
const parameterWidth2 = document.querySelector("#parameter-width-2");
const parameterLength2 = document.querySelector("#parameter-length-2");
const parameterSquare = document.querySelector("#parameter-square").querySelector("span");
const priceKarkas = document.querySelector("#karkas");
const pricePolycarbonate = document.querySelector("#polycarbonate");
const priceSklad = document.querySelector("#price-sklad");
const priceMontage = document.querySelector("#montage");
const priceDelivery = document.querySelector("#delivery");
const priceTotal = document.querySelector("#total-price");
const exampleImage = document.querySelector("#example-image");
const submitButton = document.querySelector(".calculator__button");
const inputsAll = document.querySelectorAll(".input");
const optionsContainers = document.querySelectorAll(".calculator__option-wrapper");

const variants = {
	single: {
		"3x2": {
			img: "./images/single/3_2 односкат.jpeg",
			widthST: 2.0,
			lengthST: 3.0,
			widthKR: 2.1,
			lengthKR: 3.5,
			square: 7.4,
			priceKarkas: 34900,
			pricePolycarbonate: 6000,
			priceSklad: 40900,
			priceMontage: 12300,
			priceDelivery: 2500,
			priceTotal: 55700,
		},
		"3x4": {
			img: "./images/single/3_4 односкат.jpeg",
			widthST: 4.0,
			lengthST: 3.0,
			widthKR: 4.2,
			lengthKR: 3.5,
			square: 14.7,
			priceKarkas: 43900,
			pricePolycarbonate: 10900,
			priceSklad: 54800,
			priceMontage: 16100,
			priceDelivery: 2500,
			priceTotal: 73400,
		},
		"3x6": {
			img: "./images/single/3_6 односкат.jpeg",
			widthST: 6.0,
			lengthST: 3.0,
			widthKR: 6.3,
			lengthKR: 3.5,
			square: 22.1,
			priceKarkas: 54900,
			pricePolycarbonate: 15900,
			priceSklad: 70800,
			priceMontage: 17800,
			priceDelivery: 2500,
			priceTotal: 91100,
		},
		"3x8": {
			img: "./images/single/3_8 односкат.jpeg",
			widthST: 8.0,
			lengthST: 3.0,
			widthKR: 8.0,
			lengthKR: 3.0,
			square: 29.8,
			priceKarkas: 73200,
			pricePolycarbonate: 22300,
			priceSklad: 95500,
			priceMontage: 20700,
			priceDelivery: 2500,
			priceTotal: 118700,
		},
		"3x10": {
			img: "./images/single/3_10 односкат.jpeg",
			widthST: 10.0,
			lengthST: 3.0,
			widthKR: 10.5,
			lengthKR: 3.5,
			square: 36.8,
			priceKarkas: 84100,
			pricePolycarbonate: 26000,
			priceSklad: 110100,
			priceMontage: 23800,
			priceDelivery: 2500,
			priceTotal: 136400,
		},
		"3x12": {
			img: "./images/single/3_12 односкат.jpeg",
			widthST: 12,
			lengthST: 3.0,
			widthKR: 12.6,
			lengthKR: 3.5,
			square: 44.1,
			priceKarkas: 98900,
			pricePolycarbonate: 31300,
			priceSklad: 130200,
			priceMontage: 26800,
			priceDelivery: 2500,
			priceTotal: 159500,
		},
		"3.5x2": {
			img: "./images/single/3,5_2 односкат.jpeg",
			widthST: 2,
			lengthST: 3.5,
			widthKR: 2.1,
			lengthKR: 4.0,
			square: 8.2,
			priceKarkas: 37800,
			pricePolycarbonate: 6300,
			priceSklad: 44100,
			priceMontage: 11600,
			priceDelivery: 2500,
			priceTotal: 58200,
		},
		"3.5x4": {
			img: "./images/single/3,5_4 односкат.jpeg",
			widthST: 4.0,
			lengthST: 3.5,
			widthKR: 4.0,
			lengthKR: 4.2,
			square: 16.4,
			priceKarkas: 48300,
			pricePolycarbonate: 12400,
			priceSklad: 60700,
			priceMontage: 14800,
			priceDelivery: 2500,
			priceTotal: 78000,
		},
		"3.5x6": {
			img: "./images/single/3,5_6 односкат.jpeg",
			widthST: 6.0,
			lengthST: 3.5,
			widthKR: 6.3,
			lengthKR: 4.0,
			square: 24.6,
			priceKarkas: 60800,
			pricePolycarbonate: 18500,
			priceSklad: 79300,
			priceMontage: 17900,
			priceDelivery: 2500,
			priceTotal: 99700,
		},
		"3.5x8": {
			img: "./images/single/3,5_8 односкат.jpeg",
			widthST: 8.0,
			lengthST: 3.5,
			widthKR: 8.5,
			lengthKR: 4.0,
			square: 33.2,
			priceKarkas: 76300,
			pricePolycarbonate: 24700,
			priceSklad: 101000,
			priceMontage: 20900,
			priceDelivery: 2500,
			priceTotal: 124400,
		},
		"3.5x10": {
			img: "./images/single/3,5_10 односкат.jpeg",
			widthST: 10.0,
			lengthST: 3.5,
			widthKR: 10.6,
			lengthKR: 4.0,
			square: 41.0,
			priceKarkas: 91300,
			pricePolycarbonate: 30100,
			priceSklad: 121400,
			priceMontage: 23800,
			priceDelivery: 2500,
			priceTotal: 147700,
		},
		"3.5x12": {
			img: "./images/single/3,5_12 односкат.jpeg",
			widthST: 12.0,
			lengthST: 3.5,
			widthKR: 12.6,
			lengthKR: 4.0,
			square: 49.1,
			priceKarkas: 106800,
			pricePolycarbonate: 35700,
			priceSklad: 142500,
			priceMontage: 26700,
			priceDelivery: 2500,
			priceTotal: 171700,
		},
		"4x2": {
			img: "./images/single/4_2 односкат.jpeg",
			widthST: 2.0,
			lengthST: 4.0,
			widthKR: 2.1,
			lengthKR: 4.5,
			square: 9.2,
			priceKarkas: 42100,
			pricePolycarbonate: 7200,
			priceSklad: 49300,
			priceMontage: 12000,
			priceDelivery: 2500,
			priceTotal: 63800,
		},
		"4x4": {
			img: "./images/single/4_4 односкат.jpeg",
			widthST: 4.0,
			lengthST: 4.0,
			widthKR: 4.2,
			lengthKR: 4.5,
			square: 18.5,
			priceKarkas: 49300,
			pricePolycarbonate: 14100,
			priceSklad: 63400,
			priceMontage: 15400,
			priceDelivery: 2500,
			priceTotal: 81300,
		},
		"4x6": {
			img: "./images/single/4_6 односкат.jpeg",
			widthST: 6.0,
			lengthST: 4.0,
			widthKR: 6.3,
			lengthKR: 4.5,
			square: 27.7,
			priceKarkas: 66200,
			pricePolycarbonate: 20800,
			priceSklad: 87000,
			priceMontage: 18700,
			priceDelivery: 2500,
			priceTotal: 108200,
		},
		"4x8": {
			img: "./images/single/4_8 односкат.jpeg",
			widthST: 8.0,
			lengthST: 4.0,
			widthKR: 8.5,
			lengthKR: 4.5,
			square: 37.4,
			priceKarkas: 82700,
			pricePolycarbonate: 27800,
			priceSklad: 110500,
			priceMontage: 22100,
			priceDelivery: 2500,
			priceTotal: 135100,
		},
		"4x10": {
			img: "./images/single/4_8 односкат.jpeg",
			widthST: 10.0,
			lengthST: 4.0,
			widthKR: 10.6,
			lengthKR: 4.5,
			square: 46.2,
			priceKarkas: 98900,
			pricePolycarbonate: 33800,
			priceSklad: 132700,
			priceMontage: 25100,
			priceDelivery: 2500,
			priceTotal: 160300,
		},
		"4x12": {
			img: "./images/single/4_12 односкат.jpeg",
			widthST: 12.0,
			lengthST: 4.0,
			widthKR: 12.6,
			lengthKR: 4.5,
			square: 55.4,
			priceKarkas: 115700,
			pricePolycarbonate: 40300,
			priceSklad: 156000,
			priceMontage: 28300,
			priceDelivery: 2500,
			priceTotal: 186800,
		},
		"4.5x2": {
			img: "./images/single/4,5_2 односкат.jpeg",
			widthST: 2.0,
			lengthST: 4.5,
			widthKR: 2.1,
			lengthKR: 5.0,
			square: 10.2,
			priceKarkas: 48800,
			pricePolycarbonate: 7900,
			priceSklad: 56700,
			priceMontage: 12300,
			priceDelivery: 2500,
			priceTotal: 71500,
		},
		"4.5x4": {
			img: "./images/single/4,5_4 односкат.jpeg",
			widthST: 4.0,
			lengthST: 4.5,
			widthKR: 4.2,
			lengthKR: 5.0,
			square: 20.4,
			priceKarkas: 59300,
			pricePolycarbonate: 15800,
			priceSklad: 75100,
			priceMontage: 15900,
			priceDelivery: 2500,
			priceTotal: 93500,
		},
		"4.5x6": {
			img: "./images/single/4,5_6 односкат.jpeg",
			widthST: 6.0,
			lengthST: 4.5,
			widthKR: 6.3,
			lengthKR: 5.0,
			square: 30.6,
			priceKarkas: 70860,
			pricePolycarbonate: 22800,
			priceSklad: 93660,
			priceMontage: 19300,
			priceDelivery: 2500,
			priceTotal: 115460,
		},
		"4.5x8": {
			img: "./images/single/4,5_8 односкат.jpeg",
			widthST: 8.0,
			lengthST: 4.5,
			widthKR: 8.5,
			lengthKR: 5.0,
			square: 41.2,
			priceKarkas: 89200,
			pricePolycarbonate: 30800,
			priceSklad: 120000,
			priceMontage: 23100,
			priceDelivery: 2500,
			priceTotal: 145600,
		},
		"4.5x10": {
			img: "./images/single/4,5_10 односкат.jpeg",
			widthST: 10.0,
			lengthST: 4.5,
			widthKR: 10.0,
			lengthKR: 4.5,
			square: 50.9,
			priceKarkas: 106300,
			pricePolycarbonate: 37600,
			priceSklad: 143900,
			priceMontage: 26400,
			priceDelivery: 2500,
			priceTotal: 172800,
		},
		"4.5x12": {
			img: "./images/single/4,5_12 односкат.jpeg",
			widthST: 12.0,
			lengthST: 4.5,
			widthKR: 12.6,
			lengthKR: 5.0,
			square: 61.1,
			priceKarkas: 123100,
			pricePolycarbonate: 44500,
			priceSklad: 167600,
			priceMontage: 29700,
			priceDelivery: 2500,
			priceTotal: 199800,
		},
		"5x2": {
			img: "./images/single/5_2 односкат.jpeg",
			widthST: 2.0,
			lengthST: 5.0,
			widthKR: 2.1,
			lengthKR: 5.5,
			square: 11.1,
			priceKarkas: 51000,
			pricePolycarbonate: 8700,
			priceSklad: 59700,
			priceMontage: 12500,
			priceDelivery: 2500,
			priceTotal: 74700,
		},
		"5x4": {
			img: "./images/single/5_4 односкат.jpeg",
			widthST: 4.0,
			lengthST: 5.0,
			widthKR: 4.2,
			lengthKR: 5.5,
			square: 22.3,
			priceKarkas: 64700,
			pricePolycarbonate: 17200,
			priceSklad: 81900,
			priceMontage: 16400,
			priceDelivery: 2500,
			priceTotal: 100800,
		},
		"5x6": {
			img: "./images/single/5_6 односкат.jpeg",
			widthST: 6.0,
			lengthST: 5.0,
			widthKR: 6.3,
			lengthKR: 5.5,
			square: 33.4,
			priceKarkas: 80100,
			pricePolycarbonate: 25400,
			priceSklad: 105500,
			priceMontage: 20300,
			priceDelivery: 2500,
			priceTotal: 128300,
		},
		"5x8": {
			img: "./images/single/5_8 односкат.jpeg",
			widthST: 8.0,
			lengthST: 5.0,
			widthKR: 8.5,
			lengthKR: 5.5,
			square: 45.1,
			priceKarkas: 101000,
			pricePolycarbonate: 33900,
			priceSklad: 134900,
			priceMontage: 24100,
			priceDelivery: 2500,
			priceTotal: 161500,
		},
		"5x10": {
			img: "./images/single/5_10 односкат.jpeg",
			widthST: 10.0,
			lengthST: 5.0,
			widthKR: 10.6,
			lengthKR: 5.5,
			square: 55.7,
			priceKarkas: 121200,
			pricePolycarbonate: 41400,
			priceSklad: 162600,
			priceMontage: 27600,
			priceDelivery: 2500,
			priceTotal: 192700,
		},
		"5x12": {
			img: "./images/single/5_12 односкат.jpeg",
			widthST: 12.0,
			lengthST: 5.0,
			widthKR: 12.6,
			lengthKR: 5.5,
			square: 66.8,
			priceKarkas: 140900,
			pricePolycarbonate: 49100,
			priceSklad: 190000,
			priceMontage: 31200,
			priceDelivery: 2500,
			priceTotal: 223700,
		},
		"5.5x2": {
			img: "./images/single/5,5_2 односкат.jpeg",
			widthST: 2.0,
			lengthST: 5.5,
			widthKR: 2.1,
			lengthKR: 6.0,
			square: 12.2,
			priceKarkas: 57700,
			pricePolycarbonate: 9500,
			priceSklad: 67200,
			priceMontage: 12800,
			priceDelivery: 2500,
			priceTotal: 82500,
		},
		"5.5x4": {
			img: "./images/single/5,5_4 односкат.jpeg",
			widthST: 4.0,
			lengthST: 5.5,
			widthKR: 4.2,
			lengthKR: 6.0,
			square: 24.4,
			priceKarkas: 71400,
			pricePolycarbonate: 18700,
			priceSklad: 90100,
			priceMontage: 17000,
			priceDelivery: 2500,
			priceTotal: 109600,
		},
		"5.5x6": {
			img: "./images/single/5,5_6 односкат.jpeg",
			widthST: 6.0,
			lengthST: 5.5,
			widthKR: 6.3,
			lengthKR: 6.0,
			square: 36.5,
			priceKarkas: 86700,
			pricePolycarbonate: 27700,
			priceSklad: 114400,
			priceMontage: 21000,
			priceDelivery: 2500,
			priceTotal: 137900,
		},
		"5.5x8": {
			img: "./images/single/5,5_8 односкат.jpeg",
			widthST: 8.0,
			lengthST: 5.5,
			widthKR: 8.5,
			lengthKR: 6.0,
			square: 49.3,
			priceKarkas: 108500,
			pricePolycarbonate: 36900,
			priceSklad: 145400,
			priceMontage: 25200,
			priceDelivery: 2500,
			priceTotal: 173100,
		},
		"5.5x10": {
			img: "./images/single/5,5_10 односкат.jpeg",
			widthST: 10.0,
			lengthST: 5.5,
			widthKR: 10.6,
			lengthKR: 6.0,
			square: 60.9,
			priceKarkas: 128600,
			pricePolycarbonate: 45100,
			priceSklad: 173700,
			priceMontage: 28900,
			priceDelivery: 2500,
			priceTotal: 205100,
		},
		"5.5x12": {
			img: "./images/single/5,5_12 односкат.jpeg",
			widthST: 12.0,
			lengthST: 5.5,
			widthKR: 12.6,
			lengthKR: 6.0,
			square: 73.1,
			priceKarkas: 149400,
			pricePolycarbonate: 53600,
			priceSklad: 203000,
			priceMontage: 32800,
			priceDelivery: 2500,
			priceTotal: 238300,
		},
		"6x2": {
			img: "./images/single/6_2 односкат.jpeg",
			widthST: 2.0,
			lengthST: 6,
			widthKR: 2.1,
			lengthKR: 6.5,
			square: 13.2,
			priceKarkas: 68900,
			pricePolycarbonate: 10300,
			priceSklad: 79200,
			priceMontage: 13000,
			priceDelivery: 2500,
			priceTotal: 94700,
		},
		"6x4": {
			img: "./images/single/6_4 односкат.jpeg",
			widthST: 4.0,
			lengthST: 6,
			widthKR: 4.2,
			lengthKR: 6.5,
			square: 26.5,
			priceKarkas: 81200,
			pricePolycarbonate: 20200,
			priceSklad: 101400,
			priceMontage: 17500,
			priceDelivery: 2500,
			priceTotal: 121400,
		},
		"6x6": {
			img: "./images/single/6_6 односкат.jpeg",
			widthST: 6.0,
			lengthST: 6,
			widthKR: 6.3,
			lengthKR: 6.5,
			square: 39.7,
			priceKarkas: 95600,
			pricePolycarbonate: 30900,
			priceSklad: 126500,
			priceMontage: 21900,
			priceDelivery: 2500,
			priceTotal: 150900,
		},
		"6x8": {
			img: "./images/single/6_8 односкат.jpeg",
			widthST: 6.0,
			lengthST: 8.5,
			widthKR: 6.5,
			lengthKR: 8.5,
			square: 53.6,
			priceKarkas: 117100,
			pricePolycarbonate: 40000,
			priceSklad: 157100,
			priceMontage: 26300,
			priceDelivery: 2500,
			priceTotal: 185900,
		},
		"6x10": {
			img: "./images/single/6_10 односкат.jpeg",
			widthST: 6.0,
			lengthST: 10.0,
			widthKR: 6.5,
			lengthKR: 10.6,
			square: 66.2,
			priceKarkas: 138200,
			pricePolycarbonate: 48800,
			priceSklad: 187000,
			priceMontage: 30200,
			priceDelivery: 2500,
			priceTotal: 219700,
		},
		"6x12": {
			img: "./images/single/6_12 односкат.jpeg",
			widthST: 6.0,
			lengthST: 12.0,
			widthKR: 6.5,
			lengthKR: 12.6,
			square: 79.4,
			priceKarkas: 158800,
			pricePolycarbonate: 58000,
			priceSklad: 216800,
			priceMontage: 34300,
			priceDelivery: 2500,
			priceTotal: 253600,
		},
	},
	double: {
		"3x2": {
			img: "./images/double/3_2 двускат.jpeg",
			widthST: 2.0,
			lengthST: 3.0,
			widthKR: 2.1,
			lengthKR: 3.5,
			square: 7.4,
			priceKarkas: 34900,
			pricePolycarbonate: 6000,
			priceSklad: 40900,
			priceMontage: 12300,
			priceDelivery: 2500,
			priceTotal: 55700,
		},
		"3x4": {
			img: "./images/double/3_4 двускат.jpeg",
			widthST: 4.0,
			lengthST: 3.0,
			widthKR: 4.2,
			lengthKR: 3.5,
			square: 14.7,
			priceKarkas: 43900,
			pricePolycarbonate: 10900,
			priceSklad: 54800,
			priceMontage: 16100,
			priceDelivery: 2500,
			priceTotal: 73400,
		},
		"3x6": {
			img: "./images/double/3_6 двускат.jpeg",
			widthST: 6.0,
			lengthST: 3.0,
			widthKR: 6.3,
			lengthKR: 3.5,
			square: 22.1,
			priceKarkas: 54900,
			pricePolycarbonate: 15900,
			priceSklad: 70800,
			priceMontage: 17800,
			priceDelivery: 2500,
			priceTotal: 91100,
		},
		"3x8": {
			img: "./images/double/3_8 двускат.jpeg",
			widthST: 8.0,
			lengthST: 3.0,
			widthKR: 8.0,
			lengthKR: 3.0,
			square: 29.8,
			priceKarkas: 73200,
			pricePolycarbonate: 22300,
			priceSklad: 95500,
			priceMontage: 20700,
			priceDelivery: 2500,
			priceTotal: 118700,
		},
		"3x10": {
			img: "./images/double/3_10 двускат.jpeg",
			widthST: 10.0,
			lengthST: 3.0,
			widthKR: 10.5,
			lengthKR: 3.5,
			square: 36.8,
			priceKarkas: 84100,
			pricePolycarbonate: 26000,
			priceSklad: 110100,
			priceMontage: 23800,
			priceDelivery: 2500,
			priceTotal: 136400,
		},
		"3x12": {
			img: "./images/double/3_12 двускат.jpeg",
			widthST: 12,
			lengthST: 3.0,
			widthKR: 12.6,
			lengthKR: 3.5,
			square: 44.1,
			priceKarkas: 98900,
			pricePolycarbonate: 31300,
			priceSklad: 130200,
			priceMontage: 26800,
			priceDelivery: 2500,
			priceTotal: 159500,
		},
		"3.5x2": {
			img: "./images/double/3,5_2 двускат.jpeg",
			widthST: 2,
			lengthST: 3.5,
			widthKR: 2.1,
			lengthKR: 4.0,
			square: 8.2,
			priceKarkas: 37800,
			pricePolycarbonate: 6300,
			priceSklad: 44100,
			priceMontage: 11600,
			priceDelivery: 2500,
			priceTotal: 58200,
		},
		"3.5x4": {
			img: "./images/double/3,5_4 двускат.jpeg",
			widthST: 4.0,
			lengthST: 3.5,
			widthKR: 4.0,
			lengthKR: 4.2,
			square: 16.4,
			priceKarkas: 48300,
			pricePolycarbonate: 12400,
			priceSklad: 60700,
			priceMontage: 14800,
			priceDelivery: 2500,
			priceTotal: 78000,
		},
		"3.5x6": {
			img: "./images/double/3,5_6 двускат.jpeg",
			widthST: 6.0,
			lengthST: 3.5,
			widthKR: 6.3,
			lengthKR: 4.0,
			square: 24.6,
			priceKarkas: 60800,
			pricePolycarbonate: 18500,
			priceSklad: 79300,
			priceMontage: 17900,
			priceDelivery: 2500,
			priceTotal: 99700,
		},
		"3.5x8": {
			img: "./images/double/3,5_8 двускат.jpeg",
			widthST: 8.0,
			lengthST: 3.5,
			widthKR: 8.5,
			lengthKR: 4.0,
			square: 33.2,
			priceKarkas: 76300,
			pricePolycarbonate: 24700,
			priceSklad: 101000,
			priceMontage: 20900,
			priceDelivery: 2500,
			priceTotal: 124400,
		},
		"3.5x10": {
			img: "./images/double/3,5_10 двускат.jpeg",
			widthST: 10.0,
			lengthST: 3.5,
			widthKR: 10.6,
			lengthKR: 4.0,
			square: 41.0,
			priceKarkas: 91300,
			pricePolycarbonate: 30100,
			priceSklad: 121400,
			priceMontage: 23800,
			priceDelivery: 2500,
			priceTotal: 147700,
		},
		"3.5x12": {
			img: "./images/double/3,5_12 двускат.jpeg",
			widthST: 12.0,
			lengthST: 3.5,
			widthKR: 12.6,
			lengthKR: 4.0,
			square: 49.1,
			priceKarkas: 106800,
			pricePolycarbonate: 35700,
			priceSklad: 142500,
			priceMontage: 26700,
			priceDelivery: 2500,
			priceTotal: 171700,
		},
		"4x2": {
			img: "./images/double/4_2 двускат.jpeg",
			widthST: 2.0,
			lengthST: 4.0,
			widthKR: 2.1,
			lengthKR: 4.5,
			square: 9.2,
			priceKarkas: 42100,
			pricePolycarbonate: 7200,
			priceSklad: 49300,
			priceMontage: 12000,
			priceDelivery: 2500,
			priceTotal: 63800,
		},
		"4x4": {
			img: "./images/double/4_4 двускат.jpeg",
			widthST: 4.0,
			lengthST: 4.0,
			widthKR: 4.2,
			lengthKR: 4.5,
			square: 18.5,
			priceKarkas: 49300,
			pricePolycarbonate: 14100,
			priceSklad: 63400,
			priceMontage: 15400,
			priceDelivery: 2500,
			priceTotal: 81300,
		},
		"4x6": {
			img: "./images/double/4_6 двускат.jpeg",
			widthST: 6.0,
			lengthST: 4.0,
			widthKR: 6.3,
			lengthKR: 4.5,
			square: 27.7,
			priceKarkas: 66200,
			pricePolycarbonate: 20800,
			priceSklad: 87000,
			priceMontage: 18700,
			priceDelivery: 2500,
			priceTotal: 108200,
		},
		"4x8": {
			img: "./images/double/4_8 двускат.jpeg",
			widthST: 8.0,
			lengthST: 4.0,
			widthKR: 8.5,
			lengthKR: 4.5,
			square: 37.4,
			priceKarkas: 82700,
			pricePolycarbonate: 27800,
			priceSklad: 110500,
			priceMontage: 22100,
			priceDelivery: 2500,
			priceTotal: 135100,
		},
		"4x10": {
			img: "./images/double/4_8 двускат.jpeg",
			widthST: 10.0,
			lengthST: 4.0,
			widthKR: 10.6,
			lengthKR: 4.5,
			square: 46.2,
			priceKarkas: 98900,
			pricePolycarbonate: 33800,
			priceSklad: 132700,
			priceMontage: 25100,
			priceDelivery: 2500,
			priceTotal: 160300,
		},
		"4x12": {
			img: "./images/double/4_12 двускат.jpeg",
			widthST: 12.0,
			lengthST: 4.0,
			widthKR: 12.6,
			lengthKR: 4.5,
			square: 55.4,
			priceKarkas: 115700,
			pricePolycarbonate: 40300,
			priceSklad: 156000,
			priceMontage: 28300,
			priceDelivery: 2500,
			priceTotal: 186800,
		},
		"4.5x2": {
			img: "./images/double/4,5_2 двускат.jpeg",
			widthST: 2.0,
			lengthST: 4.5,
			widthKR: 2.1,
			lengthKR: 5.0,
			square: 10.2,
			priceKarkas: 48800,
			pricePolycarbonate: 7900,
			priceSklad: 56700,
			priceMontage: 12300,
			priceDelivery: 2500,
			priceTotal: 71500,
		},
		"4.5x4": {
			img: "./images/double/4,5_4 двускат.jpeg",
			widthST: 4.0,
			lengthST: 4.5,
			widthKR: 4.2,
			lengthKR: 5.0,
			square: 20.4,
			priceKarkas: 59300,
			pricePolycarbonate: 15800,
			priceSklad: 75100,
			priceMontage: 15900,
			priceDelivery: 2500,
			priceTotal: 93500,
		},
		"4.5x6": {
			img: "./images/double/4,5_6 двускат.jpeg",
			widthST: 6.0,
			lengthST: 4.5,
			widthKR: 6.3,
			lengthKR: 5.0,
			square: 30.6,
			priceKarkas: 70860,
			pricePolycarbonate: 22800,
			priceSklad: 93660,
			priceMontage: 19300,
			priceDelivery: 2500,
			priceTotal: 115460,
		},
		"4.5x8": {
			img: "./images/double/4,5_8 двускат.jpeg",
			widthST: 8.0,
			lengthST: 4.5,
			widthKR: 8.5,
			lengthKR: 5.0,
			square: 41.2,
			priceKarkas: 89200,
			pricePolycarbonate: 30800,
			priceSklad: 120000,
			priceMontage: 23100,
			priceDelivery: 2500,
			priceTotal: 145600,
		},
		"4.5x10": {
			img: "./images/double/4,5_10 двускат.jpeg",
			widthST: 10.0,
			lengthST: 4.5,
			widthKR: 10.0,
			lengthKR: 4.5,
			square: 50.9,
			priceKarkas: 106300,
			pricePolycarbonate: 37600,
			priceSklad: 143900,
			priceMontage: 26400,
			priceDelivery: 2500,
			priceTotal: 172800,
		},
		"4.5x12": {
			img: "./images/double/4,5_12 двускат.jpeg",
			widthST: 12.0,
			lengthST: 4.5,
			widthKR: 12.6,
			lengthKR: 5.0,
			square: 61.1,
			priceKarkas: 123100,
			pricePolycarbonate: 44500,
			priceSklad: 167600,
			priceMontage: 29700,
			priceDelivery: 2500,
			priceTotal: 199800,
		},
		"5x2": {
			img: "./images/double/5_2 двускат.jpeg",
			widthST: 2.0,
			lengthST: 5.0,
			widthKR: 2.1,
			lengthKR: 5.5,
			square: 11.1,
			priceKarkas: 51000,
			pricePolycarbonate: 8700,
			priceSklad: 59700,
			priceMontage: 12500,
			priceDelivery: 2500,
			priceTotal: 74700,
		},
		"5x4": {
			img: "./images/double/5_4 двускат.jpeg",
			widthST: 4.0,
			lengthST: 5.0,
			widthKR: 4.2,
			lengthKR: 5.5,
			square: 22.3,
			priceKarkas: 64700,
			pricePolycarbonate: 17200,
			priceSklad: 81900,
			priceMontage: 16400,
			priceDelivery: 2500,
			priceTotal: 100800,
		},
		"5x6": {
			img: "./images/double/5_6 двускат.jpeg",
			widthST: 6.0,
			lengthST: 5.0,
			widthKR: 6.3,
			lengthKR: 5.5,
			square: 33.4,
			priceKarkas: 80100,
			pricePolycarbonate: 25400,
			priceSklad: 105500,
			priceMontage: 20300,
			priceDelivery: 2500,
			priceTotal: 128300,
		},
		"5x8": {
			img: "./images/double/5_8 двускат.jpeg",
			widthST: 8.0,
			lengthST: 5.0,
			widthKR: 8.5,
			lengthKR: 5.5,
			square: 45.1,
			priceKarkas: 101000,
			pricePolycarbonate: 33900,
			priceSklad: 134900,
			priceMontage: 24100,
			priceDelivery: 2500,
			priceTotal: 161500,
		},
		"5x10": {
			img: "./images/double/5_10 двускат.jpeg",
			widthST: 10.0,
			lengthST: 5.0,
			widthKR: 10.6,
			lengthKR: 5.5,
			square: 55.7,
			priceKarkas: 121200,
			pricePolycarbonate: 41400,
			priceSklad: 162600,
			priceMontage: 27600,
			priceDelivery: 2500,
			priceTotal: 192700,
		},
		"5x12": {
			img: "./images/double/5_12 двускат.jpeg",
			widthST: 12.0,
			lengthST: 5.0,
			widthKR: 12.6,
			lengthKR: 5.5,
			square: 66.8,
			priceKarkas: 140900,
			pricePolycarbonate: 49100,
			priceSklad: 190000,
			priceMontage: 31200,
			priceDelivery: 2500,
			priceTotal: 223700,
		},
		"5.5x2": {
			img: "./images/double/5,5_2 двускат.jpeg",
			widthST: 2.0,
			lengthST: 5.5,
			widthKR: 2.1,
			lengthKR: 6.0,
			square: 12.2,
			priceKarkas: 57700,
			pricePolycarbonate: 9500,
			priceSklad: 67200,
			priceMontage: 12800,
			priceDelivery: 2500,
			priceTotal: 82500,
		},
		"5.5x4": {
			img: "./images/double/5,5_4 двускат.jpeg",
			widthST: 4.0,
			lengthST: 5.5,
			widthKR: 4.2,
			lengthKR: 6.0,
			square: 24.4,
			priceKarkas: 71400,
			pricePolycarbonate: 18700,
			priceSklad: 90100,
			priceMontage: 17000,
			priceDelivery: 2500,
			priceTotal: 109600,
		},
		"5.5x6": {
			img: "./images/double/5,5_6 двускат.jpeg",
			widthST: 6.0,
			lengthST: 5.5,
			widthKR: 6.3,
			lengthKR: 6.0,
			square: 36.5,
			priceKarkas: 86700,
			pricePolycarbonate: 27700,
			priceSklad: 114400,
			priceMontage: 21000,
			priceDelivery: 2500,
			priceTotal: 137900,
		},
		"5.5x8": {
			img: "./images/double/5,5_8 двускат.jpeg",
			widthST: 8.0,
			lengthST: 5.5,
			widthKR: 8.5,
			lengthKR: 6.0,
			square: 49.3,
			priceKarkas: 108500,
			pricePolycarbonate: 36900,
			priceSklad: 145400,
			priceMontage: 25200,
			priceDelivery: 2500,
			priceTotal: 173100,
		},
		"5.5x10": {
			img: "./images/double/5,5_10 двускат.jpeg",
			widthST: 10.0,
			lengthST: 5.5,
			widthKR: 10.6,
			lengthKR: 6.0,
			square: 60.9,
			priceKarkas: 128600,
			pricePolycarbonate: 45100,
			priceSklad: 173700,
			priceMontage: 28900,
			priceDelivery: 2500,
			priceTotal: 205100,
		},
		"5.5x12": {
			img: "./images/double/5,5_12 двускат.jpeg",
			widthST: 12.0,
			lengthST: 5.5,
			widthKR: 12.6,
			lengthKR: 6.0,
			square: 73.1,
			priceKarkas: 149400,
			pricePolycarbonate: 53600,
			priceSklad: 203000,
			priceMontage: 32800,
			priceDelivery: 2500,
			priceTotal: 238300,
		},
		"6x2": {
			img: "./images/double/6_2 двускат.jpeg",
			widthST: 2.0,
			lengthST: 6,
			widthKR: 2.1,
			lengthKR: 6.5,
			square: 13.2,
			priceKarkas: 68900,
			pricePolycarbonate: 10300,
			priceSklad: 79200,
			priceMontage: 13000,
			priceDelivery: 2500,
			priceTotal: 94700,
		},
		"6x4": {
			img: "./images/double/6_4 двускат.jpeg",
			widthST: 4.0,
			lengthST: 6,
			widthKR: 4.2,
			lengthKR: 6.5,
			square: 26.5,
			priceKarkas: 81200,
			pricePolycarbonate: 20200,
			priceSklad: 101400,
			priceMontage: 17500,
			priceDelivery: 2500,
			priceTotal: 121400,
		},
		"6x6": {
			img: "./images/double/6_6 двускат.jpeg",
			widthST: 6.0,
			lengthST: 6,
			widthKR: 6.3,
			lengthKR: 6.5,
			square: 39.7,
			priceKarkas: 95600,
			pricePolycarbonate: 30900,
			priceSklad: 126500,
			priceMontage: 21900,
			priceDelivery: 2500,
			priceTotal: 150900,
		},
		"6x8": {
			img: "./images/double/6_8 двускат.jpeg",
			widthST: 6.0,
			lengthST: 8.5,
			widthKR: 6.5,
			lengthKR: 8.5,
			square: 53.6,
			priceKarkas: 117100,
			pricePolycarbonate: 40000,
			priceSklad: 157100,
			priceMontage: 26300,
			priceDelivery: 2500,
			priceTotal: 185900,
		},
		"6x10": {
			img: "./images/double/6_10 двускат.jpeg",
			widthST: 6.0,
			lengthST: 10.0,
			widthKR: 6.5,
			lengthKR: 10.6,
			square: 66.2,
			priceKarkas: 138200,
			pricePolycarbonate: 48800,
			priceSklad: 187000,
			priceMontage: 30200,
			priceDelivery: 2500,
			priceTotal: 219700,
		},
		"6x12": {
			img: "./images/double/6_12 двускат.jpeg",
			widthST: 6.0,
			lengthST: 12.0,
			widthKR: 6.5,
			lengthKR: 12.6,
			square: 79.4,
			priceKarkas: 158800,
			pricePolycarbonate: 58000,
			priceSklad: 216800,
			priceMontage: 34300,
			priceDelivery: 2500,
			priceTotal: 253600,
		},
	},
};

optionsContainers.forEach((container) => {
	const priceText = container.querySelector(".calculator__option-price");
	const price = Number(priceText.dataSet);
	const minusButton = container.querySelector(".minus");
	const quantityText = container.querySelector(".quantity");
	const plusButton = container.querySelector(".plus");

	minusButton.addEventListener("click", () => {
		if (quantityText.textContent > 0) {
			quantityText.textContent = Number(quantityText.textContent) - 1;
		}
	});
	plusButton.addEventListener("click", () => {
		quantityText.textContent = Number(quantityText.textContent) + 1;
	});
});

inputsAll.forEach((input) => {
	input.addEventListener("change", calculator);
});

inputWidth.value = 3;
inputLength.value = 2;

function calculator() {
	let radio, type, typeName;

	if (radioSingle.checked) {
		radio = "single";
		typeName = "арочный односкатный";
	}
	if (radioDouble.checked) {
		radio = "double";
		typeName = "арочный двускатный";
	}

	type = variants[radio];
	const result = `${inputWidth.value}x${inputLength.value}`;
	const neededObj = type[`${result}`];
	const resultName = `Навес ${typeName} ${result}`;

	parameterWidth.textContent = `${neededObj.widthST} м`;
	parameterWidth2.textContent = `${neededObj.widthKR} м`;
	parameterLength.textContent = `${neededObj.lengthST} м`;
	parameterLength2.textContent = `${neededObj.lengthKR} м`;
	parameterSquare.textContent = `${neededObj.square} м`;
	priceKarkas.textContent = `${neededObj.priceKarkas} руб.`;
	pricePolycarbonate.textContent = `${neededObj.pricePolycarbonate} руб.`;
	priceSklad.textContent = `${neededObj.priceSklad} руб.`;
	priceMontage.textContent = `${neededObj.priceMontage} руб.`;
	priceDelivery.textContent = `${neededObj.priceDelivery} руб.`;
	priceTotal.textContent = `${neededObj.priceTotal} руб.`;
	exampleImage.src = neededObj.img;
	submitButton.href = `#order:${resultName}=${neededObj.priceTotal}`;
}

calculator();

// function setCartItems() {
// 	if(localStorage.getItem("tcart")) {
// 		customCartCounter.forEach(cart => {
// 			cart.firstElementChild.textContent = JSON.parse(localStorage.getItem("tcart")).total;
// 		})
// 	}
// }
