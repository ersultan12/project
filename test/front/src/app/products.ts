export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    img: string[];
}

export const products = [
    {
        id: 1,
        name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
        price: 406000,
        description: 'процессор: Intel Core i5 размер оперативной памяти: 16 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/h8e/h97/67236399218718.jpg?format=gallery-large",
    "https://resources.cdn-kaspi.kz/img/m/p/h02/ha5/67236399743006.jpg?format=gallery-large",
    "https://resources.cdn-kaspi.kz/img/m/p/he4/hc4/67236396859422.jpg?format=gallery-large",
    "https://resources.cdn-kaspi.kz/img/m/p/hf8/h64/67236400005150.jpg?format=gallery-large",
    "https://resources.cdn-kaspi.kz/img/m/p/h8b/h12/67236400529438.jpg?format=gallery-large"]
    },
    {
        id: 2,
        name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
        price: 459949,
        description: 'процессор: Apple M1 размер оперативной памяти: 8 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h16/h90/63947827478558.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-medium"]
    },
    {
        id: 3,
        name: 'Ноутбук ASUS TUF Gaming F15 FX506LHB 90NR03U2-M007N0 черный',
        price: 363930,
        description: 'процессор: Intel Core i5 размер оперативной памяти: 8 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/h2c/he4/64479220301854.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hdc/hc5/64479222857758.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hfb/hcc/64479225413662.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h11/h01/64479293767710.jpg?format=gallery-medium"]
    },
];