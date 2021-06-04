import React from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';
import styles from '../Style';
import { Form, Button } from 'native-base'
import ImageViewer from 'react-native-image-zoom-viewer'
import UserProfile from '../UserProfile'

const images = [{
	url:'',
	props: {
		source: require('../assets/water.jpg')
	}
}]

export default class ViewMailMessage extends React.Component {
	state = {
		modalVisible: false,
		number: '',
	};

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	}

	fetchNumber = async() => {
        let num = UserProfile.getNumber();
        console.log(UserProfile.getNumber());
        this.setState({number: num});
	}
	
	// setRead (read, subject) {
    //     if(!read) {
    //         //updates incidents in database
    //         fetch("http://10.0.0.13:3004/incidents", {
    //             method: 'POST',
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify({"subject":subject}),
    //             redirect: 'follow'
    //         })
    //             .then(response => response.text())
    //             .then(result => console.log(result))
    //             .catch(error => console.log('error', error));
	// 	}  
		
	// 	this.props.navigation.navigate('InboxAdmin');
    // }

    componentDidMount() {
        this.fetchNumber();
    }

	render(){
		const { modalVisible } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.headerHome}>
					<TouchableOpacity
                        onPress={() => Linking.openURL('https://www.asdenic.org')}>
                        <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.scu.edu/engineering/labs--research/labs/frugal-innovation-hub/')}>
                        <Image source={require('../assets/frugalHub.png')} style={styles.frugalHubLogoHome}/>
                    </TouchableOpacity>

				</View>

				<View style={styles.pageContent}>
					<View style={styles.viewMessCont}>

						<Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('InboxGen')}>

                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.viewMessDate}>{this.props.navigation.state.params.datePass}</Text>

						<View style={styles.viewMessBox}>
							<ScrollView style={styles.viewMessScrollView}>
								<Text style={styles.viewMessComm}>{this.props.navigation.state.params.subjectPass}</Text>
								<Text style={{fontSize: 16}}>{this.props.navigation.state.params.bodyPass}</Text>

								<View style={styles.viewOldMessage}>
									<Text style={styles.oldMessTitle}>Old Message</Text>
									<Text style={{fontSize: 16}}>{this.props.navigation.state.params.oldMessPass}</Text>
								</View>

							</ScrollView>
						</View>

						{/* <View style={styles.viewMessButtons}>

							<TouchableOpacity style={styles.viewMessPublishButton}>
								<Text style={{fontSize: 17, color: 'white'}}>Back</Text>
							</TouchableOpacity> 
						</View> */}

					</View>
				</View>

				<View style={styles.footer}>
				</View>
			</View>
		);
	}
}
