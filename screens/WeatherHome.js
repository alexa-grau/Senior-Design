import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, SafeAreaView } from 'react-native'
import { Calendar } from 'react-native-calendars'
import {LocaleConfig} from 'react-native-calendars'
import { Form, Button } from "native-base"
import styles from '../Style'

LocaleConfig.locales['es'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    dayNamesShort: ['D','L','M','M','J','V','S'],
    today: 'Hoy'
  };
  LocaleConfig.defaultLocale = 'es';

export class WeatherHome extends React.Component {
    static navigationOptions = {
        title: 'WeatherHome',
    };

    render() {
        // hard coded to pull current date "morning" report
        // once database set up, pull the latest report in the database
        let date = new Date();
        let dateString = date.toISOString().slice(0,10);
        let day = date.getDate().toString();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let dateOb = {"dateString":dateString, "day":day, "month":month, "year":year};

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
                        // hard coded to assume general user
                        onPress={() => this.props.navigation.navigate('Home', { admin:false, bigAdmin:false })}>
                        <Text style={styles.backText}>{'<'} Atrás</Text>
                    </Button>
                    
                    <Text style={styles.waterTitle}>Clima</Text>
                    <View style={styles.weatherForm}>
                        <Calendar 
                            monthFormat={"MMMM 'de' yyyy"}
                            maxDate={dateString}
                            onDayPress={(day) => {this.props.navigation.navigate('WeatherDay', { date:day })}}
                            theme={{
                                todayTextColor: '#4a8eff',
                                arrowColor: '#4a8eff',
                                textDayFontSize: 18,
                                textMonthFontSize: 24,
                                textDayHeaderFontSize: 18
                            }}
                        />
                        <Button full rounded success style={styles.blueButtonFull}
                            onPress={() => this.props.navigation.navigate('WeatherReport', { date:dateOb, morning:true, latest:true })}>
                            <Text style={styles.buttonText}>Último Informe del Clima</Text>
                        </Button>
                        
                    </View>
                    <Button style={styles.link}
                        onPress={() => Linking.openURL('https://chat.whatsapp.com/BoW628hRShe5orkVmwG6Xc')}>
                        <Text style={styles.incidentButton}>{'Contáctanos sobre el clima por WhatsApp aquí'}</Text>
                    </Button>
                </View>

                <View style={styles.footer}>
                </View>


            </View>
        );
    }
}

export default WeatherHome;