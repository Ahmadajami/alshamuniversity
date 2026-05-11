<script lang="ts">
	import Header from '$lib/Header.svelte';

	const courseGrades = [
		{
			courseName: 'القانون التجاري (3)',
			courseCode: 'RQL316',
			credits: 3,
			detail1: '19 من 25',
			detail2: '-',
			sumTest: '-',
			finalTest: '-',
			total: '-',
			points: 0,
			grade: '-'
		},
		{
			courseName: ' القانون الدولي العام',
			courseCode: 'RQL526',
			credits: 3,
			detail1: '17 من 25',
			detail2: '-',
			sumTest: '-',
			finalTest: '-',
			total: '-',
			points: 0,
			grade: '-'
		},
		{
			courseName: ' المنطق العلمي',
			courseCode: 'RQL-420',
			credits: 2,
			detail1: '22 من 25',
			detail2: '-',
			sumTest: '-',
			finalTest: '-',
			total: '-',
			points: 0,
			grade: '-'
		},
		{
			courseName: ' الاقتصاد السوري',
			courseCode: 'RQL-420',
			credits: 2,
			detail1: '18 من 25',
			detail2: '-',
			sumTest: '-',
			finalTest: '-',
			total: '-',
			points: 0,
			grade: '-'
		},
		{
			courseName: 'الحقوق العينية الاصلية',
			courseCode: 'RQUE5',
			credits: 3,
			detail1: '16 من 25',
			detail2: '-',
			sumTest: '-',
			finalTest: '-',
			total: '-',
			points: 0,
			grade: '-'
		}
	];
	let { data } = $props();
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
					{#each courseGrades as course, i (i)}
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
