import { APP_PREFIX_PATH } from 'constants/route.constant'
import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsNavigationConfig = [
	{
		key: 'apps',
		path: '',
		title: 'APPS',
		translateKey: 'nav.apps',
		icon: 'apps',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [ADMIN, USER],
		subMenu: [
			{
				key: 'apps.knowledgeBase',
				path: '',
				title: 'Knowledge Base',
				translateKey: 'nav.appsknowledgeBase.knowledgeBase',
				icon: 'knowledgeBase',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsknowledgeBase.helpCenter',
						path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
						title: 'Help Center',
						translateKey: 'nav.appsknowledgeBase.helpCenter',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.article',
						path: `${APP_PREFIX_PATH}/knowledge-base/article?id=rZjCbSyae5`,
						title: 'Article',
						translateKey: 'nav.appsknowledgeBase.article',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.manageArticles',
						path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
						title: 'Manage Articles',
						translateKey: 'nav.appsknowledgeBase.manageArticles',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.editArticle',
						path: `${APP_PREFIX_PATH}/knowledge-base/edit-article?id=rZjCbSyae5&categoryLabel=Survey&categoryValue=survey`,
						title: 'Edit Article',
						translateKey: 'nav.appsknowledgeBase.editArticle',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.account',
				path: '',
				title: 'Account',
				translateKey: 'nav.appsAccount.account',
				icon: 'account',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsAccount.settings',
						path: `${APP_PREFIX_PATH}/account/settings/profile`,
						title: 'Settings',
						translateKey: 'nav.appsAccount.settings',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.invoice',
						path: `${APP_PREFIX_PATH}/account/invoice/36223`,
						title: 'Invoice',
						translateKey: 'nav.appsAccount.invoice',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.activityLog',
						path: `${APP_PREFIX_PATH}/account/activity-log`,
						title: 'Activity Log',
						translateKey: 'nav.appsAccount.activityLog',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.kycForm',
						path: `${APP_PREFIX_PATH}/account/kyc-form`,
						title: 'KYC Form',
						translateKey: 'nav.appsAccount.kycForm',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
		]
	}
]

export default appsNavigationConfig