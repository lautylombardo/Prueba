/*ordenarProducto('Lapiz')
.then(respuesta=>{
    console.log('respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
})
.then(respuestaProcesada=>{
    console.log(respuestaProcesada);
})
.catch(error=>{
    console.log(error);
});
*/

function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando ${producto}`);
        setTimeout(()=>{
            if(producto === 'Lapiz'){
                resolve('Ordenado');
            }else{
                reject('No se pudo ordenar');
            }
        },2000);
    });
}

function procesarPedido(){
    return new Promise((resolve) => {
        console.log('Procesando respuesta...');
        setTimeout(() => {
            resolve(`Pedido procesado`);
        }, 1500);
    });
}

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log('respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');
realizarPedido('Lapiz');

getDatos = () =>{
    setTimeout(()=>{
        return 'datos recibidos';
    }, 1500)
}