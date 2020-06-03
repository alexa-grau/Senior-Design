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

    componentDidMount() {
        this.fetchNumber();
    }

	render(){
		const { modalVisible } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.headerHome}>
					<TouchableOpacity
                        onPress={() => Linking.openURL('https://cluster-nicaragua.net/organizaciones/centro-de-informacion-e-innovacion-asociacion-de-desarrollo-social-de-nicaragua')}>
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
                            onPress={() => this.props.navigation.navigate('Inbox')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.viewMessDate}>{this.props.navigation.state.params.datePass}</Text>

						<View style={styles.viewMessBox}>
							<ScrollView style={styles.viewMessScrollView}>
								<Text style={styles.viewMessComm}>{this.props.navigation.state.params.subjectPass}</Text>
								<Text style={{fontSize: 16}}>{this.props.navigation.state.params.bodyPass}</Text>
								<TouchableOpacity style={styles.viewMessListenButton}>
									<Image source={require('../assets/mic.png')} style={styles.mic}/>
									<Text style={{fontSize: 17}}>Escuchar el mensaje</Text>
								</TouchableOpacity>

								<TouchableOpacity
									onPress={() => {
										this.setModalVisible(true);
									}}>
									<Image source={require('../assets/water.jpg')} style={styles.waterImage}/>
								</TouchableOpacity>

								<Modal
									transparent={false}
									visible={modalVisible}
									onRequestClose={() => this.setModalVisible()}
								>
									
									<TouchableOpacity style={styles.viewReportCloseImg}
										onPress={() => {
											this.setModalVisible(!modalVisible);
										}}
									>
										<Text style={styles.viewReportCloseText}>Go back to report</Text>
									</TouchableOpacity>
									<ImageViewer imageUrls={images}/>
										
								</Modal>

								<View style={styles.viewOldMessage}>
									<Text style={styles.oldMessTitle}>Old Message</Text>
									<Text style={{fontSize: 16}}>{this.props.navigation.state.params.oldMessPass}</Text>
								</View>

							</ScrollView>
						</View>

						<View style={styles.viewMessButtons}>

							<TouchableOpacity style={styles.viewMessPublishButton}>
								<Text style={{fontSize: 17, color: 'white'}}>Back</Text>
							</TouchableOpacity> 
						</View>

					</View>
				</View>

				<View style={styles.footer}>
				</View>
			</View>
		);
	}
}
