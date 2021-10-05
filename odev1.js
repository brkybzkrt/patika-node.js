const arguments = process.argv.slice(2);




function daireAlan(r) {
    const pi = 3; // 3 kabul ettik
    let result =pi*(r**2)
    return `yarı çapı ${r} olan dairenin alanı ${result} dur`
}

console.log(daireAlan(Number(arguments[0])))