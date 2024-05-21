const url='https://fakestoreapi.com/products';
fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const findById = data.find(products => products.id === 2);
        console.log(findById);
        
        const filters = data.filter(products => products.id <= 5);
        console.log(filters);

        const title = data.map(products => products.title.toUpperCase());
        console.log(title);

        data.map((m)=>{
            console.log(m.id);
        })

        for(i=0;i<=data.length;i++){
           console.log(data[i]);
        }
        
        console.log(data.length);

        console.log(data.at(7));

        const fe = data.forEach(category => console.log(category));
        console.log(fe);

        console.log(data.find(data => data.id === 1).price.toString());

        console.log(data.sort());
        console.log(data.reverse());
        
        const ctg = data.filter(products => products.category);
        console.log(ctg);
        
        const catg =data.filter(products => products.category === "jewelery");
        console.log(catg);
        
        console.log(data.pop());

        console.log(data.push({
            id: 21,
            title: 'Pierced Fish Gold Platted Steel',
            price: 12,
            category: 'jewelery'
        }));
        console.log(data);

        console.log(data.shift());
        console.log(data.length);
        console.log(data.unshift({
            "id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}
        }));

        
    })