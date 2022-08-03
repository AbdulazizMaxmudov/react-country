import '../components/Search.css';
function Search({ setValue , setOptionvalue }) {
	return (
		<div className='search-block'>
			<input
				onKeyUp={(evt) => {
					if (evt.code === 'Enter') {
						setValue(evt.target.value);
					}
				}}
				type='search'
				className='search'
			/>
			<select className='select'
			onChange={(event) => {
				setOptionvalue(event.target.value);
				
			}}>
				<option  disabled>Regions </option>
				<option value="eu" >EU European Union </option>
				<option value="efta">European Free Trade Association </option>
				<option value="caricom"> Caribbean Community </option>
				<option value="pa">Pacific Alliance </option>
				<option value="au">African Union </option>
				<option value="usan">Union of South American Nations</option>
				<option value="asean" >Association of Southeast Asian Nations </option>
				
			</select>
		</div>
	);
}
export default Search;
