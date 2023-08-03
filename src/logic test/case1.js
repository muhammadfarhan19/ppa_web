// CASE 1
const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// 1. Buah apa saja yg dimiliki Andi
const getName = fruits.map((el) => el.fruitName);
console.log("getName : ", getName);

// 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
const importFruit = fruits.filter((el) => el.fruitType === "IMPORT");
const localFruit = fruits.filter((el) => el.fruitType === "LOCAL");
console.log("importFruit : ", importFruit);
console.log("localFruit : ", localFruit);

// 3. Berapa total stock buah yang ada di masing-masing wadah?
const importFruitTotal = importFruit.reduce((acc, curr) => acc + curr.stock, 0);
const localFruitTotal = localFruit.reduce((acc, curr) => acc + curr.stock, 0);
console.log("importFruitTotal : ", importFruitTotal);
console.log("localFruitTotal : ", localFruitTotal);

// 4. Komentar terkait Studi Kasus
// ==>>>> fruitId harusnya unik / beda tiap buah
