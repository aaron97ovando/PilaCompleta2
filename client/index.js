console.log('Webpack Esta trabajando!!!');
// Default parameters Es6/2015
let show = (m = "hola") => {
    alert(m)
};

show();

function resolveAfter2Seconds(){
    return new Promise( resolve => {
        setTimeout(()=>{
            resolve("resolved")
        }, 2000);
    });
}

async function asyncCall(){
    console.log("Calling an async function");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();