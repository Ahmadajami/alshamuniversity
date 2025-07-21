<script lang="ts">
	import User from '@lucide/svelte/icons/user-round';
	import Lock from '@lucide/svelte/icons/lock';
	import { LogIn } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
</script>

<svelte:head>
	<title>جامعة الشام الخاصة</title>
</svelte:head>

<div class="">
	<div
		class=" vx-row no-gutter flex h-svh w-full justify-end overflow-x-auto bg-cover bg-center"
		style="background-image: url(images/login-bg.webp);"
	>
		<div class=" w-full sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-2/5">
			<div class="h-full-card-vs-con-loading__container h-full">
				<div class="h-full">
					<header
						class="vs-navbar navbar-custom nabarx vs-navbar-null vs-navbar-color-transparent d-theme-dark-light-bg p-2 text-primary shadow-none"
						style="background: transparent;"
					></header>
					<div class="vx-row no-gutter items-center justify-center">
						<div class="vx-col mt-5 lg:block lg:w-full">
							<img src="images/logo.png" alt="logo" class="mx-auto h-20 md:h-full" />
							<div class="text-center text-base md:text-3xl" style="color: rgb(255, 204, 0);">
								Leading Generations
							</div>
						</div>
						<div class="container px-8">
							<div class="vx-col lg:w-4/5">
								<div class="p-3 md:p-8 md:pt-4">
									<div class="vx-card__title">
										<span>
											<form method="post" use:enhance>
												<div class="vx-row">
													<div class="vx-col mb-3 w-full">
														<label for="username" style="color: white;">الرقم الجامعي</label>
														<div class="relative">
															<input
																id="username"
																name="username"
																type="text"
																autocomplete="username"
																required
																class="block w-full rounded-lg border-0 bg-white py-2 pr-12 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-purple-600 focus:outline-none focus:ring-inset sm:text-sm"
															/>
															<div
																class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
															>
																<User color="#999090" size="20" />
															</div>
														</div>
													</div>
													<div class="vx-row w-full">
														<div class="vx-col mb-3 w-full">
															<label for="password" style="color: white;">كلمة المرور</label>
															<span
																><div class="vx-input-group mb-base flex">
																	<div class="vx-input-group-default flex-grow">
																		<div
																			class="vs-component vs-con-input-label vs-input vs-input-primary w-full"
																		>
																			<div class="relative">
																				<input
																					id="passaword"
																					name="password"
																					type="password"
																					autocomplete="current-password"
																					required
																					class="block w-full rounded-lg border-0 bg-white py-2 pr-12 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-purple-600 focus:outline-none focus:ring-inset sm:text-sm"
																				/>
																				<div
																					class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
																				>
																					<Lock color="#999090" size="20" />
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</span>
															{#if form}
																{#if form?.message}
																	<span class=" block h-2 text-sm text-red-500">{form.message}</span
																	>{/if}
															{/if}
														</div>
													</div>
													<div class="mb-3 flex flex-wrap justify-between">
														<a href="/password/reset" class="text-white">نسيت كلمة المرور ؟ </a>
													</div>

													<!---->
													<div class="mb-3 flex w-full flex-wrap justify-center">
														<Button
															type="submit"
															class="cursor-pointer bg-purple-500 hover:bg-purple-500 hover:shadow-purple-500"
															><span
																class="vs-button-backgroundx vs-button--background"
																style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s, height 0.3s, opacity 0.3s;"
															></span><i
																class="vs-icon notranslate icon-scale vs-button--icon feather icon-log-in null"
																style="order: 0; margin-left: 5px; margin-right: 0px;"
															></i><span class="vs-button-text vs-button--text"
																>تسجيل دخول
															</span><span
																class="vs-button-linex"
																style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"
															>
																<LogIn />
															</span></Button
														>
													</div>
												</div>
											</form></span
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="vx-col w-fulltext-white fixed bottom-0 left-[40%]">
			<footer class="the-footer flex-wrap justify-center" style="padding-bottom: 0.5rem;">
				<span class="text-white"
					>جميع الحقوق محفوظة © 2025
					<a href="https://automata4.com" target="_blank" rel="nofollow">مجموعة أتوماتا4</a></span
				>
			</footer>
		</div>
	</div>
</div>

