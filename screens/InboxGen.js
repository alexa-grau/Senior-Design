import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'
import UserProfile from '../UserProfile'
//import console = require('console')

export class InboxGen extends React.Component {
    static navigationOptions = {
        title: 'InboxGen',
    };

    state = {
        data: [],
        number: '',
        subject: '',
    };

    fetchData = async() => {
        // const response = await fetch ('http://10.0.0.13:3004/mail/' + UserProfile.getNumber());
        const response = await fetch ('http://localhost:3004/mail/' + UserProfile.getNumber());
        const messages = await response.json();
        this.setState({data: messages});
        console.log("Inbox gen (messages):", messages);
    }

    // fetchNumber = async() => {
    //     let num = UserProfile.getNumber();
    //     console.log("user profile number is: "UserProfile.getNumber());
    //     this.setState({number: num});
    // }

    setRead (read, subject, date, body, oldMessage) {
        if(!read) {
            //updates incidents in database
            // fetch("http://10.0.0.13:3004/mail", {
            fetch("http://localhost:3004/mail", {
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
        console.log(oldMessage);
        this.props.navigation.navigate('ViewMailMessage',
        {
            senderPass: UserProfile.getNumber(),
            datePass: date,
            bodyPass: body,
            oldMessPass: oldMessage
        });
    }

    componentDidMount() {
        this.fetchData();
        //this.fetchNumber();
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
                                onPress={() => this.props.navigation.navigate('WaterHomeGen')}>
                                <Text style={styles.backText}>{'<'} Atrás</Text>
                            </Button>
                        </View>
                    </View>

                    <Text style={styles.title}>Respuestas sobre sus informes</Text>
                    
                    <View style={styles.inboxBody}>
                        <FlatList inverted data={this.state.data} 
                            getItemLayout={(data, index) => (
                                {length: 70, offset: 70 * index, index}
                            )}
                            initialScrollIndex={this.state.data.length - 1}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                            // <Button style={styles.message} onPress={() => this.setRead(item.readYn, item.subject, item.date, item.body, item.incidentIdNum, item.oldMessage) }>
                            <Button style={styles.message} onPress={() => this.setRead(item.readYn, item.subject, item.date, item.body, item.oldMessage) }>
                                    <View style={styles.unread}>
                                    {item.readYn
                                        ? <Text></Text>
                                        : <Image source={require('../assets/blue-circle.png')} style={styles.circle}/>
                                    }
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.fromText}>{item.subject}</Text>
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

export default InboxGen;