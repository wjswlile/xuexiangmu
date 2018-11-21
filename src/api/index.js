/**
 * Created by 李乐 on 2018/11/19.
 */
import ajax from './ajax'
const BASE = '/api'

//根据经纬度获取详情位置
export const reqAddress = (longitude, latitude) => ajax(BASE+`/position/${latitude},${longitude}`)

//获取食品分类
export const reqFoodCategorys = () => ajax(BASE+'/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax(BASE+ '/shops', {latitude, longitude})

//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE+ '/sendcode', {phone})

//手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE + '/ogin_sms', {phone, code}, 'POST')

//用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')

//获取当前用户信息
export const reqUserInfo = () => ajax(BASE + '/userinfo')

export const reqLogout = () => ajax(BASE + '/logout')

export const reqShopInfo = () => ajax('/info')
export const reqShopGoods = () => ajax('/goods')
export const reqShopRatings = () => ajax('/ratings')








