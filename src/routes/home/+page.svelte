<script lang="ts">
	import Header from '$lib/Header.svelte';
	let { data } = $props();

	const courseGrades = [
		{
			courseName: 'القانون الدولي العام',
			courseCode: 'RQL316',
			credits: 3,
			detail1: '18 من 25',
			detail2: '7 من 15', // Low score
			sumTest: '25 من 40', // 18 + 7 = 25
			finalTest: '47 من 60',
			total: '72', // 25 + 47 = 72
			points: 2.0, // Standard 2.0 for C
			grade: 'C'
		},
		{
			courseName: ' الواقعة على الأشخاص و الأموال قانون العقوبات الخاص (1)',
			courseCode: 'RQL526',
			credits: 3,
			detail1: '20 من 25',
			detail2: '8 من 15', // Low score
			sumTest: '28 من 40', // 20 + 8 = 28
			finalTest: '49 من 60',
			total: '77', // 28 + 49 = 77
			points: 2.5, // Standard 2.5 for C+
			grade: 'C+'
		},
		{
			courseName: ' القانون الإداري (2)',
			courseCode: 'RQL-420',
			credits: 3,
			detail1: '16 من 25',
			detail2: '6 من 15', // Low score
			sumTest: '22 من 40', // 16 + 6 = 22
			finalTest: '35 من 60',
			total: '57', // 22 + 45 = 67
			points: 1.5, // Standard 1.5 for D+
			grade: 'D+'
		},
		{
			courseName: '  الأسناد التجارية(3)القانون التجاري',
			courseCode: 'RQL-420',
			credits: 3,
			detail1: '19 من 25',
			detail2: '7 من 15', // Low score
			sumTest: '26 من 40', // 19 + 7 = 26
			finalTest: '44 من 60',
			total: '70', // 26 + 44 = 70
			points: 2.0, // Standard 2.0 for C
			grade: 'C'
		},
		{
			courseName: 'علم النفس ',
			courseCode: 'RQUE5',
			credits: 2,
			detail1: '21 من 25',
			detail2: '9 من 15', // Low/Medium score
			sumTest: '30 من 40', // 21 + 9 = 30
			finalTest: '51 من 60',
			total: '81', // 30 + 51 = 81
			points: 3.0, // Standard 3.0 for B
			grade: 'B'
		}
	];
</script>

<svelte:head>
	<title>جامعة الشام الخاصة</title>
</svelte:head>
<Header />

<div class="mx-auto max-w-full p-4 md:max-w-screen">
	<div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
		<div class="border-b border-gray-100 p-4">
			<h2 class="text-lg font-semibold text-gray-700">الفصل الأول 2025/2026</h2>
		</div>
		<div class="overflow-x-auto">
			<table class=" min-w-full border-collapse text-left">
				<thead class="bg-gray-100 text-gray-700">
					<tr>
						<th rowspan="2" class="border px-2 py-2 align-middle">اسم المقرر</th>
						<th rowspan="2" class="border px-2 py-2 align-middle">رمز المقرر</th>
						<th rowspan="2" class="border px-2 py-2 align-middle">عدد الساعات</th>
						<th colspan="2" class="border px-2 py-2 text-center">تفاصيل</th>
						<th colspan="3" class="border px-2 py-2 text-center">الملخص</th>
						<th rowspan="2" class="border px-2 py-2 align-middle">النقاط</th>
						<th rowspan="2" class="border px-2 py-2 align-middle">التقدير</th>
					</tr>
					<tr>
						<th class="border px-2 py-1">1</th>
						<th class="border px-2 py-1">2</th>
						<th class="border px-2 py-1">السعي الفصلي</th>
						<th class="border px-2 py-1">الإمتحان النهائي</th>
						<th class="border px-2 py-1">المجموع</th>
					</tr>
				</thead>
				<tbody class="text-gray-800">
					{#each courseGrades as course}
						<tr>
							<td class="border px-2 py-1">{course.courseName}</td>
							<td dir="ltr" class="border px-2 py-1">{course.courseCode}</td>
							<td class="border px-2 py-1 text-right">{course.credits}</td>
							<td class="border px-2 py-1">{course.detail1}</td>
							<td class="border px-2 py-1">{course.detail2}</td>
							<td class="border px-2 py-1 text-right">{course.sumTest}</td>
							<td dir="rtl" class="border px-2 py-1 text-right">{course.finalTest}</td>
							<td class="border px-2 py-1 text-right">{course.total ?? ''}</td>
							<td class="border px-2 py-1 text-right">{course.points.toFixed(2)}</td>
							<td
								dir="ltr"
								class="border px-2 py-1 {course.grade === 'F'
									? 'bg-red-100 text-red-600'
									: ''} {course.grade === 'B' || course.grade === 'C+' || course.grade === 'B+'
									? 'bg-green-100 text-green-600'
									: ''}"
							>
								{course.grade}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
<article class=" container mx-auto my-2 text-center text-pretty">
	<h1 class="">معلومات الفصول السابقة غير متوفرة</h1>
</article>
