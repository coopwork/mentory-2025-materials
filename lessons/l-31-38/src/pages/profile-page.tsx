import {useUserStore} from "../store/user/hooks.ts";
import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";

const ProfilePage = () => {
	const {user, update_user} = useUserStore();
	const [form, setForm] = useState({
		name: user?.name,
		avatar: user?.avatar,
	});
	const isModified = form.name !== user?.name || form.avatar !== user?.avatar;
	const isEmpty = !form.name || !form.avatar;

	const handleSetFormValue = (key: 'name' | 'avatar', value: string) => {
		setForm(prev => ({
			...prev,
			[key]: value
		}))
	}

	const handleSubmit = async () => {
		update_user(form)
	}

	return (
			<div>
				<div>
					PROFILE
				</div>

				<Box sx={{display: 'flex', flexDirection: 'column', gap: 2, width: '80%', margin: '0 auto'}}>
					<TextField
							placeholder='Имя'
							onChange={e => handleSetFormValue('name', e.target.value)}
							value={form.name}
					/>
					<TextField
							placeholder='Фото'
							value={form.avatar}
							onChange={e => handleSetFormValue('avatar', e.target.value)}
					/>
					<TextField
							placeholder='Email'
							aria-readonly={true}
							value={user?.email}
							slotProps={{
								input: {
									readOnly: true,
								},
							}}
							sx={{
								userSelect: 'all'
							}}
					/>
					<Button
							disabled={!isModified || isEmpty}
							variant="contained"
							onClick={handleSubmit}
					>
						Сохранить
					</Button>
				</Box>
			</div>
	);
};

export default ProfilePage;