import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
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
            reports: [],
        };
    }

    // getReports = () => {

    //     fetch("http://10.0.0.123:3004/reports", {
    //         method: 'GET',
    //         redirect: 'follow'
    //     })
    //         .then(response => response.json())
    //         .then(result => {   //console.log(result);
    //                             this.state.reports = result;
    //                             console.log(this.state.reports);
    //                             this.props.navigation.navigate('WaterHome', {
    //                                 report: this.state.reports,
    //                             })
    //                         })
    //         .catch(error => console.log('error', error));    
    // }




    correctLogin = async() => {

        var checkNum = this.state.phoneNum;

        await fetch("http://10.0.0.13:3004/users/" + checkNum, {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {   console.log(result);
                                //console.log(typeof result);
                                if (result.length == 0)
                                {
                                    console.log('no user exists with this phone number, cannot login');
                                    alert('Existe ningún usuario con este número de teléfono. Volver a intentar o crear una cuenta.');
                                }

                                else
                                {
                                    console.log('user exists');

                                    if (result[0].password == this.state.password)
                                    {
                                        if (result[0].mainAdmin == 1)
                                        {
                                            this.props.navigation.navigate('WaterHomeBigAdmin');
                                        }
                                        else if (result[0].givenAdminRights == 0)
                                        {
                                            alert(this.state.phoneNum);
                                            this._saveInfo();
                                            this.props.navigation.navigate('myStackNavigatorGen', {
                                                screen: 'WaterHomeGen',
                                                params: { phoneNumPass: this.state.phoneNum}
                                            });
                                        }
                                        else
                                        {
                                            this._saveInfo();
                                            this.props.navigation.navigate('WaterHomeAdmin');
                                        }
                                    }
                                    else
                                    {
                                        alert('No coinciden la contraseña y el número de teléfono.');
                                        return;
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
              const { result } = await Expo.SMS.sendSMSAsync(['123456789'], 'test1234');
            }
    }

    _saveInfo() {
        console.log(this.state.phoneNum);
        UserProfile.setNumber(this.state.phoneNum);
    }
    // componentDidMount () {
    //     this.correctLogin();
    // }
    
    render() {
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

                        <Button style={[styles.link, { marginTop: 20 }]}
                            onPress={() => this.sendCode()}>
                            <Text style={styles.loginPageButtons}>¿Olvidó su contraseña?</Text>
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