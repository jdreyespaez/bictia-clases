var buffer = new Buffer.alloc(26)

console.log(buffer.length)

for (var i = 0; i < buffer.lenght; i++){
    buffer[i] = i + 97
}

console.log(buffer)
console.log(buffer.toString('ascii'))