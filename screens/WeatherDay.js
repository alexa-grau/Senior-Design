import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Form, Button } from "native-base"
import styles from '../Style'

export class WeatherDay extends React.Component {
    static navigationOptions = {
        title: 'WeatherDay',
    };

    render() {
        const params = this.props.navigation.state.params;
        let date = params.date;

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
                    <Button style={styles.backButton}
                        onPress={() => this.props.navigation.navigate('WeatherHome')}>
                        <Text style={styles.backText}>{'<'} Atrás</Text>
                    </Button>

                    <Text style={styles.waterTitle}>Clima</Text>
                    <View style={styles.weatherForm}>
                        <Text style={styles.subTitle}>{date.day}/{date.month}/{date.year}</Text>
                        <Form>
                            <Button full rounded success style={styles.blueButton}
                                onPress={() => this.props.navigation.navigate('WeatherReport', { date:date, morning:true })}>
                                <Text style={styles.buttonText}>Mañana</Text>
                            </Button>

                            <Button full rounded success style={[styles.blueButton, {marginTop: 20}]}
                                onPress={() => this.props.navigation.navigate('WeatherReport', { date:date, morning:false })}> 
                                <Text style={styles.buttonText}>Tarde</Text>
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

export default WeatherDay;