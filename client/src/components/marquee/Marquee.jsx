import Marquee from 'react-fast-marquee';

const MarqueePhotos = () => {
	const styles = {
		width: '4500px',
		display: 'flex'
	};
	return (
		<Marquee pauseOnHover>
			<div style={styles}>
				<div>
					<img
						src='assets/images/covers/1.png'
						alt=''
						style={{
							width: '1000px'
						}}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/2.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/3.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/4.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/5.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/1.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/2.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/3.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/4.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
				<div>
					<img
						src='assets/images/covers/5.png'
						alt=''
						style={{ width: '1000px' }}
					/>
				</div>
			</div>
		</Marquee>
	);
};

export default MarqueePhotos;
