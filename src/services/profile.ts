// 导入会员信息类型
import type { ProfileDetail, ProfileParams } from '@/types/member'
// 导入http请求库方法
import { http } from '@/utils/http'

/**
 * 获取个人信息
 * @returns
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data: data
  })
}


