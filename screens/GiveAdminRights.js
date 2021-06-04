import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'
import { CheckBox } from 'react-native-elements'

export class GiveAdminRights extends React.Component {
    static navigationOptions = {
        title: 'GiveAdminRights',
    };

    state = {
        data: [],
    };

    fetchData = async() => {
        // const response = await fetch ('http://10.0.0.123:3004/users');
        const response = await fetch ('http://localhost:3004/users');
        const users = await response.json();
        this.setState({data: users});
    }

    saveChanges = async() => {
        for(let i = 0; i < this.state.data.length; i++) {
            if(this.state.data[i].givenAdminRights == true) {
                //updates users in database
                // fetch("http://10.0.0.13:3004/users", {
                fetch("http://localhost:3004/users", {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"phonenumber":this.state.data[i].phonenumber}),
                    redirect: 'follow'
                })
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }  
        }

		this.props.navigation.navigate('WaterHomeBigAdmin');
    }

    componentDidMount() {
        this.fetchData();
    }

    checkThisBox=(itemID)=>{
        let data=this.state.data
        data[itemID].givenAdminRights=!data[itemID].givenAdminRights
        data[itemID].checked=!data[itemID].checked
        this.setState({data:data})
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
                    <Button style={styles.backButton}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.backText}>{'<'} Atrás</Text>
                    </Button>

                    <Text style={styles.adminRightsTitle}>Dar Acceso de admin</Text>
                    <Form style={styles.waterForm}>
                        <Text style={styles.subTitle}>Usarios</Text>
                        <View style={styles.subsubTitle}>
                            <Text style={styles.requestedAccess}>Accceso{'\n'}solicitado</Text>
                            <Text style={styles.giveAccess}>Accesso{'\n'}concedido</Text>
                        </View>

                        <FlatList inverted data={this.state.data} 
                            getItemLayout={(data, index) => (
                                {length: 100, offset: 100 * index, index}
                            )}
                            initialScrollIndex={this.state.data.length - 1}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => 
                            <View style={styles.adminRightsUsers}>
                                <View style={styles.names}>
                                    <Text style={styles.adminRightsUserName}>{item.firstname} </Text>
                                    <Text style={styles.adminRightsUserName}>{item.lastname}</Text>
                                </View>


                                <View style={styles.checkRights}>
                                    {item.requestedAdminRights
                                        ? <Image source={require('../assets/check.png')} style={styles.check_x}/>
                                        : <Image source={require('../assets/no.png')} style={styles.check_x}/>
                                    }
                                </View>

                                <View style={styles.checkBox}>
                                    <CheckBox
                                            containerStyle={styles.checkbox}
                                            checkedIcon='check-square-o'
                                            uncheckedIcon='square-o'
                                            // checked={this.state.checked}
                                            checked={this.state.data[index].checked}
                                            onPress={() => this.checkThisBox(index)}
                                    />
                                </View>
                            
                            </View>}
                        />
                    </Form>

                    <TouchableOpacity style={styles.GiveAdminRightsSubmit}
                            onPress={() =>  this.saveChanges() }>
                            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Guardar cambios</Text>
                    </TouchableOpacity> 
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default GiveAdminRights;