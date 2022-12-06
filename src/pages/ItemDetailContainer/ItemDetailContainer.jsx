import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../utils/gFetch"
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {productId} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = doc(db, "items", productId)
    getDoc(queryCollection)
      .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  )) 
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
  }, [productId])
  console.log(product)
return (
  <div>{loading ? <h2>Cargando...</h2> :<ItemDetail product={product} />}</div>
)
}


export default ItemDetailContainer
