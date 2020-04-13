import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

//Components

//Stores

const ItemsCard = (props) => {
  const item = props.item;

  const index = props.index;

  return (
    <ListItem>
      <Text> {`${index + 1}- `} </Text>
      <Left>
        <Text> {` ${item.name}`} </Text>
      </Left>

      <Body>
        <Text note>{`${item.start_price} KD`}</Text>
      </Body>

      <Button transparent onPress={props.removeItem}>
        <Icon name="trash" style={styles.removeItem} />
      </Button>
    </ListItem>
  );
};

export default ItemsCard;
