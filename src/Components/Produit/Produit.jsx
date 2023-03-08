import React, {useRef ,useState,useEffect} from 'react'
import ProduitChild from './ProduitChild';
function Produit(props) {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(count + 1);
    }
    const [value, setValue] = useState('');

    function handleInputChange(event) {
      setValue(event.target.value);
    }
    const inputRef = useRef(null);
    function handleClick() {
        const inputElement = inputRef.current;
        inputElement.value = value;
      }

      useEffect(() => {
        document.title = `Count: ${count}`;
      }, [count]);

  return (
    <div>

<ProduitChild nom={props.nom} qte={props.qte} prix={props.prix}/>
       <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>

      <input type="text" value={value} onChange={handleInputChange} />
      <input type="text" value={value}  />
      <br></br>
      <input type="text"  id="myInput" ref={inputRef} />
      <button onClick={handleClick}>Set Value</button>
    </div>
  )
}

export default Produit
