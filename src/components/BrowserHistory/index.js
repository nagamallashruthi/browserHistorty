import {Component} from 'react'

import './index.css'

import BrowserItem from '../BrowserItem'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filterHistory = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteButton = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updatedHistoryList})
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const filteredHistoryList = this.filterHistory()
    const {searchInput} = this.state

    return (
      <div className="container1">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="img"
          />
          <div className="container search-container">
            <div className="row a">
              <div className="col-md-12">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                  alt="search"
                  className="s"
                />
                <input
                  type="search"
                  className="search"
                  placeholder="Search history"
                  onChange={this.onChangeInput}
                  value={searchInput}
                />
              </div>
            </div>
          </div>
        </div>
        {filteredHistoryList.length === 0 ? (
          <p>There is no history to show</p>
        ) : (
          <div className="item-card">
            <ul className="ul shadow">
              {filteredHistoryList.map(each => (
                <BrowserItem
                  eachItem={each}
                  key={each.id}
                  deleteButton={this.deleteButton}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default BrowserHistory
