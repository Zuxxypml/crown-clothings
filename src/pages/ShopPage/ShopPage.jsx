import React, { Component } from "react";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import SHOP_DATA from "../../data/SHOP_DATA";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
