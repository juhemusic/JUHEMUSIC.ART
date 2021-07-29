// 配置
window.Config = {

  // 站点名
  SiteName: 'JUHEMUSIC.ART 服务状态',

  // 站点链接
  SiteUrl: 'https://status.juhemusic.art/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'https://status.juhemusic.art/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'u1388687-ff5483a554c1bef88dc5b307',
    'm788820365-8b1a5ea9d700443067ea6546',
    'm788821163-05e3ac6270e220adacea304b',
    'm788821106-23d29714ff2a141bf253c03f',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '首页',
      url: 'https://status.juhemusic.art/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
