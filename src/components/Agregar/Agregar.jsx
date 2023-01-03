import React, { useState } from "react";
import { connect } from "react-redux";
import { agregarItem } from "../../redux/store";

function Agregar(props) {
    const [todo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const id = Date.now();
        props.agregarItem({
            id,
            todo,
        });
        setTodo("");
    }

    const changeHandler = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className="container-agregar" onSubmit={submitHandler}>
            <form className="form">
                <input type="text" onChange={changeHandler} value={todo} placeholder="Ingrese un por hacer..." />
                <button type="submit" disabled={todo ? false : true}>Agregar</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        agregarItem(obj) {
            dispatch(agregarItem(obj))
        }
    }
}

export default connect(null, mapDispatchToProps)(Agregar);
