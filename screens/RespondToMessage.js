import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Linking, Keyboard } from 'react-native';
import styles from '../Style';
import { Form, Button } from 'native-base'

export default class RespondToMessage extends React.Component {

	state = {
		body: '',
		audio: null,
	};

//id num to store in db: this.props.navigation.state.params.idNumPass

//phone num to store in db: this.props.navigation.state.params.phoneNumPass

	addMail = () => {

		if (this.state.body == '')
        {
        	alert('Por favor escribe un mensaje');
        	return;
        }
        console.log('this is the old message: ' + this.props.navigation.state.params.oldMessPass)
		//inserts new mail into database
		// fetch("http://10.0.0.123:3004/mail", {
		fetch("http://localhost:3004/mail", {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({"body":this.state.body,"audio":this.state.audio,"phoneNumber":this.props.navigation.state.params.phoneNumPass,"incidentIdNum":this.props.navigation.state.params.idNumPass, "subject":this.props.navigation.state.params.subjectPass, "oldMessage":this.props.navigation.state.params.oldMessPass}),
			redirect: 'follow'
		})
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

		this.props.navigation.navigate('ViewIndividualMessage');
	}

	render(){
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
					<View style={styles.respondMessCont}>

						<Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('ViewIndividualMessage')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.respondMessHead}>A: {this.props.navigation.state.params.toPass}</Text>

						<View style={styles.respondMessBox}>
							{/*response to message*/}
							<TextInput style={styles.respondMessInput}
								multiline
								underlineColorAndroid = "transparent"
								placeholder = "Escribir su informe aquí..."
								placeholderTextColor = "#707070"
								autoCapitalize = "none"
								textAlign = "left"
								returnKeyType="done"
								blurOnSubmit={true}
							    onSubmitEditing={()=>{Keyboard.dismiss()}}
								onChangeText = {body => this.setState({body})}
							/>
						</View>

						<TouchableOpacity style={styles.respondMessSendButton}
							onPress={() => this.addMail()	}>
							<Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Enviar</Text>
						</TouchableOpacity> 

					</View>
				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
	}
}