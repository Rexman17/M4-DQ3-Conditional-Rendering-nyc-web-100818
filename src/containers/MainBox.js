import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  // This component has state bc it's the parent and will pass to child
  // Needs to know which menu bar item was selected
  state = {
    selectedIcon: ''
  }

  // fn to pass down as a prop to menu bar
  selectPage = (id) => {
    // console.log(id);
    this.setState({
      selectedIcon: id
    }, () => console.log("STATE IS NOW", this.state.selectedIcon))
  }
  // want to see this.state change to make sure state changed when we click something different

  render() {
    // Conditional rendering
    // need to store the state into a variable
    const targetPage = this.state.selectedIcon
    let pageToRender; // going to do logic and then set this

    if (targetPage === 'profile') {
      pageToRender = <Profile />
    } else if (targetPage === 'photo') {
      pageToRender = <Photos />
    } else if (targetPage === 'cocktail') {
      pageToRender = <Cocktails />
    } else if (targetPage === 'pokemon') {
      pageToRender = <Pokemon />
    }

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar selectPage={this.selectPage} currentState={this.state.selectedIcon} />
          {pageToRender}
      </div>
    )
  }

}

export default MainBox
