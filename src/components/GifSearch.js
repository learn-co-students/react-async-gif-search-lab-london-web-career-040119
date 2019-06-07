import React from 'react';

const GifSearch = props => {
  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <input
          type="text"
          name="searchTerm"
          value={props.searchTerm}
          onChange={props.changeHandler}
        />
      </form>
    </div>
  );
};

export default GifSearch;
