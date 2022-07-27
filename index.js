const arr1 = [1, 4, 5, 3];
const arr2 = [6, 3, 5, 2, 4];
const arr3 = [1, 5, 2, 4];

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

render(arr1);
render(arr2);
render(arr3);
