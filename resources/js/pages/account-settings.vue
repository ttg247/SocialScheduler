<script setup>
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsNotification from '@/views/pages/account-settings/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/pages/account-settings/AccountSettingsSecurity.vue'
import AccountsSocialConfig from '@/pages/social/config.vue'

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
	{
		title: 'Account',
		icon: 'bx-user',
		tab: 'account',
	},
	{
		title: 'Security',
		icon: 'bx-lock-open',
		tab: 'security',
	},
	{
		title: 'Notifications',
		icon: 'bx-bell',
		tab: 'notification',
	},
	{
		title: 'Config',
		icon: 'bx-cog',
		tab: 'config',
	},
]
</script>

<template>
	<div>
		<VTabs
			v-model="activeTab"
			show-arrows
			class="v-tabs-pill"
		>
			<VTab
				v-for="item in tabs"
				:key="item.icon"
				:value="item.tab"
			>
				<VIcon
					size="20"
					start
					:icon="item.icon"
				/>
				{{ item.title }}
			</VTab>
		</VTabs>

		<VWindow
			v-model="activeTab"
			class="mt-5 disable-tab-transition"
		>
			<!-- Account -->
			<VWindowItem value="account">
				<AccountSettingsAccount />
			</VWindowItem>

			<!-- Security -->
			<VWindowItem value="security">
				<AccountSettingsSecurity />
			</VWindowItem>

			<!-- Notification -->
			<VWindowItem value="notification">
				<AccountSettingsNotification />
			</VWindowItem>

			<!-- Notification -->
			<VWindowItem value="config">
				<AccountsSocialConfig />
			</VWindowItem>
		</VWindow>
	</div>
</template>
