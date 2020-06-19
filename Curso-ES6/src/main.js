const minhaPromise = () => new Promise((resolve, reject) =>  {
setTimeout(() => { resolve('OK') }, 2000);
});

const executarPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executarPromise();