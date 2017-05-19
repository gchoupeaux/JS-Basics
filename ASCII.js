// return the code
'a'.charCodeAt(0);

// return the letter using the decimal code
String.fromCharCode(97);

//Print Ascii table
for (let decAsciiCode = 0; decAsciiCode<256; decAsciiCode++){
	console.log(`${decAsciiCode} = ${String.fromCharCode(decAsciiCode)}`);
}
