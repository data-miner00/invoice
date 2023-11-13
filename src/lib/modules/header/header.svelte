<nav class="navbar bg-base-100">
	<div class="flex-none">
		<details class="dropdown">
			<summary class="m-1 btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</summary>
			<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
				<li><a href="/">Dashboard</a></li>
				<div class="divider-horizontal" />
				<li><a href="/invoice">Invoice</a></li>
				<li><a href="/customers">Customers</a></li>
				<li><a href="/create">Create</a></li>
			</ul>
		</details>
	</div>
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">Invoice</a>
	</div>
	<div class="flex-none gap-2">
		<div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
		</div>
		<div class="dropdown dropdown-end">
			<button tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						alt="My profile avatar"
					/>
				</div>
			</button>
			<ul
				tabindex="0"
				role="menu"
				class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<a class="justify-between" href="/profile">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a href="/settings">Settings</a></li>
				<li><a href="/">Logout</a></li>
			</ul>
		</div>
	</div>
</nav>
