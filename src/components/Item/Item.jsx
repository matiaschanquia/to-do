import React, { useState } from "react";
import { connect } from "react-redux";
import { eliminarItem, editarItem } from "../../redux/store";

function Item(props) {
    const [todo, setTodo] = useState(props.todo);
    const [edit, setEdit] = useState(false);

    const clickHandlerEditar = () => {
        setEdit(true);
    };
    const clickHandlerEliminar = () => {
        props.eliminarItem(props.id)
    };
    const changeHandler = (e) => {
        setTodo(e.target.value)
    };
    const clickHandlerListo = (e) => {
        e.preventDefault();
        props.editarItem({
            id: props.id,
            todo,
        });
        setEdit(false);
    };

    return (
        <div className="container-item">
            {
                edit ? <form onSubmit={clickHandlerListo}> <input type="text" onChange={changeHandler} value={todo}/> </form>  : <p>{props.todo}</p>
            }
            <div className="btns">
                {
                    edit ? <button className="btn-editar" onClick={clickHandlerListo}>Listo</button> : <button onClick={clickHandlerEditar} className="btn-editar">Editar</button>
                }
                <button className="btn-x" onClick={clickHandlerEliminar}>X</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        eliminarItem(id) {
            dispatch(eliminarItem(id));
        },
        editarItem(obj) {
            dispatch(editarItem(obj))
        }
    }
}

export default connect(null, mapDispatchToProps)(Item);