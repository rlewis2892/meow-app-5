<!DOCTYPE html>
<html lang="en">

	<?php require_once ("head-utils.php");?>

	<body class="sfooter">
		<div class="sfooter-content">

			<?php require_once("navbar.php");?>

			<main class="d-flex align-items-end align-items-sm-center mh-80">
				<div class="container-fluid text-center text-lg-left">

					<div class="row">

						<div class="col-sm-6 offset-sm-6 col-lg-4 offset-lg-8">
							<div class="card">
								<div class="card-body">
									<form action="#" novalidate>
										<div class="form-group">
											<div class="input-group">
												<div class="input-group-addon"><i class="fa fa-envelope"></i></div>
												<input id="signInEmail" name="signInEmail" type="email" class="form-control" placeholder="Email">
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
												<div class="input-group-addon"><i class="fa fa-key"></i></div>
												<input id="signInPassword" name="signInPassword" type="password" class="form-control" placeholder="Password">
											</div>
										</div>
										<div class="text-sm-right">
											<button class="btn btn-info"><i class="fa fa-sign-in"></i>&nbsp;Sign In</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

				</div><!--/.container-fluid-->
			</main>

		</div>

		<?php require_once("footer.php");?>

		<?php require_once("sign-up-modal.php");?>

	</body>
</html>