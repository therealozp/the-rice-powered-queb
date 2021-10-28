import React from 'react';
import {
	Table,
	TableContainer,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.secondary.main,
		border: 'black 1px solid',
		fontSize: 20,
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'bold',
	},
	[`&.${tableCellClasses.body}`]: {
		border: 'black 1px solid',
		fontSize: 20,
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'bold',
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	border: 'black 1px solid',
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 'bold',
}));

function createData(name, price, priceWithDoc) {
	return { name, price, priceWithDoc };
}

const rows = [
	createData('LỚP 6 - 10', '60K', '70K'),
	createData('LỚP 10, 11', '70K', '80K'),
	createData('TƯ VẤN TUYỂN SINH', '50K', '60K'),
];

const PriceTable = () => {
	return (
		<TableContainer style={{ width: '750px' }}>
			<Table>
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">KHỐI LỚP</StyledTableCell>
						<StyledTableCell align="center">
							KHÔNG SOẠN TÀI LIỆU
						</StyledTableCell>
						<StyledTableCell align="center">CÓ SOẠN TÀI LIỆU</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="center">{row.price}</StyledTableCell>
							<StyledTableCell align="center">
								{row.priceWithDoc}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default PriceTable;
