import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { firstPageStyles } from "./components/assets/styles/Styles";
import Icon from 'react-native-vector-icons/AntDesign';
class App extends Component {

  render() {
    return (
      <View style={firstPageStyles.firstView}>
        <View style={{ flex: 6 }}>
          <TouchableOpacity>
            <View style={firstPageStyles.itemView}>
              <Image source={require('./components/assets/images/iconTwo.png')} />
              <Text style={firstPageStyles.seventhText}>قائمة المهام</Text>
            </View>
          </TouchableOpacity>
          <View style={firstPageStyles.sameContainerTwo}>
            <View style={firstPageStyles.sameContainerTwoFirstView}>
              <Text style={firstPageStyles.sameContainerTwoFirstViewText}>
                القائمة الأولي
              </Text>
            </View>
            <View style={firstPageStyles.firstSpacer}></View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishTextViewOne}>
                <Text style={firstPageStyles.sameContainerTwoSecondViewText}>
                  Pylon Cover                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerView}>
                <Icon name="check" color={"white"} size={20} />
              </View>
            </View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishTextView}>
                <Text style={firstPageStyles.sameContainerTwoSecondViewText}>

                  Side Frame

                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishThirdTextView}>
                <Text style={firstPageStyles.sameContainerTwoThirdViewText}>


                  Stickers

                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishTextViewTwo}>
                <Text style={firstPageStyles.sameContainerTwoSecondViewText}>


                  ATM  Code
                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerViewTwo}>
              </View>
            </View>
          </View>

          <View style={firstPageStyles.sameContainerTwo}>
            <View style={firstPageStyles.sameContainerTwoFirstView}>
              <Text style={firstPageStyles.sameContainerTwoFirstViewText}>
                القائمة الثانية              </Text>
            </View>
            <View style={firstPageStyles.firstSpacer}></View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishTextViewOne}>
                <Text style={firstPageStyles.sameContainerTwoSecondViewText}>
                  Pylon Cover                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerView}>
                <Icon name="check" color={"white"} size={20} />
              </View>
            </View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishTextView}>
                <Text style={firstPageStyles.sameContainerTwoSecondViewText}>

                  Side Frame

                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishThirdTextView}>
                <Text style={firstPageStyles.sameContainerTwoThirdViewText}>


                  Stickers

                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerViewTwo}>
              </View>
            </View>
            <View style={firstPageStyles.sameContainerTwoSecondView}>
              <View style={firstPageStyles.englishTextViewTwo}>
                <Text style={firstPageStyles.sameContainerTwoSecondViewText}>


                  ATM  Code
                </Text>
              </View>
              <View style={firstPageStyles.spacerView}></View>
              <View style={firstPageStyles.sameContainerTwoInnerViewTwo}>
              </View>
            </View>
          </View>


        </View>
        <TouchableOpacity style={{ flex: 1 }}>
          <View style={firstPageStyles.thirdView}>
            <Text style={firstPageStyles.fifthText}>تاكيد</Text>
          </View>
        </TouchableOpacity>

      </View>

    );
  }

}
export default App;
