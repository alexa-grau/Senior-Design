import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, FlatList } from 'react-native'
import { Form, Button } from "native-base"
import styles from '../Style'


export class WeatherDay extends React.Component {
    static navigationOptions = {
        title: 'WeatherDay',
    };

    state = {
        data: [],
    };

    fetchData = async() => {
        let date = this.props.navigation.state.params.date;
        let dateString = date.year;
        if(date.month < 10){
            dateString+='/0'+date.month;
        } else {
            dateString+='/'+date.month;
        }
        if(date.day < 10){
            dateString+='/0'+date.day;
        } else {
            dateString+='/'+date.day;
        }
        // const response = await fetch('http://10.0.0.13:3004/reports');
        const response = await fetch('http://localhost:3004/weather/'+dateString);
        const weatherReports = await response.json();
        this.setState({data: weatherReports});
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const params = this.props.navigation.state.params;
        let date = params.date;
        let noReportText = <Text></Text>;
        if(this.state.data.length < 1){
            noReportText = <Text>No hay informes meteorológicos disponibles</Text>;
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
                    <Button style={styles.backButton}
                        onPress={() => this.props.navigation.navigate('WeatherHome', { current: date.dateString })}>
                        <Text style={styles.backText}>{'<'} Atrás</Text>
                    </Button>

                    <Text style={styles.waterTitle}>Clima</Text>
                    <View style={styles.weatherForm}>
                        <Text style={styles.subTitle}>{date.day}/{date.month}/{date.year}</Text>
                        <Form>
                            <FlatList data={this.state.data} 
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => 
                                <Button full rounded success style={styles.blueButton} onPress={
                                    () => this.props.navigation.navigate('WeatherReport', {date: date, id: item.id })}>
                                    <Text style={styles.buttonText}>{item.time}</Text>
                                </Button>}
                            />
                            {noReportText}
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