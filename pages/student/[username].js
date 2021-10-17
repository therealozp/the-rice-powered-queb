import React from 'react';
import CommonLayout from '../../src/layouts/CommonLayout';
import ReminderPanel from '../../src/components/infocards/ReminderPanel';
import { Box } from '@mui/system';
import MenteesPage from '../../src/components/menteesPage/menteesPage';

const username = () => {
	return (
		<CommonLayout>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '70% 30%',
					background: '#ffcd8f',
				}}
			>
				<MenteesPage />
				<Box sx={{ display: 'flex', justifyContent: 'center', padding: 8 }}>
					<ReminderPanel />
				</Box>
			</Box>
		</CommonLayout>
	);
};

export default username;
