import React from 'react';
import PriceTable from '../components/pricetable/PriceTable';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
	commonTypo: {
		width: '65%',
		fontSize: '1.2rem',
	},
	heading: {
		fontSize: '4rem',
		fontFamily: 'Abel, Helvetica, Roboto',
		fontWeight: 'bold',
		margin: '16px 10vw ',
	},
	customImage: {
		position: 'absolute',
		top: 150,
		left: -100,
	},
	customImage2: {
		position: 'absolute',
		transform: 'scale(2)',
		zIndex: -1,
		top: 700,
		right: 0
	},
	commonHeadings: {
		width: '65%',
		fontSize: '1.2rem',
		color: theme.palette.themeGreen.main,
		fontWeight: 'bold',
	}
}));

const FeaturesPage = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.customImage}>
				<Image
					src="/BackgroundRedFea.svg"
					alt="red background"
					width="400px"
					height="1200px"
				/>
			</div>
			<div className={classes.customImage2}>
				<Image
					src="/BackgroundGreenFea.svg"
					alt="table background"
					width="400px"
					height="800px"
				/>
			</div>
			<Typography className={classes.heading}>Features</Typography>
			<Container>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: 64,
					}}
				>
					<Typography align="justify" className={classes.commonTypo}>
						“Queb chạy bằng cơm” sẽ cung cấp cho bạn những dịch 
						vụ học tập ngắn hạn nhằm giúp đỡ bạn trong quá trình 
						ôn tập kiểm tra tại trường học, cụ thể: 
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Các buổi học của bạn cùng với mentor sẽ kéo dài trong
						khoảng thời gian ít hơn 07 ngày. Trong đó bạn có thể 
						chọn một trong các nội dung học sau: 
					</Typography>
					<br />
					<br />
					<Typography className={classes.commonHeadings}>
						Ôn tập kiểm tra, thi học kỳ:
					</Typography>
					<Typography align="justify" className={classes.commonTypo}>
						Mentor sẽ giúp bạn ôn tập lại các bài học 
						trong phạm vi  ôn tập do bạn cung cấp.
						Khuyến khích chọn ngày ôn tập cùng mentor 2-3 ngày 
						trước ngày kiểm tra để đạt được kết quả tốt nhất. Trong 
						trường hợp bạn không có tài liệu có sẵn và cần mentor 
						soạn tài liệu sẽ được tính thêm phí. 
					</Typography>
					<br />
					<br />
					<Typography className={classes.commonHeadings}>
						Định hướng ôn thi (đối với học sinh lớp 9) - kết hợp soạn tài liệu tham khảo đính kèm:
					</Typography>
					<Typography align="justify" className={classes.commonTypo}>
						Đối với những bạn học sinh 
						lớp 9 đang cần định hướng cho một năm học ôn tập thi 
						tuyển sinh, dịch vụ này sẽ cho phép bạn trao đổi với các 
						mentor có kinh nghiệm để vạch ra định hướng ôn tập cũng 
						như cung cấp các đầu sách, tên tài liệu phù hợp với khả 
						năng và mục tiêu của bạn.
					</Typography>
					<br />
					<br />
					<Typography className={classes.commonHeadings}>
						Sửa Văn (tối đa 3 lần sửa/bài):
					</Typography>
					<Typography align="justify" className={classes.commonTypo}>
						Với những bài tập làm 
						Văn tại trường phổ thông, các mentor sẽ giúp bạn chỉnh 
						sửa câu chữ, ý tưởng nhằm cải thiện lối hành văn và 
						phương pháp làm bài cho bạn.
					</Typography>
					<br />
					<br />
					<Typography className={classes.commonHeadings}>
						Sửa luận Tiếng Anh (tối đa 3 lần sửa/bài):
					</Typography>
					<Typography align="justify" className={classes.commonTypo}>
						2SG sẽ giúp 
						bạn sửa bài luận tiếng Anh ở mức độ cơ bản như luận
						tiếng Anh khi thi chuyên (đối với các trường có yêu cầu)
						hoặc các bài writing IELTS.
					</Typography>
					<br />
					<br />
					<Typography className={classes.commonHeadings}>
						Bảng giá Tutor ngắn hạn dự kiến (tính theo giờ):
					</Typography>
					<br />
					<PriceTable />
					<br />
					<br />
					<Typography className={classes.commonHeadings}>Sửa bài:</Typography>
					<Typography className={classes.commonTypo}>
						➤ Văn: 30K/bài/3 lần sửa
					</Typography>
					<Typography className={classes.commonTypo}>
						➤ Tiếng Anh: 50K/bài/3 lần sửa
					</Typography>
					<br />
					<br />
					<Typography 
						align="justify" 
						className={classes.commonTypo} 
						style={{color: 'red'}}
					>
						Lưu ý: giá trên là giá không cố định, sẽ thay đổi tuỳ theo tình hình thực tế.
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Mọi ý kiến thắc mắc và phản hồi về “Queb chạy bằng cơm”, vui lòng
						liên lạc qua thông tin ở phần <a href='/contact'>"CONTACT"</a>
					</Typography>
					<br />
					<br />
				</div>
			</Container>
		</div>
	);
};
export default FeaturesPage;