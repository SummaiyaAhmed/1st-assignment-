/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/
function storeCarInfo(manufacturer: string, model: string, ...extraOption: { [key: string]: any }[]): object //index signature and spread operator

{
    let CarInfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...extraOption)
    }

    return CarInfo;
};

let answer = storeCarInfo("Toyota", "Corolla", { color: "red" }, {Feature: ["Keyless locks and startup", "navigation systems", "Luxury rims and seats"]})
console.log(answer)