<script setup lang="ts">

	useHead({
		title: 'Sign Up',
		meta: [
		{ 
			name: 'description', 
			content: 'Sign Up Nuxt 3, IT Fluke Ratchanon Decha' 
		},
		{
			name: 'keywords',
			content: 'Sign Up, Nuxt 3, Learning Nuxt 3'
		},
		],
	})
	
</script>
<!-- src="https://wallpaper.dog/large/10880172.jpg" -->
<template>
	<VContainer fluid class="fill-height pa-0">
		<VRow no-gutters align="center" justify="center" class="fill-height">
			
			<VCol class="hidden-sm-and-down fill-height" md="6" lg="6">
				<VImg
					src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/405518688_2009934092719573_7441190359895067418_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vQDcfs2u6vUQ7kNvgGzNz9D&_nc_oc=AdhrldvaTafC8opja1TELMpT3n8XFQHq9ofQ-_NogJH3CPy03lcRZRJDCw_rYkKFQc41jH4oE6vwcVm_txV2EFpk&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=AFHOeEIEWdbFlI5NDySdvt3&oh=00_AYApSnhe_341Q1-0qhX_Vs6lDv-XLEgYB3VnaOTCVkjpPQ&oe=677E4B47"
					cover
					class="h-100 rounded-xl rounded-ts-0 rounded-bs-0 d-flex align-center justify-center"
				>
					<div class="text-center w-50 text-white mx-auto">
						<h1 class="mb-4">เริ่มการเดินทางของคุณสมัครสมาชิกที่นี่</h1>
						<p>
							ยินดีต้อนรับสู่ระบบจัดการสินค้า ขอเชิญคุณเข้าสู่ระบบเพื่อสัมผัสประสบการณ์การจัดการสินค้าที่สะดวกรวดเร็วและแม่นยำ เริ่มการทำงานของคุณได้วันนี้ พร้อมกับเรา!
						</p>
					</div>
				</VImg>
			</VCol>

			<VCol cols="12" md="6" lg="6" sm="6">
				<VRow no-gutters align="center" justify="center">
					<VCol cols="12" md="6" class="pa-3">
						<h1>สมัครสมาชิก</h1>
						<p class="text-medium-emphasis">ป้อนข้อมูลพื้นฐานดังนี้</p>

						<VForm class="mt-7">
							<div>
								<label class="label text-grey-darken-2" for="name">Name</label>
								<VTextField
									prepend-inner-icon="fluent:person-24-regular"
									id="name"
									name="name"
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="email">Email</label>
								<VTextField
									type="email"
									prepend-inner-icon="fluent:mail-24-regular"
									id="email"
									name="email"
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="password">Password</label>
								<VTextField
									type="password"
									prepend-inner-icon="fluent:password-20-regular"
									id="password"
									name="password"
								/>
							</div>
							<div class="mt-5">
								<VBtn type="submit" block min-height="45" class="gradient primary"
									>Create Account</VBtn
								>
							</div>
						</VForm>
						<p class="text-center mt-10">
							<span
								>เป็นสมาชิกอยู่แล้ว ?
								<NuxtLink to="/" class="font-weight-bold text-primary">เข้าสู่ระบบ</NuxtLink></span
							>
						</p>
					</VCol>
				</VRow>
			</VCol>

		</VRow>
	</VContainer>
</template>

<style scoped>

</style>