// QuerySelectors
const logout = document.querySelector('#logout')

const logoutHandler = async () => {
	const response = await fetch('/api/user/logout', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	});
  
	if (response.ok) {
	  document.location.replace('/');
	} else {
		swal({
			title: "Logout Failed",
			text: "Please try again.",
			icon: "warning",
			dangerMode: true,
		  });
	}
  };
  
  //event Listener
  logout.addEventListener('click', logoutHandler);
