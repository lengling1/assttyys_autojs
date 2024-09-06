import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [


	{
		id: 9901,
		schemeName: '个人突破',
		star: true,
		groupName: '通用功能',
		list: [0, 1, 2, 3, 8, 9, 10, 11, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'8': {
				next_scheme: '__返回上个方案__'
			},
			'9': {
				scheme_switch_enabled: true,
				next_scheme: '个人突破-退出'
			}
		}
	},
	{
		id: 9902,
		schemeName: '个人突破-退出',
		star: false,
		groupName: '通用功能',
		list: [0, 1, 2, 3, 8, 9, 10],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5,
				jspd_enabled_2: true,
				jspd_times_2: '4',
				scheme_switch_enabled: true,
				next_scheme: '__返回上个方案__'
			},
			'1': {
				exitBeforeReady: true
			},
			'2': {
				rechallenge: true
			},
			'3': {
				switch: true
			},
			'8': {
				afterCountOper: '九退四_切换方案',
				next_scheme: '__返回上个方案__'
			},
			'9': {
				next_scheme: '__停止脚本__'
			}
		}
	},
	{
		id: 9903,
		schemeName: '斗技-带绿标',
		star: true,
		groupName: '通用功能',
		list: [0, 51, 1, 2, 3, 30, 307],
		config: {
			'3': {
				switch: true
			},
			'51': {
				greenType: '自定义坐标'
			}
		}
	},
	{
		id: 9904,
		schemeName: '个人突破->探索',
		star: true,
		groupName: '突破回转',
		list: [0, 1, 2, 3, 8, 9, 10, 11, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5,
				next_scheme: '退出-突破探索循环'
			},
			'8': {
				afterCountOper: '切换方案',
				next_scheme: '探索掉落75次->突破'
			},
			'9': {
				scheme_switch_enabled: true,
				next_scheme: '个人突破-退出'
			}
		}
	},
	{
		id: 9905,
		schemeName: '个人突破->业原火',
		star: false,
		groupName: '突破回转',
		list: [0, 1, 2, 3, 8, 9, 10, 11, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'8': {
				afterCountOper: '切换方案',
				next_scheme: '业原火100次->突破'
			},
			'9': {
				scheme_switch_enabled: true,
				next_scheme: '个人突破-退出'
			}
		}
	},
	{
		id: 9906,
		schemeName: '式神寄养-太鼓无换杀应用',
		star: false,
		groupName: '寄养',
		list: [0, 3, 999, 998, 997, 994, 995],
		config: {
			'0': {
				jspd_times_longtime_nodo: 20
			},
			'3': {
				switch: true
			},
			'995': {
				afterCountOper: '关闭应用',
				isAutoFosterCare: false,
				next_scheme: '__停止脚本__'
			}
		}
	},
	{
		id: 9907,
		schemeName: '式神寄养-太鼓换太鼓杀应用',
		star: false,
		groupName: '寄养',
		list: [0, 3, 999, 998, 997, 994, 995],
		config: {
			'0': {
				jspd_times_longtime_nodo: 20
			},
			'3': {
				switch: true
			},
			'995': {
				afterCountOper: '关闭应用',
				isAutoFosterCare: false,
				next_scheme: '__停止脚本__'
			},
			'998': {
				change_enchantment_switch: true
			}
		}
	},
	{
		id: 9908,
		schemeName: '定时->寄养-太鼓无换杀应用',
		star: false,
		groupName: '定时任务',
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'503': {
				afterCountOper: '不进行任何操作'
			},
			'993': {
				is_shutdown_the_game_before: true,
				next_scheme: '式神寄养-太鼓无换杀应用'
			}
		}
	},
	{
		id: 9909,
		schemeName: '定时->寄养-太鼓换太鼓杀应用',
		star: false,
		groupName: '定时任务',
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'503': {
				afterCountOper: '不进行任何操作'
			},
			'993': {
				is_shutdown_the_game_before: true,
				next_scheme: '式神寄养-太鼓换太鼓杀应用'
			}
		}
	},
	{
		id: 9910,
		schemeName: '定时->花合战100日常',
		star: false,
		groupName: '定时任务',
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'503': {
				afterCountOper: '不进行任何操作'
			},
			'993': {
				is_shutdown_the_game_before: true,
				next_scheme: '0.签到换预设->逢魔'
			}
		}
	},
	{
		id: 9911,
		schemeName: '业原火100次->突破',
		star: false,
		groupName: '',
		list: [0, 1, 2, 3, 6, 53, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5,
				jspd_enabled_2: true,
				jspd_times_2: 100,
				scheme_switch_enabled: true,
				next_scheme: '个人突破->业原火'
			},
			'3': {
				switch: true
			},
			'53': {
				challenge_type: '御魂-业原火'
			}
		}
	},
	{
		id: 9912,
		schemeName: '探索掉落75次->突破',
		star: true,
		groupName: '',
		list: [0, 1, 2, 3, 13, 14, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5,
				jspd_times_1: 100,
				jspd_enabled_2: true,
				jspd_times_2: 75,
				scheme_switch_enabled: true,
				next_scheme: '个人突破->探索'
			},
			'14': {
				type: '打掉落',
				swipeSpeed: '中'
			}
		},
		commonConfig: {
			multiColorSimilar: 98
		}
	},
	{
		id: 9913,
		schemeName: '0.签到换预设->逢魔',
		star: true,
		groupName: '日常+花合100全套',
		list: [0, 2, 3, 518, 509, 510, 503],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5,
				scheme_switch_enabled: true,
				next_scheme: '1.逢魔'
			},
			'3': {
				switch: true
			},
			'503': {
				scheme_switch_enabled: true,
				next_scheme: '1.逢魔->悬赏'
			},
			'510': {
				fastMode: true
			}
		}
	},
	{
		id: 9914,
		schemeName: '1.逢魔->悬赏',
		star: false,
		groupName: '日常+花合100全套',
		list: [0, 315, 1, 2, 3, 23, 24, 26, 508, 8, 504, 503],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'503': {
				afterCountOper: '不进行任何操作'
			},
			'508': {
				next_scheme: '2.悬赏->魂十'
			}
		}
	},
	{
		id: 9915,
		schemeName: '2.悬赏->魂十',
		star: false,
		groupName: '日常+花合100全套',
		list: [0, 315, 1, 2, 3, 52, 29, 41, 42, 43, 45, 46, 47, 48, 49, 44],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'42': {
				next_scheme: '3.地鬼'
			},
			'47': {
				scheme_switch_enabled: true,
				next_scheme: '3.魂十16次->关buff'
			},
			'52': {
				scheme_switch_enabled: false
			}
		}
	},
	{
		id: 9916,
		schemeName: '3.魂十16次->关buff',
		star: false,
		groupName: '日常+花合100全套',
		list: [0, 50, 1, 2, 3, 6, 53, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5,
				jspd_enabled_2: true,
				jspd_times_2: 16,
				scheme_switch_enabled: true,
				next_scheme: '4.关buff->地鬼'
			},
			'3': {
				switch: true
			},
			'50': {
				buff_type: '御魂',
				ready_once_buff: true
			}
		}
	},
	{
		id: 9917,
		schemeName: '4.关buff->地鬼',
		star: false,
		groupName: '日常+花合100全套',
		list: [0, 1, 2, 3, 40, 501, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5
			},
			'3': {
				switch: true
			},
			'40': {
				scheme_switch_enabled: true,
				next_scheme: '5.地鬼->领取花合战'
			}
		}
	},
	{
		id: 9918,
		schemeName: '5.地鬼->领取花合战',
		star: false,
		groupName: '日常+花合100全套',
		list: [0, 1, 2, 3, 16, 29, 502],
		config: {
			'0': {
				jspd_times_longtime_nodo: 5,
				jspd_times_2: 3
			},
			'3': {
				switch: true
			},
			'16': {
				next_scheme: '6.领取花合战杀应用'
			}
		}
	},
	{
		id: 9919,
		schemeName: '6.领取花合战杀应用',
		star: false,
		groupName: '日常+花合100全套',
		list: [0, 2, 3, 314],
		config: {
			'0': {
				jspd_times_longtime_nodo: 1,
				stop_with_launched_app_exit: true
			},
			'3': {
				switch: true
			}
		}
	},


	{
		id: 1,
		schemeName: '通用准备退出',
		list: [0, 1, 2, 3],
	},
	{
		id: 12,
		schemeName: '抽厕纸',
		list: [3, 22],
	},

	{
		id: 29,
		schemeName: '返回庭院',
		list: [3, 503],
		config: {
			'503': {
				scheme_switch_enabled: false,
				next_scheme: '通用准备退出',
				afterCountOper: '停止脚本',
			},
		},
	},
	{
		id: 62,
		schemeName: '通用活动',
		star: true,
		list: [0, 1, 2, 3, 312],
	},
	{
		id: 76,
		schemeName: '僵尸寮自动攻打道馆',
		list: [311, 32, 519, 505, 51, 0, 1, 2],
		config: {
			'32': {
				after_fail_operation: '再战道馆',
				exit_second: true,
			},
			'51': {
				greenType: '自定义坐标',
				preSearch: true
			},
			'311': {
				redType: '夜溟彼岸花',
				sleepTime: 2.4
			},
			'519': {
				defense: 1,
				coefficient: 5,
				day: true
			},
		},
	},

	// , {
	// 	id: 102,
	// 	schemeName: '定时任务-启动游戏-对弈竞猜',
	// 	star: true,
	// 	groupName: '定时任务',
	// 	list: [1, 2, 3, 503, 993],
	// 	config: {
	// 		'993': {
	// 			area: '',
	// 			is_shutdown_the_game_before: true,
	// 			next_scheme: '对弈竞猜',
	// 		},
	// 		'503': {
	// 			afterCountOper: '不进行任何操作',
	// 		},
	// 	},
	// }, {
	// 	id: 101,
	// 	schemeName: '对弈竞猜',
	// 	list: [0, 2, 401],
	// 	config: {
	// 		'0': {
	// 			jspd_times_longtime_nodo: '1',
	// 		}
	// 	},
	// }
	//
	// 完整demo
	// , {
	//     id: 2,
	//     schemeName: '组队队长',
	//     star: false,
	//     list: [0, ], // funcList中的id集合
	//     config: { // 方案中的配置，如返回空的话使用默认配置
	//         '1': { // key为功能的ID（1表示准备）
	//             enabled: false,
	//             position: '五人-左1'
	//         }
	//     },
	//     commonConfig: { // 通用参数
	//         clickDelay: 200, // 点击后固定延时
	//         clickDelayRandom: 1000, // 点击后延时随机数
	//         // 等
	//     }
	// }
];

const commonConfig = {};
for (let i = 0; i < commonConfigArr.length; i++) {
	for (let j = 0; j < commonConfigArr[i].config.length; j++) {
		const item = commonConfigArr[i].config[j];
		commonConfig[item.name] = item.default;
	}
}
const allConfig = {};
for (let i = 0; i < funcList.length; i++) {
	const configs = funcList[i].config;
	if (configs) {
		allConfig[funcList[i].id] = {};
		for (const config of configs) {
			config.config.forEach((item) => {
				allConfig[funcList[i].id][item.name] = item.default;
			});
		}
	}
}

// 内置方案列表
const innerSchemeListName = {};

SchemeList.forEach((item, id) => {
	innerSchemeListName[item.schemeName] = true;
	const thisConfig = {};
	item.list.forEach((funcId) => {
		if (allConfig[funcId]) {
			thisConfig[funcId] = allConfig[funcId];
		}
	});
	SchemeList[id] = merge(
		{},
		{
			id: id + 1,
			schemeName: '未命名',
			inner: true,
			star: false,
			list: [],
			config: thisConfig,
			commonConfig: commonConfig,
		},
		item
	);
});

export const schemeNameMap = innerSchemeListName;
export default SchemeList;
