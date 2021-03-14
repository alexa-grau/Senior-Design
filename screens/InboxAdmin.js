import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'
import UserProfile from '../UserProfile'
//import console = require('console')

export class InboxAdmin extends React.Component {
    static navigationOptions = {
        title: 'InboxAdmin',
    };

    state = {
        // mail: [
        //     {"idmail":1,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
        //     {"idmail":2,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
        //     {"idmail":3,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
        //     {"idmail":4,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":1,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
        //     {"idmail":5,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
        //     {"idmail":6,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":1,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""}
        // ],
        data: [],
        number: '',
        incidentNum: '',
        readYn: '',
    };

    fetchData = async() => {
        // const response = await fetch ('http://10.0.0.13:3004/incidents');
        const response = await fetch ('http://localhost:3004/incidents');
        const users = await response.json();
        this.setState({data: users});
        console.log('this is fetching data');
    }

    componentDidMount() {
        this.fetchData();
    }

    setRead (read, subject, sender, date, message, idincidents, phoneNumber) {
        if(!read) {
            //updates incidents in database
            fetch("http://10.0.0.13:3004/incidents", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"subject":subject}),
                redirect: 'follow'
            })
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        } 
        this.fetchData(); 

        this.props.navigation.navigate('ViewIndividualMessage',
        {
            senderPass: sender,
            datePass: date,
            messPass: message,
            subjectPass: subject,
            idNumPass: idincidents,
            phoneNumPass: phoneNumber
        });
        this.setState({incidentNum: idincidents});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.asdenic.org')}>
                        <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.scu.edu/engineering/labs--research/labs/frugal-innovation-hub/')}>
                        <Image source={require('../assets/frugalHub.png')} style={styles.frugalHubLogo}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.logoutButton}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pageContent}>
                    <View style={styles.subheader}>
                        <View style={styles.leftHeader}>
                            <Button style={styles.back}
                                onPress={() => this.props.navigation.navigate('WaterHomeAdmin')}>
                                <Text style={styles.backText}>{'<'} Atrás</Text>
                            </Button>
                        </View>
                    </View>

                    <Text style={styles.title}>Buzón de mensajes</Text>
                    
                    <View style={styles.inboxBody}>
                        <FlatList inverted data={this.state.data} 
                            getItemLayout={(data, index) => (
                                {length: 70, offset: 70 * index, index}
                            )}
                            initialScrollIndex={this.state.data.length - 1}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                            <Button style={styles.message} onPress={() => this.setRead(item.readYn, item.subject, item.sender, item.date, item.message, item.idincidents, item.phoneNumber)}>
                                    <View style={styles.unread}>
                                    {item.readYn
                                        ? <Text></Text>
                                        : <Image source={require('../assets/blue-circle.png')} style={styles.circle}/>
                                    }
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.fromText}>{item.sender}</Text>
                                        <Text>{item.subject}</Text>
                                    </View>
                                    <View style={styles.messageDate}>
                                        <Text>{item.date}</Text>
                                    </View>
                            </Button>}
                        />
                    </View>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default InboxAdmin;