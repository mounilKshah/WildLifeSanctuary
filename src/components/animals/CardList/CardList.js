import React from "react";
import Card from "../Card/Card";
export default class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="bg-white pa2">
          <h1 class="mt0 mb0 black  i fw1 f1 ">Wildlife</h1>
          <br />
          <h2 class="mt0 mb0 f6 fw4 ttu tracked mw7 center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h2>
          <br />
        </div>
        {this.props.animals.map((user, i) => {
          return (
            <div className="">
              <Card
                name={this.props.animals[i].name}
                animal_class={this.props.animals[i].animal_class}
                description={this.props.animals[i].description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
