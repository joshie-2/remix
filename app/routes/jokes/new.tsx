const NewJokesRoute = () => {
	return (
		<div>
			<form method='post'>
				<div>
					<label>
						Name: <input type='text' name='name' />
					</label>
				</div>
				<div>
					<label>
						Content: <textarea name='content' />
					</label>
				</div>
				<div>
					<button type='submit' className='button'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewJokesRoute;
