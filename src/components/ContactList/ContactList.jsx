import css from "./contactList.module.css";
import { Component } from "react";

class ContactList extends Component {
    state = {};
  
    handleClick = e => {
      this.props.handleDelete(e.target.id);
    };
    render() {
      const elements = this.props.data.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          {name} : {number}
          <button
            className={css.button}
            id={id}
            type="button"
            onClick={this.handleClick}
          >
            Delete
          </button>
        </li>
      ));
      return (
        <>
          <ul className={css.list}> {elements}</ul>
        </>
      );
    }
  }
  
  export default ContactList;