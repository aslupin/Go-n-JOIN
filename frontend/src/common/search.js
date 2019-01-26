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
    font-family: 'Mali', cursive;
    background-image: url(${SearchBoxImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-size: 15px;
    border: none;
    border-radius: 16px;
    outline: none;
    top: 0px;
    `

    // const itemSearch = this.props.itemSearch

    return (
      <div>
        <form>
          <SearchBox
            autoFocus
            placeholder="..."
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
