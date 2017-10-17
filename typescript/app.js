var HelloTypeScript = /** @class */ (function () {
    function HelloTypeScript(message) {
        this.message = message;
    }
    return HelloTypeScript;
}());
var hello = new HelloTypeScript("Hello");
console.log(hello.message);
