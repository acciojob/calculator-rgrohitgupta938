const appendCharacter = (char) => {
  const display = document.getElementById("input");
  if (char === "C") {
    display.value = "";
  } else {
    display.value += char;
  }
};

const deleteLastCharacter = () => {
  const display = document.getElementById("input");
  display.value = display.value.slice(0, -1);
};

const calculateResult = () => {
  const display = document.getElementById("input");
  let result;
  try {
    if (display.value === "0/0") {
      result = "NaN";
    } else if (display.value.includes("/0")) {
      throw new Error("Division by zero");
    } else {
      result = math.evaluate(display.value);
    }

    console.log(result);
    display.value = result;
  } catch (error) {
    if (error.message === "Division by zero") {
      console.log("inif");
      display.value = "Infinity";
    } else {
      console.log("err");
      display.value = "Error";
    }
  }
};
