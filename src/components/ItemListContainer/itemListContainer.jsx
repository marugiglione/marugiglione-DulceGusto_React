

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'


const ItemListContainer = (obj) => {  
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    
    useEffect(()=> {
        if (categoriaId) {
            gFetch()
            .then(resp =>  setProducts(resp.filter(prod => prod.categoria === categoriaId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
            
        }else{
            gFetch()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
        }
        
        
    }, [categoriaId])
    


    const cambiarEstado = () => {
        setBool(!bool)
    }
    console.log(categoriaId)


    return (
        loading 
            ? 
                <h2>CArgando...</h2>            
            :
                <div>
                    <h1>DULCE GUSTO</h1> 
                    <h3>PRODUCTOS</h3> 
                    {/* <button onClick={cambiarEstado}>cambiar estado</button>    */}
                    
                    { products.map( obj =>  <div key={obj.id} className='card w-50 mt-2'>
                                                <Link to={`/detail/${obj.id}`}>
                                                    <div className='card-header'>
                                                        {obj.name}
                                                    </div>
                                                    <div className='card-body'>
                                                        <center>
                                                            <img src={obj.foto} className="w-50" />
                                                        </center>
                                                    </div>
                                                    <div className='card-footer'>
                                                        categoria: {obj.categoria}
                                                        {/* precio : {obj.price} */}
                                                    </div>
                                                </Link>
                                            </div> )  }     
                    
                </div>
    )
}



export default ItemListContainer