const numbersToWords = {
	0: 'zero',
	1: 'um',
	2: 'dois',
	3: 'três',
	4: 'quatro',
	5: 'cinco',
	6: 'seis',
	7: 'sete',
	8: 'oito',
	9: 'nove',
	10: 'dez',
	11: 'onze',
	12: 'doze',
	13: 'treze',
	14: 'quatorze',
	15: 'quinze',
	16: 'dezesseis',
	17: 'dezessete',
	18: 'dezoito',
	19: 'dezenove',
	20: 'vinte',
	30: 'trinta',
	40: 'quarenta',
	50: 'cinquenta',
	60: 'sessenta',
	70: 'setenta',
	80: 'oitenta',
	90: 'noventa',
	100: 'cento',
	200: 'duzentos',
	300: 'trezentos',
	400: 'quatrocentos',
	500: 'quinhentos',
	600: 'seiscentos',
	700: 'setecentos',
	800: 'oitocentos',
	900: 'novecentos'
};

function numToWords( number ) {
	if ( number in numbersToWords ) return numbersToWords[number];
	let words = '';

	if ( number >= 1000000000 ) {
		words += numToWords( Math.floor( number / 1000000000 ) );
		words += Math.floor( number / 1000000000 ) == 1 ? ' bilhão ' : ' bilhões ';
		number %= 1000000000;
	}

	if ( number >= 1000000 ) {
		words += numToWords( Math.floor( number / 1000000 ) );
		words += Math.floor( number / 1000000 ) == 1 ? ' milhão ' : ' milhões ';
		number %= 1000000;
	}
	
	if ( number >= 1000 ) {
		words += numToWords( Math.floor( number / 1000 ) ) + ' mil ';
		number %= 1000;
	}

	if ( number >= 100 ) {
        words += number == 100 ? 'cem' : numbersToWords[ Math.floor( number / 100 ) * 100 ];
		number %= 100;
	}

	if ( number > 0 ) {
		if( words !== '' ) words += ' e ';
		if( number < 20 ) {
			words += numbersToWords[number];
		} else {
			words += numbersToWords[Math.floor( number / 10 ) * 10];
			if( number % 10 > 0 ) words += ' e ' + numbersToWords[number % 10];
		}
	}

	return words;
}