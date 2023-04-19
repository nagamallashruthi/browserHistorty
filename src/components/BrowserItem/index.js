import './index.css'

const BrowserItem = props => {
  const {eachItem, deleteButton} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem

  const onClickButton = () => {
    deleteButton(id)
  }

  return (
    <li className="li shadow">
      <div className="logo">
        <p>{timeAccessed}</p>

        <img src={logoUrl} alt="domain logo" className="domain-logo" />

        <p className="p">{title}</p>
        <p className="p1">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="del"
          onClick={onClickButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserItem
