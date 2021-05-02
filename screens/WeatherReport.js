import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Table, Rows } from 'react-native-table-component'
import { Form, Button } from "native-base"
import styles from '../Style'

export class WeatherReport extends React.Component {
    static navigationOptions = {
        title: 'WeatherReport',
    };

    render() {
        const params = this.props.navigation.state.params;
        console.log(params);
        let date = params.date;
        let timeString='Tarde';
        // let backButton= {this.props.navigation.navigate('WeatherDay', {date:date})};
        if(params.morning){
            timeString='Mañana';
        }
        // if(params.morning){
        //     backButton=this.props.navigation.navigate('WeatherHome');
        // }

        const tableData = [
            ['Temp.','20.2°C'],
            ['Temp. Alta','20.2°C'],
            ['Temp. Baja','18.5°C'],
            ['Hum','57'],
            ['Índice de calor','23.4'],
        ];
        const reportMessage = 'El clima es agradable hoy. Más texto aquí. Hace sol.';
        
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
                        onPress={() => this.props.navigation.navigate('WeatherDay', {date:date})}>
                        <Text style={styles.backText}>{'<'} Atrás</Text>
                    </Button>

                    <Text style={styles.waterTitle}>{date.day}/{date.month}/{date.year}</Text>
                    <View style={styles.weatherForm}>
                        <Text style={styles.subTitle}>{timeString}</Text>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} >
                            <Rows data={tableData} textStyle={styles.tableText} />
                        </Table>
                        <Text style={styles.bold}>Del administrador:</Text>
                        <Text style={styles.adminWeatherMessage}>{reportMessage}{'\n'}</Text>
                        <Text onPress={() => Linking.openURL('https://chat.whatsapp.com/BoW628hRShe5orkVmwG6Xc')} style={styles.incidentButton}>¿Tiene preguntas sobre este informe meteorológico? Unirse a nuestro grupo de WhatsApp aquí.</Text>
                    </View>
                </View>

                

                <View style={styles.footer}>
                </View>


            </View>
        );
    }
}

export default WeatherReport;