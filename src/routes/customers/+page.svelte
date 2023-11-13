<script lang="ts">
	type SampleData = {
		avatar: string;
		name: string;
		company: string;
		country: string;
		job: string;
		favoriteColor: string;
	};

	let samples: SampleData[] = [
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-2@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		},
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-3@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		},
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-4@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		},
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-5@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		}
	];
</script>

<div class="p-4 flex gap-4">
	<div class="w-[400px] bg-gray-50 rounded-xl" />
	<div class="overflow-x-auto flex-1">
		<table class="table">
			<thead>
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each samples as sample}
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src={sample.avatar} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div class="font-bold">{sample.name}</div>
									<div class="text-sm opacity-50">{sample.country}</div>
								</div>
							</div>
						</td>
						<td>
							{sample.company}
							<br />
							<span class="badge badge-ghost badge-sm">{sample.job}</span>
						</td>
						<td>{sample.favoriteColor}</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th />
				</tr>
			</tfoot>
		</table>
	</div>
</div>
