import React from 'react';
import CommonLayout from '../../src/layouts/CommonLayout';
import IndividualMentorPage from '../../src/pages/IndividualMentorPage';
import { Box } from '@mui/system';
import AvailabilityPanel from '../../src/components/infocards/AvailabilityPanel';

const help = () => {
	return (
		<CommonLayout>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '75% 25%',
					background: '#FED7A6',
				}}
			>
				<IndividualMentorPage />
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<AvailabilityPanel />
				</Box>
			</Box>
		</CommonLayout>
	);
};
export default help;
