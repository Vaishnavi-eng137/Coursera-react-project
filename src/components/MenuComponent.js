import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <div className="card">
          <img src={dish.image} alt={dish.name}></img>
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <p className="card-text">{dish.description}</p>
          </div>
        </div>
      );
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
              <div
                className="card"
                onClick={() => {
                  this.onDishSelect(dish);
                }}
              >
                <img
                  className="card-img"
                  src={dish.image}
                  alt={dish.name}
                  width="100%"
                ></img>
                <div className="card-img-overlay">
                  <h2 className=" card-title">{dish.name}</h2>
                </div>
              </div>
            </div>
         
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
