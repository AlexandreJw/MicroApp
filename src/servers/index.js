import {post, get} from '@/utils/httpService'

export const listSubsystem = (data) => post('/wapc/subsystem/listSubsystem', data)
export const saveSubsystem = (data) => post('/wapc/subsystem/saveSubsystem', data)
export const saveFuncMenu = (data) => post('/wapc/funcmenu/saveFuncMenu', data)
export const getFuncMenus = (params) => get('/wapc/funcmenu/getFuncMenus', params)
export const pagePlatform = (data = {}) => post('/wapc/platform/pagePlatform', {...data, "pageNum": 1,"pageSize": 100})
export const listRoleInfo = (params) => get('/wapc/role/listRoleInfo', params)
export const getRoleFuncMenus = (params) => get('/wapc/role/getRoleFuncMenus', params)
export const saveRoleInfo = (data) => post('/wapc/role/saveRoleInfo', data)

export const pageUserRole = (data) => post('/wapc/user/pagePlatformUserRole', data)
export const updateUserEnabledFlag = (params) => get('/wapc/user/updateUserEnabledFlag', params)
export const saveUserInfo = (data) => post('/wapc/user/saveUserInfo', data)
export const deleteUser = (params) => get('/wapc/user/deleteUser', params)
export const deleteFuncMenu = (data) => get('/wapc/funcmenu/deleteFuncMenu', data)
export const listDataDic = (data) => get('/wapc/dic/listDataDic', data)
export const saveRoleFuncs = (data) => post('/wapc/role/saveRoleFuncs', data)