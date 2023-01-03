import React from "react";
import { connect } from "react-redux";
import Item from "../Item/Item";

function Lista(props) {
    return (
        <div className="container-lista">
            {
                props.todos.map(item => (
                    <Item todo={item.todo} id={item.id} key={item.id}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, null)(Lista);