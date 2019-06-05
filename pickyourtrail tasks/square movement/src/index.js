var container = document.getElementById("container");
var square = document.getElementById("square");
var forwardButton = document.getElementById("forward-button");
var backwardButton = document.getElementById("backward-button");

forwardButton.addEventListener(
  "click",
  function () {
    squareMovement(moveSquareForward);
  },
  false
);

backwardButton.addEventListener(
  "click",
  function () {
    squareMovement(moveSquareBackard);
  },
  false
);

function squareMovement(direction) {
  var containerStyle = getComputedStyle(container);
  var squareStyle = getComputedStyle(square);

  var containerStyleHeight = parseInt(containerStyle.height, 10);
  var containerStyleWidth = parseInt(containerStyle.width, 10);
  var squareStyleHeight = parseInt(squareStyle.height, 10);
  var sqaureStyleWidth = parseInt(squareStyle.width, 10);

  direction(
    containerStyleHeight,
    containerStyleWidth,
    squareStyleHeight,
    sqaureStyleWidth,
    squareStyle
  );
}

function moveSquareForward(
  containerStyleHeight,
  containerStyleWidth,
  squareStyleHeight,
  sqaureStyleWidth,
  squareStyle
) {
  if (squareStyle.left === "0px") {
    if (squareStyle.top === "0px") {
      square.style.left = `${containerStyleWidth - sqaureStyleWidth}px`;
    } else {
      square.style.top = "0px";
    }
  } else {
    if (squareStyle.top === "0px") {
      square.style.top = `${containerStyleHeight - squareStyleHeight}px`;
    } else {
      square.style.left = "0px";
    }
  }
}

function moveSquareBackard(
  containerStyleHeight,
  containerStyleWidth,
  squareStyleHeight,
  sqaureStyleWidth,
  squareStyle
) {
  if (squareStyle.left === "0px") {
    if (squareStyle.top === "0px") {
      square.style.top = `${containerStyleHeight - squareStyleHeight}px`;
    } else {
      square.style.left = `${containerStyleWidth - sqaureStyleWidth}px`;
    }
  } else {
    if (squareStyle.top === "0px") {
      square.style.left = "0px";
    } else {
      square.style.top = "0px";
    }
  }
}

// to avoid element's position in previous window size to be displayed currently

window.addEventListener("resize", function () {
  square.style.left = "0px";
  square.style.top = "0px";
});
