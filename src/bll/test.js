export const test = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World' + Date.now()), 3000);
})

export const test2 = async () => {
    let a = await test();

    return a;
}
