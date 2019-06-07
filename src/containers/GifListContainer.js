import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

import gifData from '../data.js'

export default class GifListContainer extends Component {

  state = {
    searchTerm: '',
    data: []
  }

  changeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.fetchData()
  }

  fetchData = () => {
    // setTimeout(() => {
    //   this.setState({
    //       data: gifData.data
    //   })
    // }, 1000);
    const { searchTerm } = this.state
    if (searchTerm.length > 0) {
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
      fetch(url)
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            data: json.data
          })
        })
        .catch(console.error)
    }
  }

  render() {
    return (
      <div>
        <GifSearch changeHandler={this.changeHandler} submitHandler={this.submitHandler} searchTerm={this.state.searchTerm}></GifSearch>
        <GifList data={this.state.data}></GifList>
      </div>
    )
  }
}
