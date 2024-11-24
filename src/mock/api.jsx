
const productos =[
    {
        id:1,
        name:'Pizza Americana',
        category:'menu',
        description:'lorem ipsum',
        price: 25,
        img:'https://picsum.photos/201',
        stock:10
    },
    {
        id:2,
        name:'Pizza Hawaina',
        category:'menu',
        description:'lorem ipsum',
        price: 25,
        img:'https://picsum.photos/202',
        stock:25
    },{
        id:3,
        name:'Combo 1',
        category:'Promociones',
        description:'1/2 pizza clasica +4 pan al ajo+1 gaseosa pepsi de 1lt',
        price: 20,
        img:'https://picsum.photos/203',
        stock:20
    },
    {
        id:4,
        name:'Combo 2',
        category:'Promociones',
        description:'1/2 pizza clasica+6 alitas (BBQ, bufalo o crispy)',
        price: 25,
        img:'https://picsum.photos/204',
        stock:20
    },
    {
        id:5,
        name:'Promo Familiar 1',
        category:'mas vendidos',
        description:'1 pizza clasica +1lt. Pepsi',
        price: 27,
        img:'https://picsum.photos/205',
        stock:20
    }
]

export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productos)
            }
        },2000)

    })
}

export const getOneProduct = (id) => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let onProduct = productos.find((item)=> item.id === Number(id))
                resolve(onProduct)
            }
        },2000)
    })
}