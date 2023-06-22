/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BT {
  root;

  constructor(root) {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
      } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
      }
    }
  }
}

const arr = [7, 4, 3, 5, 7, 6, 1, 2, 9, 1, 3, 5, 7, 9, 4];

function search(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ??= 0;
    obj[arr[i]] += 1;
  }
  return Object.entries(obj).find(([key, value]) => value === 1)[0];
}

function change(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  const newObj = Object.entries(obj).filter(([key, value]) => value % 2 == 0);
  const newArr = arr.filter((x) => x % 2 !== 0).sort((a, b) => a - b);

  for (let i = 0; i < newObj.length; i++) {
    const index = newObj[i][0];
    const num = newObj[i][1];
    newArr.splice(index, 0, num);
  }

  return newArr;
}

console.log(change(arr));

// remember the structure with hash map
// remove even numbers
// sort array
// insert even numbers on its place
