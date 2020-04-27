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
            “If you are not filled with overflowing love, compassion and
            goodwill for all creatures living wild in nature, You will never
            know true happiness.” ― Paul Oxton
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
