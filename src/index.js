module.exports = function toReadable(number) {
    let zero = 'zero'
    let one = 'one'
    let two = 'two'
    let three = 'three'
    let four = 'four'
    let five = 'five'
    let six = 'six'
    let seven = 'seven'
    let eight = 'eight'
    let nine = 'nine'
    let ten = 'ten'
    let eleven = 'eleven'
    let twelve = 'twelve'
    let thirteen = 'thirteen'
    let teen = 'teen'
    let fif = 'fif'
    let eigh = 'eigh'
    let twen = 'twen'
    let thir = 'thir'
    let forty = 'for'
    let ty = 'ty'
    let hundred = 'hundred'
    let thousand = 'thousand'

    let obj = { '0': zero, '1': one, '2': two, '3': three, '4': four, '5': five, '6': six, '7': seven, '8': eight, '9': nine, '10': ten, '11': eleven, '12': twelve, '13': thirteen, '20': twen, '30': thir, '40': forty }
    for (let item in obj) {
        if (Number(item) === number) {
            if (Number(item) === 20) {
                return `${twen}${ty}`
            } else if (Number(item) === 30) {
                return `${thir}${ty}`
            } else if (Number(item) === 40) {
                return `${forty}${ty}`
            }
            else {
                return obj[item]
            }
        } else if (number > 13 && number < 20) {
            let n = number.toString()
            let k = obj[n[1]]
            if (k === 'five') {
                return `${fif}${teen}`
            } else if (k === 'eight') {
                return `${eigh}${teen}`
            } else {
                return `${k}${teen}`
            }
        } else if (number > 20 && number < 100) {
            let n = number.toString()
            let k = obj[n[0]]
            let j = obj[n[1]]
            if (k === 'two') {
                return `${twen}${ty} ${j}`
            } else if (k === 'three') {
                if (j === 'zero') {
                    return `${thir}${ty}`
                } else {
                    return `${thir}${ty} ${j}`
                }

            } else if (k === 'four') {
                if (j === 'zero') {
                    return `${forty}${ty}`
                } else {
                    return `${forty}${ty} ${j}`
                }

            } else if (k === 'five') {
                if (j === 'zero') {
                    return `${fif}${ty}`
                } else {
                    return `${fif}${ty} ${j}`
                }

            } else if (k === 'eight') {
                if (j === 'zero') {
                    return `${eigh}${ty}`
                } else {
                    return `${eigh}${ty} ${j}`
                }

            }
            else {
                if (j === 'zero') {
                    return `${k}${ty}`
                } else {
                    return `${k}${ty} ${j}`
                }
            }
        } else if (number > 99 && number < 1000) {
            let n = number.toString()
            let k = obj[n[0]]
            let j = obj[n[1]]
            let u = obj[n[2]]
            let newStr = `${k} ${hundred}`
            if (j === 'zero' && u === 'zero') {
                return newStr
            } else if (j === 'zero') {
                return `${newStr} ${u}`
            } else if (j === 'one') {
                if (obj[`${n[1]}${n[2]}`]) {
                    return `${newStr} ${obj[`${n[1]}${n[2]}`]}`
                } else if (u === 'five') {
                    return `${newStr} ${fif}${teen}`
                } else if (u === 'eight') {
                    return `${newStr} ${eigh}${teen}`
                } else {
                    return `${newStr} ${u}${teen}`
                }

            }
            else {
                if (j === 'two') {
                    if (u === 'zero') {
                        return `${newStr} ${twen}${ty}`
                    } else {
                        return `${newStr} ${twen}${ty} ${u}`
                    }
                } else if (j === 'three') {
                    if (u === 'zero') {
                        return `${newStr} ${thir}${ty}`
                    } else {
                        return `${newStr} ${thir}${ty} ${u}`
                    }

                } else if (j === 'four') {
                    if (u === 'zero') {
                        return `${newStr} ${forty}${ty}`
                    } else {
                        return `${newStr} ${forty}${ty} ${u}`
                    }

                } else if (j === 'five') {
                    if (u === 'zero') {
                        return `${newStr} ${fif}${ty}`
                    } else {
                        return `${newStr} ${fif}${ty} ${u}`
                    }

                } else if (j === 'eight') {
                    if (u === 'zero') {
                        return `${newStr} ${eigh}${ty}`
                    } else {
                        return `${newStr} ${eigh}${ty} ${u}`
                    }

                }
                else {
                    if (u === 'zero') {
                        return `${newStr} ${j}${ty}`
                    } else {
                        return `${newStr} ${j}${ty} ${u}`
                    }
                }

            }

        }
    }
}