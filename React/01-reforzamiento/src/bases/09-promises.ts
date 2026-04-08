

const myPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // console.log('Yo quiero mi dinero');
        reject('me cagaron');
    }, 2000);
})

myPromise.then((myMoneyIsBack) => {
    console.log('Gracias por devolverme mi dinero', myMoneyIsBack);
}).catch((error) => {
    console.warn('Algo salió mal', error);
}).finally(() => {
    console.log('Toco seguir con mi vida');
})