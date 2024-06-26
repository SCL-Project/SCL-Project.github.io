import React from 'react'
import Svg3 from '../../../images/svg3.svg'

import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrap,
	Img
} from './Info02Elements'

const InfoSection02 = () => {
	return (
		<>
			<InfoContainer id={'discover'}>
				<InfoWrapper>
					<InfoRow>
						<Column1>
							<TextWrapper>
								<TopLine>P2P-Lending</TopLine>
								<Heading>How it works</Heading>
								<Subtitle>
									Step into the future with blockchain technology — where transparency meets trust,
									and automation unlocks efficiency. Experience the power of secure transactions and
									seamless operations, all on the unbreakable foundation of blockchain. Welcome to a
									world where every digital move is clear, safe, and swift. Blockchain: Redefining
									trust for the connected age.
								</Subtitle>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={Svg3} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	)
}

export default InfoSection02
