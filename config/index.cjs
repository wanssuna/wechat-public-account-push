/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc556d1b8d63d447d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0e4b0d599f688b05885fc807ee8c2dd4',

  PROVINCE: '江苏',
  CITY: '苏州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Mori',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-mK_6ur2y4W4IlNC9U7uCG-FYmI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '8a7H2Qt1zgZL23eV9jB9lidU25Jc1-85HXgFnyrjLqA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'Mori', year: '1999', date: '06-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '8a7H2Qt1zgZL23eV9jB9lidU25Jc1-85HXgFnyrjLqA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-mK_6u03DkbVHZW4n5D78706hDA',
    }
  ],

}

module.exports = USER_CONFIG

