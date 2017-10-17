var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// x * y * z
const vecProduct = ({ x, y, z }) => x * y * z;
console.log(vecProduct({
    x: 5,
    y: 10,
    z: 15
}));
// setTimeout(() => console.log("3 seconds passed"), 3000);
const getMessage = () => new Promise(resolve => setTimeout(() => resolve("3 seconds passed"), 3000));
// "Old way":
// getMessage().then(console.log);
// async / await
// "New way":
const main = (functionToWait) => __awaiter(this, void 0, void 0, function* () {
    console.log("Started");
    const result = yield functionToWait();
    console.log(result);
    // Same as:
    //let result2: string
    //functionToWait().then( str => { result2 = str });
});
main(getMessage);
//# sourceMappingURL=app.js.map