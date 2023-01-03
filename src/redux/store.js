import { createStore } from "redux";

const AGREGAR_ITEM = "AGREGAR_ITEM";
const EDITAR_ITEM = "EDITAR_ITEM";
const ELIMINAR_ITEM = "ELIMINAR_ITEM";

export const agregarItem = (obj) => {
    return {
        type: AGREGAR_ITEM,
        payload: obj,
    }
};

export const editarItem = (obj) => {
    return {
        type: EDITAR_ITEM,
        payload: obj,
    }
}

export const eliminarItem = (id) => {
    return {
        type: ELIMINAR_ITEM,
        payload: id,
    }
}

const initialState = {
    todos: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AGREGAR_ITEM:
            return {
                todos: [...state.todos, action.payload],
            };
        case EDITAR_ITEM:
            return {
                todos: state.todos.map(item => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            todo: action.payload.todo,
                        }
                    }
                    return item;
                }),
            };
        case ELIMINAR_ITEM:
            return {
                todos: state.todos.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;