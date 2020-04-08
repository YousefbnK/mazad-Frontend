import React from "react";

//Style
import { Icon, Button } from "native-base";

const AddAuctionButton = () => {
  return (
    <Button transparent>
      <Icon style={{ color: "#1CC625" }} name="plus" type="Octicons" />
    </Button>
  );
};

export default AddAuctionButton;
