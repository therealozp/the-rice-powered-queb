import React, { useState } from 'react';
import {
	Dialog,
	TextField,
	Typography,
	Button,
	DialogContent,
	DialogActions,
	DialogTitle,
} from '@mui/material';
import { Box } from '@mui/system';

const PaymentDialog = ({ open, handleClose, amountToPay }) => {
	const [fullName, setFullName] = useState('');
	const [phoneNum, setPhoneNum] = useState('');
	const [Bank, setBank] = useState('');
	const [accountNum, setAccountNum] = useState('');

	return (
		<Dialog open={open} onClose={handleClose} maxWidth={false}>
			<DialogTitle
				sx={{
					background: '#ffcd8f',
					fontSize: '2em',
				}}
			>
				Thanh toán
			</DialogTitle>
			<DialogContent
				sx={{
					background: '#ffcd8f',
					height: '62vh',
					width: '50vw',
				}}
			>
				<Typography
					sx={{
						textTransform: 'uppercase',
						fontSize: '0.85em',
						fontWeight: '500',
						letterSpacing: '2px',
					}}
				>
					Thông tin chung
				</Typography>

				<Box sx={{ margin: '16px' }}>
					<TextField
						label="Họ và tên"
						variant="outlined"
						value={fullName}
						onChange={(event) => setFullName(event.target.value)}
						sx={{ color: '#EEECF1', width: '65%', marginBottom: '15px' }}
						required
					/>
					<TextField
						label="Số điện thoại"
						variant="outlined"
						value={phoneNum}
						onChange={(event) => setPhoneNum(event.target.value)}
						sx={{ color: '#EEECF1', width: '65%', marginBottom: '15px' }}
						required
					/>
					<TextField
						label="Tên ngân hàng"
						variant="outlined"
						value={Bank}
						onChange={(event) => setBank(event.target.value)}
						sx={{ color: '#EEECF1', width: '65%', marginBottom: '15px' }}
						required
					/>
					<TextField
						label="Số tài khoản"
						variant="outlined"
						value={accountNum}
						onChange={(event) => setAccountNum(event.target.value)}
						sx={{ color: '#EEECF1', width: '65%' }}
						required
					/>
				</Box>
				<Typography
					sx={{
						textTransform: 'uppercase',
						fontSize: '0.85em',
						fontWeight: '500',
						letterSpacing: '2px',
						marginBottom: '16px',
					}}
				>
					Số tiền cần thanh toán: {amountToPay + ' VNĐ'}
				</Typography>
				<Typography
					sx={{
						textTransform: 'uppercase',
						fontSize: '0.85em',
						fontWeight: '500',
						letterSpacing: '2px',
					}}
				>
					Lưu ý nội dung chuyển khoản:
				</Typography>
				<Typography
					sx={{
						fontSize: '0.85em',
						letterSpacing: '2px',
						marginLeft: '16px',
						marginTop: '8px',
					}}
				>
					Viết theo cú pháp: &quot;Họ tên học sinh - Môn học - Thời lượng&quot;
				</Typography>
				<Typography
					sx={{
						textTransform: 'uppercase',
						fontSize: '0.85em',
						fontWeight: '500',
						letterSpacing: '2px',
						marginTop: '16px',
						marginBottom: '16px',
					}}
				>
					Bằng chứng thanh toán
				</Typography>
				<label
					htmlFor="contained-button-file"
					style={{
						marginLeft: '16px',
						marginTop: '32px',
						borderRadius: '8px',
						backgroundColor: '#FCAA44',
						height: '20px',
						padding: '8px',
					}}
				>
					Tải lên hình ảnh
				</label>
				<input
					type="file"
					accept="image/*"
					style={{ display: 'none' }}
					id="contained-button-file"
				/>
			</DialogContent>
			<DialogActions
				sx={{
					background: '#ffcd8f',
				}}
			>
				<Button variant="contained" color="themeYellow" onClick={handleClose}>
					Hoàn thành
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default PaymentDialog;
