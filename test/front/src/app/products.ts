export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    img: string[];
    categoryName: string;
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
    "https://resources.cdn-kaspi.kz/img/m/p/h8b/h12/67236400529438.jpg?format=gallery-large"],
        categoryName: "laptop"
    },
    {
        id: 2,
        name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
        price: 459949,
        description: 'процессор: Apple M1 размер оперативной памяти: 8 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h16/h90/63947827478558.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-medium"],
    categoryName: "laptop"
    },
    {
        id: 3,
        name: 'Ноутбук ASUS TUF Gaming F15 FX506LHB 90NR03U2-M007N0 черный',
        price: 363930,
        description: 'процессор: Intel Core i5 размер оперативной памяти: 8 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/h2c/he4/64479220301854.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hdc/hc5/64479222857758.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hfb/hcc/64479225413662.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h11/h01/64479293767710.jpg?format=gallery-medium"],
    categoryName: "laptop"
    },
    {
        id: 4,
        name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
        price: 672300,
        description: 'цвет: фиолетовый размер оперативной памяти: 6 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/ha5/hae/64508111912990.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h11/h2e/64508113485854.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/he8/h62/64508118794270.jpg?format=gallery-medium"],
    categoryName: "smartphone"
    },
    {
        id: 5,
        name: 'Смартфон Apple iPhone 13 128Gb черный',
        price: 361850,
        description: 'процессор: Intel Core i5 размер оперативной памяти: 8 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/h09/ha2/64208868933662.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hf3/h78/64208871587870.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium"],
    categoryName: "smartphone"
    },
    {
        id: 6,
        name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
        price: 281500,
        description: 'процессор: Intel Core i5 размер оперативной памяти: 8 ГБ',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hed/hb1/63897055559710.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/ha1/h45/63897058377758.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h78/h0f/63897061457950.jpg?format=gallery-medium"],
    categoryName: "smartphone"
    },
    {
        id: 7,
        name: 'Наушники Apple AirPods Pro 2nd generation белый',
        price: 116890,
        description: 'шумоподавления: Да подключение: беспроводное',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hf5/h7a/64511116378142.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/hf0/hce/64511118704670.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h22/h14/64511121489950.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h21/h3a/64511124602910.jpg?format=gallery-medium"],
    categoryName: "headphones"
    },
    {
        id: 8,
        name: 'Наушники HYPERX CLOUD II KHX-HSCP-RD красный',
        price: 50960,
        description: 'тип: гарнитура подключение: с проводом',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/hb1/hfc/64013103595550.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/heb/hc1/64013105954846.jpg?format=gallery-medium",
    "https://resources.cdn-kaspi.kz/img/m/p/h1f/h2b/64013108969502.jpg?format=gallery-medium"],
    categoryName: "headphones"
    },
    {
        id: 9,
        name: 'Наушники Sony WH-1000XM4 черный',
        price: 198748,
        description: 'шумоподавления: Да подключение: беспроводное',
        img: ["https://resources.cdn-kaspi.kz/img/m/p/hb9/h06/63894367535134.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h1c/h96/63894370746398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/h1e/63894374121502.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf6/h62/63894376906782.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h4a/h09/63894380118046.jpg?format=gallery-medium"],
    categoryName: "headphones"
    },

];