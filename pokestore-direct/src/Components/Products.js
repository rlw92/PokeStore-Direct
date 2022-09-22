import '../App.css';
import { useState, useEffect} from 'react'




function Products() {

  const [items,SetItems] = useState([
                  {title:"rhys",
                   book:"help",
                   author:"bec",
                   read:"y"} ,

                   {title:"rhys",
                     book:"help",
                      author:"bec",
                        read:"y"} ,

                        {title:"rhys",
                          book:"help",
                           author:"bec",
                             read:"y"} ,

                             {title:"rhys",
                               book:"help",
                                author:"bec",
                                  read:"y"} ,
                            ])


  return (

    <div>

    <div className="navbar">
    <a href="/">Homepage</a>
    <a href="/products">Products</a>
    <a>Basket</a>
    </div>

    <div className="Header">
    <h1>Products</h1>
    </div>

    <div className="maincontent">

{items.map((item)=>(
  <div>
     <h2 class="title">{item.title}</h2>
     <h2 class="author">{item.book}</h2>
     <h2 class="pages">{item.author}</h2>
</div>))}

    </div>



    </div>

)}

export default Products;
