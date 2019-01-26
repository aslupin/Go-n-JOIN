import React, { Component } from 'react'
import SearchBoxImage from '../assets/search_page/Rectangle_2.png'
import style from 'styled-components'
class Search extends Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
  }

  //   handleChange = e => {
  //     console.log(e.target.value)
  //     this.props.inputValue(e.target.value)
  //   }

  render() {
    const SearchBox = style.input`
    // font-family: 'Mali', cursive;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    font-size: 15px;
    border-color: black;
    border-radius: 5px;
    border-width: 2.7px;
    padding-left: 7px;
    width: 60%;
    outline: none;
    `
    // const itemSearch = this.props.itemSearch

    return (
      <div>
        <form>
          <SearchBox
            autoFocus
            placeholder="Search"
            type="text"
            // value={e.target.value}
            // onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Search
