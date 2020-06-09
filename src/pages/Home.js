import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import DeviceInfo from 'react-native-device-info';
import {withTranslation} from "react-i18next";

export class Home extends React.Component {
    static navigationOptions = ({screenProps}) => ({
        title: screenProps.t('home:title'),
    });

    render() {
        const version = DeviceInfo.getVersion();
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hope you enjoyed!!</Text>
                <Text style={styles.text}>Version {version}</Text>
                <FastImage
                    style={styles.image}
                    source={{uri: 'https://englishhelponline.files.wordpress.com/2010/11/finally-scanner.jpg'}}
                    resizeMode={FastImage.resizeMode.contain}/>
            </View>
        );
    }
}

export default withTranslation(['home', 'common'], {withRef: true})(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separate: {
        marginTop: 50,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width ,
        alignSelf: 'flex-end',
    },
});
