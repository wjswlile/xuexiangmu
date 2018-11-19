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
