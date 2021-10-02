/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};


console.log("The backpack object initially:", backpack);

const secondBackpack = backpack;

console.log("the secondBackpack object initially", secondBackpack);

secondBackpack.newStrapLength(30,30);

console.log("the backpack object following referance change", backpack);

console.log("the secondBackpack object following function call", secondBackpack);
