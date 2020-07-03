import React, { useState } from 'react'

const Search = ({ setQuery }) => {
    const [enteredFilter, setEnteredFilter] = useState('');

    const onChangeHandler = (filter) => {
        setEnteredFilter(filter);
        setQuery(filter);
    };

    return (
        <div>
            <section className='search'>
                <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search characters'
                    value={enteredFilter}
                    onChange={(event) => onChangeHandler(event.target.value)}
                    autoFocus
                />
                </form>
            </section> 
        </div>
    )
}

export default Search
