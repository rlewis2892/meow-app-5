<header>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<a class="navbar-brand" href="#">=^ Meow App 5 ^=</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<button class="btn btn-outline-light" data-toggle="modal" data-target="#signUpModal" type="button"><i class="fa fa-paw"></i>&nbsp;Sign Up</button>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Hello, {{profile.username}}
					</a>
					<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#"><i class="fa fa-user"></i>&nbsp;&nbsp;My Profile</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;Sign Out</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</header>