async function getdata(){
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products
}

export default async function list(){
    const products = await getdata();
    console.log(products);
    return(
        <div>
          <h1>Products List in server side</h1>
        </div>
    )
}