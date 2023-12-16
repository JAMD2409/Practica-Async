const pasarElExamen = (examen) => {
    return new Promise((res,rej) => { 
        setTimeout(() => {
            if (examen >= 18){
                res("pasaste el examen");
            } else{2
            rej("perdiste el examen");
        }
            
        }, 2000);
    });
};

async function resultado(examen){
    const respuesta = await resultado(examen);
    return respuesta
}

pasarElExamen(24)
.then((respuesta)=> console.log ("tu respuesta es que ", respuesta))
.catch((errores)=> console.error(errores))
