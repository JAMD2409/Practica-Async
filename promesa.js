const irDeFiesta = (edad) => {
    return new Promise((res,rej) => { 
        setTimeout(() => {
            if (edad >= 18){
                res("puedes ir de fiesta");
            } else{2
            rej("te quedas en casa");
        }
            
        }, 2000);
    });
};

irDeFiesta(24)
.then((respuesta)=> console.log ("esta es tu respuesta", respuesta))
.catch((errores)=> console.error(errores))
