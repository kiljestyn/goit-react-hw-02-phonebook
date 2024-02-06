import css from "./filter.module.css";
import { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <div className={css.filterContainer}>
        <input
          type="text"
          name="filter"
          className={css.input}
          value={this.props.filter}
          onChange={this.props.onChange}
          placeholder="Write name"
        />
      </div>
    );
  }
}

export default Filter;

// export const Filter = ({ handleFindChange, state: { filter } }) => {
//     const handleChange = e => {
//       const inputValue = e.target.value;
  
//       if (!validateName(inputValue)) {
//         alert('Please enter a valid name for filtering');
//         return;
//       }
  
//       handleFindChange(e);
//     };
//     const handleBackspace = e => {
//       if (e.key === 'Backspace' && filter.length > 0) {
//         const updatedFilter = filter.slice(0, -1);
//         handleFindChange({ target: { value: updatedFilter } });
//       }
//     };
  
//     const validateName = name => /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);
  
//     return (
//       <div className={css.FilterContainer}>
//         <label htmlFor="filter">Find contact by name</label>
//         <input className={css.Input}
//           type="text"
//           placeholder="search..."
//           name="filter"
//           id="filter"
//           value={filter}
//           onChange={handleChange}
//           onKeyDown={handleBackspace}
//         />
//       </div>
//     );
//   };