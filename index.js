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
const additionalServicesContainer = document.querySelector(".calculator__options-container");
const h3title = document.querySelector(".calculator__h3-title");
const cartContainer = document.querySelector(".t706__cartwin");

const variants = {
	single: {
		"3x2": {
			img: "https://static.tildacdn.com/tild6331-3537-4334-b235-353264643537/3_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3230-3363-4633-a233-303464653534/3_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild6238-3166-4335-a633-663835643439/3_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3039-6531-4236-a438-653063353865/3_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3334-3964-4265-a364-313164363430/3_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild6135-6533-4331-b738-386135633666/3_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild3463-3266-4135-a265-386162323965/35_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild6566-3832-4533-b931-373562343837/35_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild6661-6330-4930-b264-323930363239/35_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3935-6637-4132-b461-303966333730/35_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3163-3039-4130-b163-356532373264/35_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3032-3838-4636-b363-343636616539/35_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild3337-3134-4665-a136-613030663730/4_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3865-3438-4731-a266-376339313937/4_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild6662-6238-4063-b833-306537336266/4_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild6231-3433-4532-b632-616638393132/4_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3935-3766-4331-b931-656362336335/4_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3866-3731-4335-a130-363038343561/4_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild3530-3134-4536-a566-323634353236/45_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild6466-3532-4737-b930-356339666563/45_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild3738-3030-4733-b432-633462326139/45_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3934-3537-4136-b435-333863393533/45_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3364-3466-4538-b064-626636616433/45_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3930-6637-4061-a539-393738346664/45_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild3061-3038-4235-b862-313836386631/5_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3635-6233-4665-b564-366234626461/5_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild6138-6235-4438-a364-383034306263/5_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3661-3638-4530-a239-353738373364/5_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild6534-3535-4539-b233-623639353133/5_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3037-3864-4839-a436-303635613138/5_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild6233-3730-4737-b437-376265333130/55_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3435-6137-4037-b164-363263613061/55_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild6137-3362-4562-a638-323765646235/55_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild6461-6361-4236-b938-616338653631/55_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3136-3730-4239-a239-316333393938/55_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3133-3035-4566-b438-623465363331/55_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild6230-3862-4330-b035-343166633734/6_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild6339-3331-4938-b865-626337343832/6_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild3466-3835-4136-a238-663164363263/6_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3034-3861-4933-a539-366462643461/6_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3937-6663-4132-a130-353333353437/6_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3162-3139-4962-b764-376535653263/6_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild6630-6330-4461-b737-353532343364/3_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3134-3237-4439-a438-366130303335/3_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild3038-6632-4236-b437-313264616631/3_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3436-6566-4738-a439-303931383034/3_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3839-3131-4263-a339-383939313430/3_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3066-3730-4164-b766-303764633531/3_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild3630-6638-4132-b263-333530356366/35_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild6138-3964-4933-a532-643038653435/35_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild3930-3836-4132-b136-663064363430/35_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3939-3364-4361-b662-623735313436/35_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3238-3736-4063-b435-313464623064/35_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild6630-3431-4933-b530-373764613436/35_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild3236-6331-4230-b130-303638373161/4_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild6538-6465-4661-b132-363538636438/4_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild3465-3336-4738-b430-653935613863/4_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3439-3838-4264-b265-306263666332/4_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild6566-3534-4136-b563-663764633730/4_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3964-6461-4565-a363-633837343531/4_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild6266-3131-4963-b933-383564663136/45_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3735-3862-4530-b962-633031363338/45_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild3233-3663-4164-a430-343537306238/45_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild6233-3630-4536-b733-313932653531/45_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3538-6439-4433-b835-656164643663/45_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3735-6438-4839-a662-616332383134/45_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild6461-3338-4338-a331-303932323265/5_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3730-6632-4162-b766-363738326638/5_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild6232-3934-4135-a230-383132303235/5_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3937-3135-4931-b136-643339393763/5_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3565-3937-4637-b138-326533396230/5_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild6235-3037-4336-a233-616363383564/5_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild6335-3438-4134-b661-623766633739/55_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild3466-6634-4337-b433-376236353034/55_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild6533-6638-4161-a662-303130613663/55_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild6538-3131-4435-b236-363638633938/55_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3336-6230-4433-b031-666233396339/55_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3532-3865-4664-a530-333038656334/55_12_.jpeg",
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
			img: "https://static.tildacdn.com/tild6538-3939-4536-a330-306664663637/6_2_.jpeg",
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
			img: "https://static.tildacdn.com/tild6432-3639-4233-a165-663936616538/6_4_.jpeg",
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
			img: "https://static.tildacdn.com/tild3436-3165-4639-b934-366632393532/6_6_.jpeg",
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
			img: "https://static.tildacdn.com/tild3538-6166-4239-a232-366132343834/6_8_.jpeg",
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
			img: "https://static.tildacdn.com/tild3337-6334-4735-a362-396666653531/6_10_.jpeg",
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
			img: "https://static.tildacdn.com/tild3839-3931-4232-b334-333039383961/6_12_.jpeg",
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
	const price = Number(priceText.dataset.price);
	const minusButton = container.querySelector(".minus");
	const quantityText = container.querySelector(".quantity");
	const plusButton = container.querySelector(".plus");
	const optionName = container.querySelector(".calculator__option-name");
	const optionId = container.id;

	minusButton.addEventListener("click", () => {
		if (Number(quantityText.textContent) > 0) {
			minusButton.style.pointerEvents = "none";
			removeFromTotal(optionName.textContent, price, quantityText.textContent);
			quantityText.textContent = Number(quantityText.textContent) - 1;
			decrementCartItem(optionName.textContent, quantityText);

			setTimeout(() => {
				minusButton.style.pointerEvents = "auto";
			}, 3000);
		}
	});

	plusButton.addEventListener("click", () => {
		const cartIcon = document.querySelector(".t706__carticon");
		const cartCloseIco = cartContainer.querySelector(".t706__cartwin-close");

		incrementCartItem(plusButton, minusButton, cartIcon, cartContainer, cartCloseIco, quantityText, optionName.textContent);
		addToTotal(optionName.textContent, price, optionId);
	});
});

inputsAll.forEach((input) => {
	input.addEventListener("change", calculator);
});

cartContainer.addEventListener("click", checkCartList);

inputWidth.value = 3;
inputLength.value = 2;

function calculator() {
	const allAddedOptionsPrices = additionalServicesContainer.querySelectorAll(".calculator__price");
	let radio, type, typeName;
	let totalPriceValue = 0;

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

	if (radioDouble.checked) {
		h3title.textContent = `Навес №${Number(Object.keys(variants.single).indexOf(result)) + 1}`;
	} else {
		h3title.textContent = `Навес №${Number(Object.keys(variants.single).indexOf(result)) + 1}`;
	}

	parameterWidth.textContent = `${neededObj.widthST} м`;
	parameterWidth2.textContent = `${neededObj.widthKR} м`;
	parameterLength.textContent = `${neededObj.lengthST} м`;
	parameterLength2.textContent = `${neededObj.lengthKR} м`;
	parameterSquare.textContent = `${neededObj.square} м`;
	priceKarkas.dataset.price = neededObj.priceKarkas;
	priceKarkas.textContent = `${neededObj.priceKarkas} руб.`;
	pricePolycarbonate.dataset.price = neededObj.pricePolycarbonate;
	pricePolycarbonate.textContent = `${neededObj.pricePolycarbonate} руб.`;
	priceSklad.dataset.price = neededObj.priceSklad;
	priceSklad.textContent = `${neededObj.priceSklad} руб.`;
	priceMontage.dataset.price = neededObj.priceMontage;
	priceMontage.textContent = `${neededObj.priceMontage} руб.`;
	priceDelivery.dataset.price = neededObj.priceDelivery;
	priceDelivery.textContent = `${neededObj.priceDelivery} руб.`;
	exampleImage.src = neededObj.img;

	allAddedOptionsPrices.forEach((price) => {
		if (price.textContent !== "бесплатно") {
			totalPriceValue = Number(totalPriceValue) + Number(price.dataset.price);
		}
	});

	priceTotal.textContent = `${totalPriceValue} руб.`;
	priceTotal.dataset.price = totalPriceValue;

	submitButton.href = `#order:${resultName}=${neededObj.priceTotal}`;
}

calculator();

function incrementCartItem(plusButton, minusButton, cartIcon, cartContainer, cartCloseIco, quantityText, optionName) {
	quantityText.textContent = Number(quantityText.textContent) + 1;
	plusButton.style.pointerEvents = "none";

	cartContainer.classList.add("hiddenCart");
	setTimeout(() => {
		cartIcon.click();
		cartCloseIco.click();
		setTimeout(() => {
			cartContainer.classList.remove("hiddenCart");
			plusButton.style.pointerEvents = "auto";
		}, 500);
		setTimeout(() => {
			if (cartContainer.querySelector(".t706__cartpage-products_empty")) {
				decrementCartItem(optionName, quantityText);
				plusButton.click();
			}
		}, 500);
	}, 500);
}

function decrementCartItem(optionName, quantityText) {
	const cartProductsContainer = document.querySelector(".t706__cartwin-products");
	const cartProductList = cartProductsContainer.querySelectorAll(".t706__product");
	if (cartProductList.length === 0) {
		quantityText.textContent = 0;
	}
	cartProductList.forEach((product) => {
		const productName = product.querySelector(".t706__product-title").querySelector("a").textContent;
		if (productName === optionName) {
			product.querySelector(".t706__product-minus").click();
		}
	});
	const deletedItem = cartProductsContainer.querySelector(".t706__product-deleted");
	if (deletedItem) {
		deletedItem.remove();
	}
}

function addToTotal(optionName, price, optionId) {
	const allAddedOptions = additionalServicesContainer.querySelectorAll(".calculator__price-wrapper");
	let added = false;
	allAddedOptions.forEach((option) => {
		if (option.id === optionId) {
			const currentPrice = option.querySelector(".calculator__price");
			currentPrice.textContent = `${Number(currentPrice.dataset.price) + price} руб.`;
			added = true;
		}
	});
	if (!added) {
		const optionLayout = `<div class="calculator__price-wrapper added-option" id=${optionId}>
		<div class="calculator__price-value">
			<p class="calculator__price-title">${optionName}</p>
			<p class="calculator__price" data-price="${price}">${price} руб.</p>
		</div>
	</div>`;
		additionalServicesContainer.insertAdjacentHTML("beforeend", optionLayout);
	}
	priceTotal.textContent = `${Number(priceTotal.dataset.price) + price} руб.`;
	priceTotal.dataset.price = Number(priceTotal.dataset.price) + price;
}

function removeFromTotal(optionName, price, quantity) {
	const allAddedOptions = additionalServicesContainer.querySelectorAll(".calculator__price-wrapper");
	allAddedOptions.forEach((option) => {
		const currentName = option.querySelector(".calculator__price-title").textContent;
		const currentPrice = option.querySelector(".calculator__price");
		if (currentName === optionName) {
			if (Number(quantity) > 1) {
				currentPrice.textContent = `${price * quantity - price} руб.`;
			} else {
				option.remove();
			}
			priceTotal.textContent = `${Number(priceTotal.dataset.price) - price} руб.`;
			priceTotal.dataset.price = Number(priceTotal.dataset.price) - price;
		}
	});
}

function checkCartList(event) {
	const cartProductsContainer = cartContainer.querySelector(".t706__cartwin-products");
	const cartProductList = cartProductsContainer.querySelectorAll(".t706__product");
	if (cartProductList.length === 0) {
		const allAddedOptions = document.querySelectorAll(".added-option");
		allAddedOptions.forEach((option) => {
			option.remove();
		});
		optionsContainers.forEach((container) => {
			const quantityText = container.querySelector(".quantity");
			quantityText.textContent = 0;
		});
		return;
	}
	cartProductList.forEach((product) => {
		const productName = product.querySelector(".t706__product-title").querySelector("a").textContent;

		optionsContainers.forEach((container) => {
			const quantityText = container.querySelector(".quantity");
			const optionName = container.querySelector(".calculator__option-name");
			const priceText = container.querySelector(".calculator__option-price");
			const price = Number(priceText.dataset.price);

			if (productName === optionName.textContent) {
				if (event.target === product.querySelector(".t706__product-minus").querySelector("img")) {
					removeFromTotal(optionName.textContent, price, quantityText.textContent);
				}
				quantityText.textContent = product.querySelector(".t706__product-quantity").textContent;
			}
		});
	});
}
