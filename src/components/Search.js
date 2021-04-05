import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useHistory } from "react-router";



export default function Search() {

	
	return (
		<Paper className="p-4">
			<form noValidate /*onSubmit={handleSubmit}*/>
				<Typography className="text-center" variant="h5">Search</Typography>
				<div className="form-group">
					<TextField
						/*onChange={ handleChange }*/
						className="w-100" 
						name="search" 
						type="search" 
					/>
				</div>
				<Button
					variant="contained"
					color="primary"
				/*	disabled={isLoading}*/
					type="submit"
				>
					Search
				</Button>
				{/* {
					isLoading && <CircularProgress size={24} />
				} */}
			</form>
		</Paper>
		
	)
}
