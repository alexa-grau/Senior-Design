import React from 'react';

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import WaterHomeGen from './screens/WaterHomeGen'
import WaterHomeAdmin from './screens/WaterHomeAdmin'
import WaterHomeBigAdmin from './screens/WaterHomeBigAdmin'
import WaterHomeBigAdminRefresh from './screens/WaterHomeBigAdminRefresh'
import WaterHomeAdminRefresh from './screens/WaterHomeAdminRefresh'
import ConfirmWaterQualityReport from './screens/ConfirmWaterQualityReport'
import CreateNewAccount from './screens/CreateNewAccount'
import CreateNewWaterQualityReport from './screens/CreateNewWaterQualityReport'
import CreateNewWaterQualityReportPub from './screens/CreateNewWaterQualityReportPub'
import ReportWaterQuality from './screens/ReportWaterQuality'
import RespondToMessage from './screens/RespondToMessage'
import ViewIndividualMessage from './screens/ViewIndividualMessage'
import ViewIndividualWaterReport from './screens/ViewIndividualWaterReport'
import InboxGen from './screens/InboxGen'
import InboxAdmin from './screens/InboxAdmin'
import RecordMessage from './screens/RecordMessage'
import GiveAdminRights from './screens/GiveAdminRights'
import ViewMailMessage from './screens/ViewMailMessage'

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const myStackNavigatorGen = createStackNavigator(
{
	WaterHomeGen: WaterHomeGen,
	ConfirmWaterQualityReport: ConfirmWaterQualityReport,
	ViewIndividualWaterReport: ViewIndividualWaterReport,
	ReportWaterQuality: ReportWaterQuality,
	RespondToMessage: RespondToMessage,
	InboxGen: InboxGen,
	ViewMailMessage: ViewMailMessage,
	RecordMessage: RecordMessage,
},
{
	initialRouteName: 'WaterHomeGen',
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
}
);

const myStackNavigatorAdmin = createStackNavigator(
{
	WaterHomeAdmin: WaterHomeAdmin,
	WaterHomeAdminRefresh: WaterHomeAdminRefresh,
	CreateNewWaterQualityReport: CreateNewWaterQualityReport,
	ViewIndividualWaterReport: ViewIndividualWaterReport,
	RespondToMessage: RespondToMessage,
	InboxAdmin: InboxAdmin,
	ViewIndividualMessage: ViewIndividualMessage,
	CreateNewWaterQualityReportPub: CreateNewWaterQualityReportPub,
	RecordMessage: RecordMessage,
},
{
	initialRouteName: 'WaterHomeAdmin',
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
}
);

const myStackNavigatorBigAdmin = createStackNavigator(
{
	WaterHomeBigAdmin: WaterHomeBigAdmin,
	WaterHomeBigAdminRefresh: WaterHomeBigAdminRefresh,
	CreateNewWaterQualityReport: CreateNewWaterQualityReport,
	ViewIndividualWaterReport: ViewIndividualWaterReport,
	RespondToMessage: RespondToMessage,
	InboxAdmin: InboxAdmin,
	ViewIndividualMessage: ViewIndividualMessage,
	CreateNewWaterQualityReportPub: CreateNewWaterQualityReportPub,
	RecordMessage: RecordMessage,
	GiveAdminRights: GiveAdminRights,
},
{
	initialRouteName: 'WaterHomeBigAdmin',
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
}
);

const mySwitchNavigator = createSwitchNavigator(
{
	Welcome: { screen: Welcome },
	CreateNewAccount: { screen: CreateNewAccount },
	Login: { screen: Login },
	WaterHomeGen: { screen: myStackNavigatorGen },
	WaterHomeAdmin: { screen: myStackNavigatorAdmin },
	WaterHomeBigAdmin: { screen: myStackNavigatorBigAdmin },
},
{
	initialRouteName: 'Welcome'
}
);

export default createAppContainer(mySwitchNavigator);