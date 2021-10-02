import React from 'react';
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
		right: 0,
	},
	customImage2: {
		// position: 'absolute',
		// bottom: 20,
		marginTop: '-40vh',
		marginBottom: '-15vh',
	},
}));

const AboutPage = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.customImage}>
				<Image
					src="/Background.svg"
					alt="green background"
					width="400px"
					height="1000px"
				/>
			</div>

			<Typography className={classes.heading}>About us</Typography>
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
						“Queb chạy bằng cơm” (QCBC) là một dự án nhỏ trực thuộc tổ chức lớn
						2School Guideline (2SG) - một tổ chức phi lợi nhuận nhằm hướng dẫn,
						hỗ trợ các em học sinh trong kì thi tuyển sinh vào lớp 10 của Thành
						phố Hồ Chí Minh.
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						“Queb chạy bằng cơm” được thành lập nhằm đáp ứng nhu cầu học tập của
						học sinh. Ứng dụng công nghệ mới vào công tác giáo dục, chúng tôi sẽ
						kết nối các học sinh với các thành viên trực thuộc 2SG dưới hình
						thức mentor-mentee để cung cấp cho các em những dịch vụ giáo dục
						nhằm thúc đẩy quá trình học tập của các em. Phạm vi đối tượng hướng
						đến không chỉ dừng lại ở các em khối 9 mà mở rộng ra cho toàn bộ học
						sinh từ lớp 6 đến lớp 11 và dự kiến sẽ tiếp tục mở rộng trong tương
						lai.
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Để duy trì hoạt động, các dịch vụ này sẽ được tính phi và toàn bộ
						phần lợi nhuận còn lại sau khi chi trả cho các khoản phí cần thiết,
						2SG sẽ trực tiếp quyên góp cho các quỹ xã hội liên quan đến giáo
						dục. Chúng tôi tin rằng sứ mệnh giáo dục của chúng tôi không chỉ
						dừng lại ở phạm vi một thành phố mà nó sẽ tiếp tục lan rộng đi khắp
						nơi và tất cả các bạn sẽ là người cùng chúng tôi thực hiện điều đó.
					</Typography>
					<br />
					<br />
					<Typography
						className={classes.commonTypo}
						style={{ color: '#782c13', fontWeight: 'bold' }}
					>
						Trân trọng,
					</Typography>
					<Typography
						className={classes.commonTypo}
						style={{ color: '#782c13', fontWeight: 'bold' }}
					>
						Đội ngũ 2SG.
					</Typography>
					<Typography className={classes.commonTypo}>
						➣ Để biết thêm về cách sử dụng trang web, vui lòng truy cập <a href ='/help'>“HELP"</a>.
					</Typography>
				</div>
			</Container>
			<div className={classes.customImage2}>
				<Image
					src="/Croods Garden.svg"
					alt="table background"
					width="400px"
					height="800px"
				/>
			</div>
		</div>
	);
};

export default AboutPage;
