interface vec3 {
    x: number
    y: number
    z: number
}

// x * y * z
const vecProduct = ({ x, y, z }: vec3) =>
    x * y * z

console.log(vecProduct({
    x: 5,
    y: 10,
    z: 15
}));

// setTimeout(() => console.log("3 seconds passed"), 3000);


const getMessage = () => new Promise<string>(resolve =>
    setTimeout(() => resolve("3 seconds passed"), 3000)
)
// "Old way":
// getMessage().then(console.log);


// async / await
// "New way":

const main = async (functionToWait: () => Promise<string>) => {
    console.log("Started");
    const result = await functionToWait();
    console.log(result);

    // Same as:
    //let result2: string
    //functionToWait().then( str => { result2 = str });
}

main(getMessage);
