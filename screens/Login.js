import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, Alert } from 'react-native'
import { Item, Form, Input, Button, Label } from "native-base"
import styles from '../Style'
import SendSMS from 'react-native-sms'
import * as SMS from 'expo-sms';
import Expo from 'expo';
import UserProfile from '../UserProfile';

export class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = {
            phoneNum: "",
            password: "",
            reports: []
        };
    }

    correctLogin = async() => {
        var checkNum = this.state.phoneNum;
        var checkPass = this.state.password;

        if(checkNum==0 && checkPass=="design"){
            // console.log("Design testing");
            this.props.navigation.navigate('Home', { admin:true, bigAdmin:true });
        }

        // await fetch("http://10.0.0.13:3004/users/" + checkNum + "/" + checkPass, {
        await fetch("http://localhost:3004/users/" + checkNum + "/" + checkPass, {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {   
                                if(typeof(result)=='boolean'){
                                    // incorrect password
                                    Alert.alert('', 'No coinciden la contraseña y el número de teléfono.');
                                }
                                else if (result.length == 0) {
                                    // no user found
                                    Alert.alert('', 'Existe ningún usuario con este número de teléfono. Volver a intentar o crear una cuenta.');
                                    return;
                                }
                                else {
                                    console.log('user exists');
                                    if (result[0].mainAdmin == 1)
                                    {
                                        // main admin
                                        this.state.bigAdmin = true;
                                        this.state.genUser = false;
                                        this._saveInfo();
                                        this.props.navigation.navigate('Home');
                                    }
                                    else if (result[0].givenAdminRights == 0)
                                    {
                                        // general user
                                        this.state.bigAdmin = false;
                                        this.state.genUser = true;
                                        this._saveInfo();
                                        this.props.navigation.navigate('Home');
                                    }
                                    else
                                    {
                                        // admin
                                        this.state.bigAdmin = false;
                                        this.state.genUser = false;
                                        this._saveInfo();
                                        this.props.navigation.navigate('Home');
                                    }
                                }
                            })
            .catch(error => console.log('error', error));

    }

    sendCode = async() => {
        // SendSMS.send({
        //     //Message body
        //     body: '12495',
        //     //Recipients Number
        //     recipients: ['2066602920'],
        //     //An array of types that would trigger a "completed" response when using android
        //     successTypes: ['sent', 'queued']
        // }, (completed, cancelled, error) => {
        //     console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
        // });

        const isAvailable = await Expo.SMS.isAvailableAsync();
        if (isAvailable) {
            const { result } = await Expo.SMS.sendSMSAsync(['12345678'], 'test1234');
            console.log(result);
        }
    }

    _saveInfo() {
        console.log(this.state.phoneNum);
        UserProfile.setNumber(this.state.phoneNum);
        console.log("Login state", this.state);
        if(this.state.bigAdmin){
            // main admin
            UserProfile.setMainAdmin(1);
            UserProfile.setGenUser(0);
        }
        else if(this.state.genUser){
            // gen user
            UserProfile.setMainAdmin(0);
            UserProfile.setGenUser(1);
        }
        else {
            // admin
            UserProfile.setMainAdmin(0);
            UserProfile.setGenUser(0);
        }
    }
    
    render() {
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
                    <View style={styles.form}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Numero de telefono móvil</Label>
                            <Input
                            autoCapitalize="none"
                            keyboardType = "number-pad"
                            autoCorrect={false}
                            onChangeText={phoneNum => this.setState({ phoneNum })} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Contraseña</Label>
                            <Input
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={password => this.setState({ password })} />
                        </Item>

                        <Button full rounded success style={styles.blueButton}
                            onPress={() => this.correctLogin ()}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Button>

                        <Button style={styles.link}
                            onPress={() => this.props.navigation.navigate('CreateNewAccount')}>
                            <Text style={styles.loginPageButtons}>¿Es nuevo aquí? ¡Crea una cuenta!</Text>
                        </Button>
                    </Form>
                    </View>

                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default Login;