# 旅游
## 功能
- 搜索
- 目的地
	- 官方推荐
	- 赞
- 旅游攻略
	- 用户分享
	- 赞
- 行程助手
- 结伴游
- 社区
- 用户
	- 登录和注册
	- 个人信息
	- 我的攻略
	- 我的收藏
	- 我的结伴（完成的、参加的、关注的）
	- 智能推荐
	- VIP（结伴优先）

## 页面
- 主页 index.html
	- 导航栏 header.html
		- logo
		- 首页、目的地、攻略、行程助手、社区
		- 登录框
	- 巨幕
		- 美图背景
		- 搜索
	- 智能推荐
	- 最火目的地
	- 最赞攻略
	- 尾部 footer.html
		- 关于我们 about.html
		- 加入我们 join.html
		- 网络条款 exemption.html
		- 捐赠我们 donate.html
		- 帮助中心 help.html
- 目的地 dest/index.html, detail.html
	- 搜索框
	- 城市列表
- 旅游攻略 strategy.html
	- 搜索框、筛选框
- 行程助手 assist/index.html
	- 选择行程城市
	- 选择时间
	- 选择紧凑程度
- 结伴游 company/index.html, create.html, detail.html
	- 发起
	- 条件筛选加入
	- 关注
- 社区（论坛）community.html
	- 发帖
	- 回帖
	- 删帖
- 用户 user/index.html


## 数据库设计

city (**id**, **country**, province, **name**)

user (**id**, **nickname**, **password**, name, gender, **email**, city\_id, birthday, career, mobile, is\_vip, **created_at**)

destination (**id**, **city_id**, **title**, **content**, **click_count**, **created_at**)
<!--官方攻略-->

strategy (**id**, **city_id**, **title**, **content**, **user_id**, **created_at**, **updated_at**, **like_count**)
<!--用户攻略-->

remark (**id**, **user_id**, **content**, **like_count**,  **created_at**, **type**, **article_id**)

company (**id**, **city_id**, **user_id**, **begin_time**, **end_time**, **max_count**, **current_count**, **min_count**, **content**, **created_at**, **deadline**)

company\_user (**company_id**, **user_id**, **comment**)

watch (**user_id**, **type**, **article_id**)

article (**id**, **user_id**, **title**, **content**, **created_at**, **is_top**)

admin (**username**, **password**)

log (**admin_name**, **content**, **created_at**)
