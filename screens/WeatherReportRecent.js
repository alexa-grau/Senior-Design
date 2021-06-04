import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import { Table, Rows } from 'react-native-table-component'
import { Form, Button } from "native-base"
import styles from '../Style'


export class WeatherReportRecent extends React.Component {
    static navigationOptions = {
        title: 'WeatherReportRecent',
    };

    state = {
        date: "",
        tableData: [],
        announcement: "",
        time: ""
    };

    fetchData = async() => {
        // const response = await fetch('http://10.0.0.13:3004/reports');
        const response = await fetch('http://localhost:3004/weather/recent/report');
        const weatherReports = await response.json();

        // read date and time to day/month/year format
        let date = new Date(weatherReports[0].date);
        let dateString = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        this.setState({date: dateString});
        this.setState({time: weatherReports[0].time});
        this.setState({announcement: weatherReports[0].announcement});

        // parse and convert weather report to an array
        let info = JSON.parse(weatherReports[0].weatherinfo);
        let infoData = [];
        for (var key in info) {
            if (info.hasOwnProperty(key)) infoData.push([key, info[key]]);
        }
        this.setState({tableData: infoData});
    }

    componentDidMount() {
        console.log("Weather reports mounting");
        this.fetchData();
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

                    <Text style={styles.waterTitle}>{this.state.date}</Text>
                    <Text style={styles.subTitle}>{this.state.time}</Text>
                    
                    <View style={styles.weatherForm}>
                        <ScrollView style={styles.scrollView}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} >
                            <Rows data={this.state.tableData} textStyle={styles.tableText} />
                        </Table>
                        </ScrollView>
                        <Text style={styles.bold}>Del administrador:</Text>
                        <Text style={styles.adminWeatherMessage}>{this.state.announcement}{'\n'}</Text>
                        <Text onPress={() => Linking.openURL('https://chat.whatsapp.com/BoW628hRShe5orkVmwG6Xc')} style={styles.loginPageButtons}>¿Tiene preguntas sobre este informe meteorológico? Unirse a nuestro grupo de WhatsApp aquí.</Text>
                        
                    </View>
                </View>

                

                <View style={styles.footer}>
                </View>


            </View>
        );
    }
}

export default WeatherReportRecent;