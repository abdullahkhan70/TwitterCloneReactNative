import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

export default class MoreOptions extends React.Component {
  render() {
    bs = React.createRef(null);
    fall = Animated.Value(1);

    renderContent = () => (
      <View>
        <Text>Hello Bottom sheet</Text>
      </View>
    );

    renderHeader = () => (
      <View>
        <View>
          <View></View>
        </View>
      </View>
    );

    return (
      <View style={{ flexDirection: "row" }}>
        <BottomSheet
          ref={this.bs}
          renderHeader={renderHeader}
          renderContent={renderContent}
          snapPoints={[330, 0]}
          initialSnap={1}
          callbackNode={this.fall}
          enabledGestureInteraction={true}
        />

        <TouchableOpacity onPress={() => console.log('Abdullah Khan')}>
          <Image
            style={{ height: 35, width: 35, marginRight: 10 }}
            source={require("./three_dots.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
