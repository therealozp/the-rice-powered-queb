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
		position: 'absolute',
		transform: 'scale(2)',
		zIndex: -1,
		bottom: 80,
		// bottom: 20,
	},
	commonHeadings: {
		width: '65%',
		fontSize: '1.2rem',
		color: theme.palette.themeGreen.main,
		fontWeight: 'bold',
	},
}));

const HelpPage = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.customImage}>
				<Image
					src="/BackgroundRed.svg"
					alt="green background"
					width="400px"
					height="1200px"
				/>
			</div>
			<div className={classes.customImage2}>
				<Image
					src="/BackgroundYellowC.svg"
					alt="table background"
					width="400px"
					height="800px"
				/>
			</div>
			<Typography className={classes.heading}>Help</Typography>
			<Container>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: 64,
					}}
				>
					<Typography className={classes.commonHeadings}>
						Bước 1: Truy cập vào “FEATURES”
					</Typography>
					<Typography align="justify" className={classes.commonTypo}>
						Tại đây bạn có thể tham khảo dịch vụ mà 2SG cung cấp và bảng giá cho
						mỗi dịch vụ. Sau khi nắm rõ dịch vụ muốn trải nghiệm, bạn vui lòng
						thực hiện bước 2.
					</Typography>
					<br />
					<br />
					<Typography className={classes.commonHeadings}>
						Bước 2: Tìm mentor phù hợp
					</Typography>
					<Typography align="justify" className={classes.commonTypo}>
						Bạn truy cập vào mục “MENTOR”, tại đây bạn có thể tham khảo danh mục
						các mentor của 2SG với các thông tin chi tiết bao gồm: Thông tin và
						thành tích học tập của mentor, môn học mentor giảng dạy, các dịch vụ
						mentor cung cấp, khung giờ rảnh của mentor.
					</Typography>
					<br />
					<br />
					<Typography className={classes.commonHeadings}>
						Bước 3: Đăng ký
					</Typography>
					<Typography align="justify" className={classes.commonTypo}>
						Sau khi đã chọn được mentor có khung thời gian phù hợp, bạn vui lòng
						nhấp vào phần “SIGN IN” để tạo tài khoản nhằm lưu trữ thông tin cá
						nhân. Bạn có thể sử dụng tài khoản này để đăng nhập trong lần truy
						cập tiếp theo.
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Bạn trở lại mục “MENTOR”. Tại đây bạn truy cập vào giao diện “lịch”
						và tick vào các khung giờ bạn muốn đăng ký học hoặc thời gian bạn
						muốn nhận được bài (đối với dịch vụ đăng kí sửa bài).
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Tiếp đó bạn điền rõ nội dung muốn học vào ô ghi chú và điền thời
						lượng bạn muốn tham gia khóa học (không áp dụng cho các bạn đăng kí
						sửa bài), ví dụ: Đăng kí ôn tập Hóa 8 - Bài 1 đến 3 (Thời lượng: 01
						tiếng/ngày - 01 ngày) Sửa 01 bài văn miêu tả lớp 7.
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Cuối cùng nếu bạn có sẵn tài liệu, mentor chỉ hướng dẫn trên tài
						liệu bạn cung cấp vui lòng tick vào ô “có” bên cạnh ô hỏi “Bạn có
						sẵn tài liệu không?” và ngược lại.
					</Typography>
					<br />
					<br />
					<Typography
						style={{ fontWeight: 'bold' }}
						align="justify"
						className={classes.commonTypo}
					>
						Lưu ý: Luôn đặt lịch sớm hơn ít nhất 04 ngày trước ngày đăng kí học.
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Sau khi nhận được xác nhận chuyển khoản, chúng mình sẽ gửi cho bạn
						thông tin của mentor để bạn dễ dàng trao đổi. Mentor sẽ trực tiếp
						liên hệ trước theo thông tin bạn đã để lại để thống nhất tài liệu
						cho buổi học và nền tảng học.
					</Typography>
					<br />
					<br />
					<Typography
						style={{ fontWeight: 'bold' }}
						align="justify"
						className={classes.commonTypo}
					>
						Lưu ý: Đối với các bạn đăng kí gói học bằng tài liệu có sẵn hoặc
						đăng kí sửa bài viết, vui lòng gửi các tài liệu này cho mentor qua
						kênh liên lạc được cung cấp trễ nhất 02 ngày trước ngày đăng kí học
					</Typography>
					<br />
					<br />
					<Typography align="justify" className={classes.commonTypo}>
						Mọi ý kiến thắc mắc và phản hồi về “Queb chạy bằng cơm”, vui lòng
						liên lạc qua thông tin ở phần{' '}
						<a href="/contact">&quot;CONTACT&quot;</a>.
					</Typography>
					<br />
					<br />
				</div>
			</Container>
		</div>
	);
};

export default HelpPage;
