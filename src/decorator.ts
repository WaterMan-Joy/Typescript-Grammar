function Lo(customString: string) {
  return function (constructor: Function) {
    console.log(customString);
    console.log(constructor);
  };
}
function WithTemplete(templete: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = templete;
    }
  };
}

// @Lo("custom string")
@WithTemplete("<h1>Hello</h1>", "app")
class CustomClass {
  name = "Joy";
  constructor() {
    console.log("custom Class");
  }
}
