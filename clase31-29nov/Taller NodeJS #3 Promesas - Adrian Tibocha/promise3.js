function empezarDia(hora){
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="06:00am"))? 
                reject(new Error(`no suena el despertador`))
                : 
                resolved(true)
        })
    })
}

function tomarTransporte(hora){
    console.log(`se despierta`)
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="07:00am")) ?
            reject(new Error(`paro en el portal y no puede coger transporte`))
            :
            resolved(true)
        },2000)
    })
}

function estudiar(hora){
    console.log(`se alista y sale a coger transmilenio`)
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="08:15am")) ? 
            reject(new Error(`llego tarde y no puede entrar a clases`))
            : 
            resolved(true)
        },2000)
    })
}

function almuerzo(hora){
    console.log(`entra a estudiar`)
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="12:00pm"))? reject(new Error(`no puede almorzar por que le sale un pelo en la sopa
            `)): resolved(true)
        },2000)
    })
}

function trabajar(hora){
    console.log(`sale del estudio y almuerza`)
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="01:00pm"))? reject(new Error(`se olvida del carnet y no lo dejan ingresar`)): resolved(true)
        },2000)
    })
}

function relajarse(hora){
    console.log(`va a trabajar en Belatrix`)
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="08:00pm"))? reject(new Error(`lo roban`)): resolved(true)
        },2000)
    })
}

function volverCasa(hora){
    console.log(`sale del trabajo a relajarse con sus compañeros de trabajo`)
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="11:00pm"))? reject(new Error(`ha perdido las llaves de su casa y le toca dormir en 
            el parque`)): resolved(true)
        },2000)
    })
}

function acostarse(hora){
    console.log(`vuelve a casa`)
    return promise = new Promise((resolved,reject)=>{
        setTimeout(()=>{
            return(!(hora=="01:00am"))? reject(new Error(`olvido pagar la mensualidad de Netflix... se desbarata
            la cama y no tiene donde dormir`)): resolved(true)
        },2000)
    })
}



empezarDia("06:00am")
    .then((resolved)=>tomarTransporte("07:00am")
    .then((resolved)=>estudiar("08:20am")
    .then((resolved)=>almuerzo("12:00pm")
    .then((resolved)=>trabajar("01:00pm")
    .then((resolved)=>relajarse("08:00pm")
    .then((resolved)=>volverCasa("11:00pm")
    .then((resolved)=>acostarse("01:00am")
    .then((resolved)=>console.log(`se acuesta para ver Netflix`)))))))))
    .catch((err)=>{console.log(err.message)})