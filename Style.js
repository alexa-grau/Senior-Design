import {StyleSheet} from 'react-native'
//import { NONAME } from 'dns';

export default StyleSheet.create({
    
    //container for all pages
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    //blue header band for all pages
    header: {
        backgroundColor: "#4a8eff",
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
    },

    headerHome: {
        backgroundColor: "#4a8eff",
        flexDirection: 'row',
        height: 100,
    },

    //logo for header band for all pages
    asdenicLogo: {
        width: 70,
        height: 70,
        marginLeft: 20,
        marginTop: 20,
    },

    frugalHubLogo: {
        width: 150,
        height: 38,
        marginLeft: 10,
        marginTop: 45,
    },

    frugalHubLogoHome: {
        width: 150,
        height: 38,
        marginLeft: 38,
        marginTop: 45,
    },

    logoutButton: {
        color: 'white',
        marginTop: 50,
        marginRight: 25,
        fontSize: 15,
    },

    //middle section container for all pages
    pageContent: {
        height: 700,
    },

    scrollView: {
        height: 300,
        // overflow: 'hidden'
    },

    //blue footer band for all pages
    footer: {
        backgroundColor: "#4a8eff",
        height: 100,
        justifyContent: 'flex-end',
        flex: 1,
    },


    newAccountCont: {
        alignItems: 'center',
        marginTop: 40,
    },

    newAccountHead: {
        fontSize: 25,
    },

    newAccountInput: {
        marginTop: 18,
        height: 40,
        width: 300,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        fontSize: 15,
    },

    newAccountDropdown: {
        marginTop: 18,
        height: 40,
        width: 300,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
    },

    newAccountButton: {
        padding: 12,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 118,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
    },

    cancelNewAccountButton: {
        padding: 12,
        borderRadius: 20,
        backgroundColor: 'red',
        width: 118,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
        marginLeft: 12
    },

    hm: {
        height: 130,
        marginTop: 15,
        marginLeft: 58,
        alignSelf: 'flex-start',
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        paddingLeft: 10,
        paddingTop: 15,
        width: 300,
        paddingRight: 10,
        paddingBottom: 15,

    },

    hmReport: {
        height: 130,
        marginTop: 15,
        alignSelf: 'flex-start',
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        paddingLeft: 10,
        paddingTop: 15,
        width: 300,
        paddingRight: 10,
        paddingBottom: 15,

    },

    chooseCom: {
        fontSize: 16,
        color: '#707070',
        marginBottom: 5,
    },


    viewReportCont: {
        alignItems: 'center',
    },

    viewReportHead: {
        fontSize: 37,
    },

    backButton: {
        alignSelf: 'flex-start',
        marginTop: 18,
        marginLeft: 20,
        backgroundColor: 'white'

    },

    viewReportBox: {
        marginTop: 25,
        width: 350,
        height: 515,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    viewReportListenButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 190,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    mic: {
        height: 20,
        width: 10,

    },

    waterImage: {
        marginTop: 15,
        height: 175,
        width: 250,
        alignSelf: 'center',
    },

    viewReportCloseImg: {
        backgroundColor: "black",
        height: 100,
    },

    viewReportCloseText: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 45,
        color: 'white',
    },




    reportWaterCont: {
        alignItems: 'center',
    },

    reportWaterHead: {
        fontSize: 30,
        textAlign: 'center',
    },

    reportWaterBox: {
        marginTop: 25,
        marginBottom: 10,
        width: 350,
        height: 460,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    reportWaterNameInput: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        fontSize: 16,
    },

    reportWaterSubjectInput: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        marginTop: 18,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        fontSize: 16,
    },

    reportWaterCommDropdown: {
        marginTop: 18,
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
    },

    reportWaterIncidentInput: {
        marginTop: 18,
        height: 120,
        width: 307,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 15,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 25,
        fontSize: 16,
    },

    reportWaterButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    reportWaterRecordButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 170,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    reportWaterUploadButton: {
        marginTop: 10,
        padding: 7,
        borderRadius: 12,
        width: 134,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    reportWaterSendButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 100,
        padding: 10,
        marginTop: 5,
        alignItems: 'center',
        fontSize: 10,
    },

    uparrow: {
        height: 20,
        width: 14,
    },




    confirmReportCont: {
        alignItems: 'center',
        marginTop: 250,
        marginRight: 12,
        marginLeft: 12,
    },

    confirmReportHead: {
        fontSize: 30,
        textAlign: 'center',
    },

    confirmReportBackButton: {
        marginTop: 40,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 170,
        alignItems: 'center',
    },




    createReportCont: {
        alignItems: 'center',
    },

    createReportHead: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15,
    },

    createReportBox: {
        marginTop: 25,
        width: 350,
        height: 440,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    createReportIncidentTitle: {
        height: 40,
        marginBottom: 5,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 25,
        fontSize: 16,
    },

    createReportCommDropdown: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
    },

    createReportIncidentInput: {
        marginTop: 18,
        height: 150,
        width: 307,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 15,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 25,
        fontSize: 16,
    },

    createReportButtons: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    createReportRecordButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 170,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    createReportUploadButton: {
        marginTop: 10,
        padding: 7,
        borderRadius: 12,
        width: 134,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    createReportPublishButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 100,
        padding: 10,
        marginTop: 15,
        alignItems: 'center',
        fontSize: 10,
    },

    respondMessCont: {
        alignItems: 'center',
    },

    respondMessHead: {
        fontSize: 30,
        alignSelf: 'flex-start',
        marginLeft: 40,
        marginTop: 15,
    },

    respondMessBox: {
        marginTop: 25,
        width: 350,
        height: 480,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    respondMessInput: {
        width: 307,
        height: 300,
        fontSize: 16,
    },

    respondMessRecordButton: {
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        marginTop: 100,
        width: 180,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
    },

    respondMessSendButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 100,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        fontSize: 10,
    },


    viewMessCont: {
        alignItems: 'center',
    },

    viewMessDate: {
        alignSelf: 'flex-end',
        marginRight: 30,
        fontSize: 15,
    },

    viewMessHead: {
        fontSize: 30,
        alignSelf: 'flex-start',
        marginLeft: 40,
        marginTop: 10,
    },

    viewMessBox: {
        marginTop: 25,
        width: 350,
        height: 485,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    viewMessComm: {
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 5,
    },

    viewMessListenButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 190,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    viewMessButtons: {
        flexDirection: 'row',
        marginTop: 15,
    },

    viewMessCallButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 115,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
    },

    viewMessRespondButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 115,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    viewMessPublishButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 115,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
    },

    form: {
        height: 550,
        justifyContent: 'center',
        margin: 50
    },

    weatherForm: {
        justifyContent: 'center',
        margin: 50,
        marginTop: 20
    },

    tableText: {
        fontSize: 18,
        padding: 10
    },

    adminWeatherMessage: {
        fontSize: 18,
        marginTop: 5
    },

    title: {
        textAlign: 'center',
        fontSize: 30,
    },

    buttonText: {
        color: 'white',
        fontSize: 18
    },

    blueButton: {
        backgroundColor: '#4a8eff',
        marginTop: 20,
        marginLeft: 70,
        marginRight: 70
    },

    blueButtonFull: {
        backgroundColor: '#4a8eff',
        marginTop: 20
    },

    link: {
        color: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        fontSize: 15
    },

    subheader: {
        height: 10,
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    leftHeader: {
        width: 100,
    },

    rightHeader: {
        width: 100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
        marginRight: 20
    },

    back: {
        marginTop: 18,
        marginLeft: 20,
        backgroundColor: 'white'
    },

    backText: {
        fontSize: 18
    },

    add: {
        marginTop: 10,
        // marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'white'
    },

    addText: {
        fontSize: 28
    },

    mail: {
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: 'white'
    },

    mailPicture: {
        width: 50,
        height: 33
    },

    waterTitle: {
        textAlign: 'center',
        fontSize: 30,
        height: 30,
        marginTop: 20,
    },

    waterForm: {
        height: 485,
        justifyContent: 'space-between',
        margin: 30,
        borderWidth: 1,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: 'black',
        borderRadius: 20
    },

    subTitle: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 5,
    },

    reportButton: {
        backgroundColor: '#4a8eff',
        height: 80,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    emergency: {
        width: 29,
        height: 23,
        marginLeft: 20,
    },

    inboxBody: {
        height: 479,
        margin: 30,
        borderWidth: 1
    },

    message: {
        backgroundColor: 'white',
        borderRadius: 0,
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 70,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    unread: {
        marginLeft: 30,
        marginTop: 3
    },

    circle: {
        height: 15,
        width: 15
    },

    messageDate: {
        marginTop: 10,
        marginRight: 10
    },

    checkbox: {
        backgroundColor: 'white',
        borderWidth: 0,
        //alignSelf: 'flex-start',
        //marginLeft: 60,
        marginTop: 5
    },

    dateHome: {
        color: 'white',
        fontSize: 14,
        marginRight: 15,
    },

    clickReportButton: {
        backgroundColor: '#4a8eff',
        height: 80,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttonTextHome: {
        color: 'white',
        fontSize: 20,
    },

    content: {
        marginTop: 3
    },

    fromText: {
        fontSize: 20,
        fontWeight: "bold",
    },

    bold: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 20
    },

    row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
    },

    emptyContainer: {
        alignSelf: 'stretch'
    },
  
    audioPageContent: {
        padding: 20,
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        // minHeight: DEVICE_HEIGHT,
        // maxHeight: DEVICE_HEIGHT,
      },
      noPermissionsText: {
        textAlign: 'center',
      },
      wrapper: {},
      halfScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        // minHeight: DEVICE_HEIGHT / 2.0,
        // maxHeight: DEVICE_HEIGHT / 2.0,
      },
      recordingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        // minHeight: ICON_RECORD_BUTTON.height,
        // maxHeight: ICON_RECORD_BUTTON.height,
      },
      recordingDataContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // minHeight: ICON_RECORD_BUTTON.height,
        // maxHeight: ICON_RECORD_BUTTON.height,
        // minWidth: ICON_RECORD_BUTTON.width * 3.0,
        // maxWidth: ICON_RECORD_BUTTON.width * 3.0,
      },
      recordingDataRowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // minHeight: ICON_RECORDING.height,
        // maxHeight: ICON_RECORDING.height,
      },
      playbackContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
      //   minHeight: ICON_THUMB_1.height * 2.0,
      //   maxHeight: ICON_THUMB_1.height * 2.0,
      },
      playbackSlider: {
        alignSelf: 'stretch',
      },
      liveText: {
        color: '#FF0000',
        fontSize: 30
      },
      recordingTimestamp: {
        paddingLeft: 20,
      },
      playbackTimestamp: {
        textAlign: 'right',
        alignSelf: 'stretch',
        paddingRight: 20,
      },
      micRecord: {
          height: 100,
          width: 60
      },
      recording: {
          height: 20,
          width: 20
      },
      mute: {
          height: 50,
          width: 50
      },
      play: {
          height: 90,
          width: 90
      },
      stop: {
          height: 30,
          width: 30
      },
      textButton: {
        padding: 10,
      },
      buttonsContainerBase: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      buttonsContainerTopRow: {
        // maxHeight: ICON_MUTED_BUTTON.height,
        alignSelf: 'stretch',
        paddingRight: 20,
      },
      playStopContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
        // minWidth: (ICON_PLAY_BUTTON.width + ICON_STOP_BUTTON.width) * 3.0 / 2.0,
        // maxWidth: (ICON_PLAY_BUTTON.width + ICON_STOP_BUTTON.width) * 3.0 / 2.0,
      },
      volumeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // minWidth: DEVICE_WIDTH / 2.0,
        // maxWidth: DEVICE_WIDTH / 2.0,
      },
      volumeSlider: {
        // width: DEVICE_WIDTH / 2.0 - ICON_MUTED_BUTTON.width,
      },
      buttonsContainerBottomRow: {
        //maxHeight: ICON_THUMB_1.height,
        alignSelf: 'stretch',
        paddingRight: 20,
        paddingLeft: 20,
      },
      rateSlider: {
        // width: DEVICE_WIDTH / 2.0,
      },
      uploadAudioButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 100,
        padding: 10,
        marginBottom: 40,
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 10,
    },

    incidentButton: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    loginPageButtons: {
        fontSize: 18,
        textDecorationLine: 'underline',
    },

    adminRightsTitle: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
    },

    adminRightsUsers: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        borderColor: '#707070',
        borderWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
    },

    adminRightsUserName: {
        fontSize: 15,
    },

    names: {
        flexDirection: 'row',
        marginLeft: 10,
        flexGrow: 1.5,
        width: 50
    },

    checkRights: {
        flex: 1,
        flexDirection: 'row'
    },

    checkBox: {
        flex: 1,
        flexDirection: 'row'
    },

    subsubTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    requestedAccess: {
        marginRight: 30,
    },

    giveAccess: {
        marginRight: 30,
    },

    check_x: {
        width: 30,
        height: 30,
        marginTop: 3,
        alignSelf: 'center'
    },

    GiveAdminRightsSubmit: {
        borderRadius: 20,
        backgroundColor: '#008bfc',
        width: 150,
        padding: 10,
        alignItems: 'center',
        fontSize: 10,
        alignSelf: 'center',
    },

    viewOldMessage: {
        marginTop: 20,
        alignItems: 'center',
    },

    oldMessTitle: {
        fontSize: 18,
    },
});