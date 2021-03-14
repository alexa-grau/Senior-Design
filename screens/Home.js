import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Form, Button } from "native-base"
import styles from '../Style'

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const params = this.props.navigation.state.params;
        let accessButton;
        let waterNav;
        console.log(params);
        if (params){
            if (params.bigAdmin) {
                accessButton = <Button style={styles.link}
                        onPress={() => this.props.navigation.navigate('GiveAdminRights')}>
                        <Text style={styles.incidentButton}>Dar acceso de admin a otros.</Text>
                </Button>;

                waterNav = 'WaterHomeBigAdmin';
            }
            else if (params.admin) {
                waterNav = 'WaterHomeAdmin';
            }
            else {
                waterNav = 'WaterHomeGen';
            }
        }

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

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.logoutButton}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pageContent}>

                    <View style={styles.form}>
                        <Text style={styles.title}>¡Bienvenidos!</Text>
                        <Form>
                            <Button full rounded success style={styles.blueButton}
                                onPress={() => this.props.navigation.navigate(waterNav)}>
                                <Text style={styles.buttonText}>Agua</Text>
                            </Button>

                            <Button full rounded success style={[styles.blueButton, {marginTop: 20}]}
                                onPress={() => this.props.navigation.navigate('CreateNewAccount')}> 
                                <Text style={styles.buttonText}>Clima</Text>
                            </Button>
                        </Form>
                    </View>
                    {accessButton}
                </View>

                <View style={styles.footer}>
                </View>


            </View>
        );
    }
}

export default Home;