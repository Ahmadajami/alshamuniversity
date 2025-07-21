<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Label } from 'bits-ui';
</script>

<!-- ========== HEADER ========== -->
<div class="my-4 md:mt-10 md:mr-10 md:ml-20">
	<header
		class="z-50 flex h-[8vh] w-full flex-row-reverse rounded-xl border-b border-gray-200 bg-white drop-shadow-2xl md:h-[10vh] md:flex-nowrap md:justify-start dark:border-neutral-700 dark:bg-neutral-800"
	>
		<nav
			class="relative mx-auto w-full max-w-[85rem] flex-row-reverse px-4 py-2 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:px-8"
		>
			<div class="flex items-center justify-between gap-x-1">
				<div class="inline-flex">
					<Avatar.Root>
						<Avatar.Image
							src="http://my.aspu.edu.sy/storage/images/documents/_sis/add/student_picture/34467.116.jpg?v=2025.07.21.18.58.37"
							alt="@shadcn"
							loading="lazy"
						/>
						<Avatar.Fallback>DA</Avatar.Fallback>
					</Avatar.Root>
					<span class="mx-2 my-2 text-sm">023071552</span>

					<span class="mx-2 my-2 text-sm">داني صالح المصري</span>
				</div>

				<!-- Collapse Button -->
				<button
					type="button"
					class="hs-collapse-toggle relative flex size-9 items-center justify-center self-start rounded-lg border border-gray-200 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
					id="hs-header-base-collapse"
					aria-expanded="false"
					aria-controls="hs-header-base"
					aria-label="Toggle navigation"
					data-hs-collapse="#hs-header-base"
				>
					<svg
						class=" size-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line
							x1="3"
							x2="21"
							y1="18"
							y2="18"
						/></svg
					>

					<span class="sr-only">Toggle navigation</span>
				</button>
				<!-- End Collapse Button -->
			</div>
		</nav>
	</header>
</div>
<!-- ========== END HEADER ========== -->
