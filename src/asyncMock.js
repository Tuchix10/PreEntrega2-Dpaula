const products = [
    {
        id: '1',
        name:  'AMD Ryzen 5 5600g',
        price: 97990,
        category: 'CPU',
        img: 'https://www.venex.com.ar/products_images/1638466775_sdfdgfeshsd.jpg',
        stock: 25,
        description: 'Procesador de 6 núcleos con 12 hilos y VGA integrada'
    },
    {
        id: '2',
        name:  'Intel Core I3 10105F 4.4GHz 6MB LGA1200',
        price: 39990,
        category: 'CPU',
        img: 'https://www.venex.com.ar/products_images/1623360341_1609357869_bx80701101005.jpg',
        stock: 0,
        description: 'Procesador de 4 núcleos y 8 hilos sin VGA integrada'
    },
    {
        id: '3',
        name:  'AMD Ryzen 7 5800x',
        price: 213990,
        category: 'CPU',
        img: 'https://www.venex.com.ar/products_images/1605015858_microprocesadoramdryzen75800x.jpg',
        stock: 25,
        description: 'Procesador de 8 núcleos y 16 hilos sin VGA integrada'
    },
    {
        id: '4',
        name:  'Nvidia RTX 3060TI Palit',
        price: 200000,
        category: 'GPU',
        img: 'https://www.venex.com.ar/products_images/1675347137_imagen.png',
        stock: 10,
        description: 'Nvidia RTX 3060TI producida por Palit'
    },
    {
        id: '5',
        name:  'PowerColor RX550 Low Profile 4Gb GDDR5',
        price: 125000,
        category: 'GPU',
        img: 'https://www.venex.com.ar/products_images/1645545226_2112161734340.png',
        stock: 20,
        description: 'AMD RX550 producida por PowerColor'
    },
    {
        id: '6',
        name:  'Nvidia RTX 4090 GameRock',
        price: 1250000,
        category: 'GPU',
        img: 'https://www.venex.com.ar/products_images/1677853029_4090-sin_oc.png',
        stock: 4,
        description: 'Nvidia RTX 4090 producida por GameRock'
    },
    {
        id: '7',
        name:  'RAM DDR4 8GB 3200MHz Adata XPG Spectrix D60G RGB',
        price: 20000,
        category: 'RAM',
        img: 'https://www.venex.com.ar/products_images/1594237851_productgallery38.png',
        stock: 125,
        description: 'RAM DDR4 a 3200MHz de 8Gb de densidad con RGB'
    },
    {
        id: '8',
        name:  'RAM DDR4 4GB 2666MHz Crucial',
        price: 7999,
        category: 'RAM',
        img: 'https://www.venex.com.ar/products_images/1659369566_ram.png',
        stock: 200,
        description: 'RAM DDR4 a 2666MHz de 4Gb de densidad'
    },
    {
        id: '9',
        name:  'RAM DDR4 16GB 3200MHz Kingston Fury Renegade',
        price: 40000,
        category: 'RAM',
        img: 'https://www.venex.com.ar/products_images/1649863601_ferert.png',
        stock: 50,
        description: 'RAM DDR4 a 3200MHz de 16Gb de densidad sin RGB con disipador'
    },
    {
        id: '10',
        name:  'Motherboard Asus ROG Strix B550-A Gaming AM4',
        price: 124999,
        category: 'MB',
        img: 'https://www.venex.com.ar/products_images/1655403359_tykoy.png',
        stock: 10,
        description: 'Motherboard Asus con soporte socket AM4'
    },
    {
        id: '11',
        name:  'Motherboard MSI MPG B550 Gaming Plus AM4',
        price: 95000,
        category: 'MB',
        img: 'https://www.venex.com.ar/products_images/1674828979_msi-3.png',
        stock: 125,
        description: 'Motherboard MSI con soporte socket AM4'
    },
    {
        id: '12',
        name:  'Motherboard Gigabyte H610M-H M.2 DDR4 LGA 1700',
        price: 20000,
        category: 'MB',
        img: 'https://www.venex.com.ar/products_images/1650480314_dfgdfgdfg.png',
        stock: 125,
        description: 'Motherboard Gigabyte con soporte socket LGA 1700 para Intel Core de 12 generación'
    },
    {
        id: '13',
        name:  'SSD 480Gb Kingston A400 Sata 3',
        price: 20105,
        category: 'storage',
        img: 'https://www.venex.com.ar/products_images/1585751936_ssd_480gb_kingston_a400.jpg',
        stock: 20,
        description: 'Disco solido de 480Gb de densidad'
    },
    {
        id: '14',
        name:  'HDD 1TB Western Digital WD Blue',
        price: 25199,
        category: 'storage',
        img: 'https://www.venex.com.ar/products_images/1586464610_disc3.jpg',
        stock: 125,
        description: 'Disco duro mecánico de 1Tb'
    },
    {
        id: '15',
        name:  'SSD NVME Kingston Fury Renegade M.2 NVME',
        price: 49990,
        category: 'storage',
        img: 'https://www.venex.com.ar/products_images/1649440719_1648646765_254634drgfebdfe.jpg',
        stock: 15,
        description: 'Disco solido NVME de 500Gb'
    },
    {
        id: '16',
        name:  'Gabinete Aerocool Mecha TG + 1 FAN ARGB',
        price: 40990,
        category: 'case',
        img: 'https://www.venex.com.ar/products_images/1604680826_mechaargbinfographic700x700px01600x600.png',
        stock: 40,
        description: 'Gabinete Mid Tower Aerocool ATX-mATX-mITX'
    },
    {
        id: '17',
        name:  'Gabinete Corsair 220T RGB TG Smart ICUE White',
        price: 72749,
        category: 'case',
        img: 'https://www.venex.com.ar/products_images/1586372918_.jpg',
        stock: 25,
        description: 'Gabinete Corsair Blanco, Mid Tower para MB ATX'
    },
    {
        id: '18',
        name:  'Gabinete Thermaltake AH T200 TG Negro',
        price: 100649,
        category: 'case',
        img: 'https://www.venex.com.ar/products_images/1669204509_t200-4.png',
        stock: 2,
        description: 'Gabinete Thermaltake Micro y Mini ATX'
    },
    {
        id: '19',
        name:  'Fuente Aerocool Cylon 700W RGB 80+ Bronze',
        price: 43990,
        category: 'powersupply',
        img: 'https://www.venex.com.ar/products_images/1585770521_fuente_aerocool_cylon_700w_rgb_80_bronze.png',
        stock: 15,
        description: 'Fuente Aerocool Cylon No modular'
    },
    {
        id: '20',
        name:  'Fuente AZZA 650W 80+ Bronze',
        price: 35990,
        category: 'powersupply',
        img: 'https://www.venex.com.ar/products_images/1597171255_hijklluik.jpg',
        stock: 25,
        description: 'Fuente certificada 80+ Bronze AZZA No modular'
    },
    {
        id: '21',
        name:  'Fuente AZZA 750W 80+ Bronze ARGB',
        price: 47990,
        category: 'powersupply',
        img: 'https://www.venex.com.ar/products_images/1624359646_6d5fg1s6d5fg.png',
        stock: 20,
        description: 'Fuente AZZA certificada 80+ Bronze modular'
    },
    {
        id: '22',
        name:  'Fan Cooler CPU AMD Wraith Sealth 65W',
        price: 45000,
        category: 'cooling',
        img: 'https://www.venex.com.ar/products_images/1672334311_cooler.png',
        stock: 60,
        description: 'Cooler de fabrica para socket AM4'
    },
    {
        id: '23',
        name:  'Fan Cooler Falcom AS-01 ARGB',
        price: 3590,
        category: 'cooling',
        img: 'https://www.venex.com.ar/products_images/1680106749_argb_as-01.jpg',
        stock: 80,
        description: 'Cooler fan 120mm ARGB'
    },
    {
        id: '24',
        name:  'Water Cooler Darkflash Twister DX360 ARGB 360 Black',
        price: 70990,
        category: 'cooling',
        img: 'https://www.venex.com.ar/products_images/1677782667_water-1.jpg',
        stock: 10,
        description: 'Radiador 3x120mm'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}