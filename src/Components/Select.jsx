import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


function Select(props) {
    const navigate = useNavigate()
    const [Pselect, setPselect] = useState("")
    const seleccion = async() => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const {results} = await data.json();
        setPselect(results);
    };
    const detalles = async () => {
        if (Pselect) navigate(`/pokemones/${Pselect}`);
        else alert("Debe Seleccionar un Pokemon");
    };
    useEffect(() => {
        seleccion();
    }, []);

    return (
        <div>
            <select className="form-select" onChange={((e) =>  setPselect(e.target.value))}>
                <option >Elige tu Pokemon</option>
                {props.list.map((item) => (<option key={item.name} value={item.name} >{item.name}</option>))}
            </select>
            <button className="btn btn-success m-3 fs-5 p-6" onClick={detalles}>Detalles</button>
        </div>

    )
}
export default Select
