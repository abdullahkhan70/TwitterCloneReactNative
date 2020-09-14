import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import faker from "faker";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";



const SCREEN_WIDTH = Dimensions.get("window").width;

export default class UserTimelines extends React.Component {
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
      description,
      first_name,
      last_name,
      user_name,
      article_image,
      article_details,
      article_comments,
      article_sharing,
      article_likes,
    } = data.item;

    

    return (
     
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
              borderBottomColor: "#00000000",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          >
            <Image style={styles.image} source={{ uri: image }} />
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={styles.first_name}>{first_name}</Text>
                <Text style={styles.last_name}>{last_name}</Text>
                <AntDesign
                  style={styles.icon}
                  name="checkcircle"
                  size={24}
                  color="#00acee"
                />
                <Text style={styles.atRateof}>{"@"}</Text>
                <Text numberOfLines={1} style={styles.user_name}>
                  {user_name}
                </Text>
              </View>
              <Text textBreakStrategy="highQuality" style={styles.description}>
                {description}
              </Text>

              {this.state.showContent ? (
                <View style={styles.article_view}>
                  <Image
                    style={{
                      height: 175,
                      width: 310,
                      borderTopRightRadius: 20,
                    }}
                    source={{ uri: article_image }}
                  />
                  <View style={styles.article_details}>
                    <Text numberOfLines={2} style={styles.description}>
                      {article_details}
                    </Text>
                  </View>
                  <View
                    style={{ flex: 1, flexDirection: "row", marginTop: 10 }}
                  >
                    <EvilIcons name="comment" size={28} color="gray" />
                    <Text
                      style={{
                        fontSize: 17,
                        marginTop: 2,
                        color: "gray",
                        marginLeft: 7,
                      }}
                    >
                      {article_comments}
                    </Text>
                    <AntDesign
                      style={{ marginLeft: 30 }}
                      name="sharealt"
                      size={22}
                      color="gray"
                    />
                    <Text
                      style={{
                        fontSize: 17,
                        marginTop: 2,
                        color: "gray",
                        marginLeft: 15,
                      }}
                    >
                      {article_sharing}
                    </Text>
                    <AntDesign
                      style={{ marginLeft: 30 }}
                      name="hearto"
                      size={22}
                      color="gray"
                    />
                    <Text
                      style={{
                        fontSize: 17,
                        marginTop: 2,
                        color: "gray",
                        marginLeft: 15,
                      }}
                    >
                      {article_likes}
                    </Text>
                  </View>
                </View>
              ) : (
                <View>
                  <Text>Hello World!</Text>
                </View>
              )}
            </View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </View>
       
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <RecyclerListView
          style={{ flex: 1, overflow: "hidden" }}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.LayoutProvider}
          forceNonDeterministicRendering={true}

        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 200,
  },
  first_name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  last_name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 5,
  },
  description: {
    marginTop: -3,
    marginRight: 10,
    fontSize: 18,
  },
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
  user_name: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 18,
    opacity: 0.5,
    marginTop: 10,
    marginRight: 15,
  },
  atRateof: {
    fontSize: 18,
    opacity: 0.5,
    marginTop: 10,
    marginLeft: 10,
  },
  article_view: {
    flex: 1,
    flexDirection: "column",
    marginRight: 6,
    marginTop: 30,
    overflow: "hidden",
    borderRadius: 20,
  },
  article_details: {
    width: 310,
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
});
