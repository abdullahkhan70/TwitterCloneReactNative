import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import faker from "faker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import FloatingActionButton from '../../Components/FloatingActionButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class NotificationScreen extends React.Component {

    static navigationOptions = {
        headerTitle: () => {
            <Text>Notifications</Text>
        }
    }
  
  constructor(props) {
    super(props);
    const fakeData = [];
    for (i = 0; i < 500; i++) {
      if (i % 2 == 0) {
        this.setState({ showContent: true });
      } else {
        this.setState({ showContent: false });
      }

      fakeData.push({
        type: "NORMAL",
        item: {
          id: i,
          image: faker.image.avatar(),
          description: faker.random.words(10),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          company_name: faker.company.companyName(),
          user_name: faker.internet.userName(),
          article_image: faker.internet.avatar(),
          article_details: faker.random.words(10),
          article_comments: faker.random.number(100),
          article_sharing: faker.random.number(100),
          article_likes: faker.random.number(100),
        },
      });
    }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
      showContent: true,
    };
    this.LayoutProvider = new LayoutProvider(
      (i) => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => {
        switch (type) {
          case "NORMAL":
            dim.width = SCREEN_WIDTH;
            dim.height = 100;
            break;
          default:
            dim.height = 0;
            dim.width = 0;
            break;
        }
      }
    );
  }

  rowRenderer = (type, data) => {
      const {
        image,
        first_name,
        last_name,
        company_name,
        description,
      } = data.item;

      return(
        <View style={{flex: 1, flexDirection: 'column', marginTop: 40,}}>
            <View style={styles.user_info}>
                <MaterialCommunityIcons name="star-four-points" size={34} color="purple" />
                <Image style={styles.user_image} source={{uri: image}} />
            </View>
            <View style={{flex: 1 , flexDirection: 'row', marginTop: 10, marginLeft: 70,}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{first_name}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5,}}>{last_name}</Text>
                <Text style={{fontSize: 18, opacity: 0.5, marginRight: 30, textAlign: 'auto'}}>{[" liked a video from ", company_name]}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column', marginTop: 10, marginLeft: 60,}}>
                <Text style={{fontSize: 20, opacity: 0.5, textAlign: 'center'}}>{description}</Text>
            </View>
        </View>
      );
  }

  render() {
    return (
        <View style={styles.container}>
        <RecyclerListView
          style={{ flex: 1, overflow: "hidden" }}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.LayoutProvider}
          forceNonDeterministicRendering={true} 
        />
        <FloatingActionButton message="User Notification!" visible={"False"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 5,
        marginRight: 10, 
    },

    user_info: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 30,
    },

    user_image: {
        height: 45,
        width: 45, 
        borderRadius: 50,
        marginTop: 5,
        marginLeft: 10,
       
    }
});