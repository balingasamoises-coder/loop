const first = ["Apple", "Banana"];
const second = ["Mango", "Orange"];
const allFruits = [...first, ...second];

for (const fruit of allFruits) {
    console.log(fruit);
}
