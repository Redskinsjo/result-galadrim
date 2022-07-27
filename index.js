const arr1 = [1, 4, 5, 3];
const arr2 = [6, 3, 5, 2, 4];
const arr3 = [1, 5, 2, 4];

// avec forEach
function render(arr) {
  const sorted = arr.sort((a, b) => a - b);

  let result;
  let followup = sorted[0] - 1;

  sorted.forEach((curr) => {
    if (!result) {
      followup++;
    }
    if (curr !== followup) {
      result = followup;
    }
  });

  if (!result) {
    result = 1;
  }

  console.log(result);
}

// avec reduce
function simplerRender(arr) {
  const sorted = arr.sort((a, b) => a - b);

  let result;

  sorted.reduce((acc, curr) => {
    if (curr !== acc + 1) {
      result = acc + 1;
      return curr;
    }
    return acc + 1;
  }, 0);

  console.log(result);
}

render(arr1);
render(arr2);
render(arr3);
simplerRender(arr1);
simplerRender(arr2);
simplerRender(arr3);
