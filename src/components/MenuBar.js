import React from 'react'

const MenuBar = (props) => {
console.log(props);
// want to make the clicked button shadowed to show it's "active"
// going to use INLINE conditional rendering below -- injecting js functionality (leaving jsx to incorporate js logic)
// ternary operators below

  return (
    <div className="ui four item menu">
      <a className={"item " + (props.currentState === 'profile' ? "active" : null)} id="profile" onClick={(event) => props.selectPage(event.target.id)}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={"item " + (props.currentState === 'photo' ? "active" : null)} id="photo" onClick={(event) => props.selectPage(event.target.id)}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item " + (props.currentState === 'cocktail' ? "active" : null)} id="cocktail" onClick={(event) => props.selectPage(event.target.id)}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item " + (props.currentState === 'pokemon' ? "active" : null)} id="pokemon" onClick={(event) => props.selectPage(event.target.id)}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
