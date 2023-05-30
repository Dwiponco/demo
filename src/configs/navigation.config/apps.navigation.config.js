import { APP_PREFIX_PATH } from 'constants/route.constant'
import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsNavigationConfig = [
	{
		key: 'home',
		path: `${APP_PREFIX_PATH}/home`,
		title: 'Home',
		translateKey: 'nav.appsknowledgeBase.helpCenter',
		icon: '',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [ADMIN, USER],
		subMenu: []
	},
	{
		key: 'about',
		path: `${APP_PREFIX_PATH}/about`,
		title: 'About',
		translateKey: 'nav.appsknowledgeBase.helpCenter',
		icon: '',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [ADMIN, USER],
		subMenu: []
	}
]

export default appsNavigationConfig