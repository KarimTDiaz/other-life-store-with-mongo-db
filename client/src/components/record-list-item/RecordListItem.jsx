import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import { LIST_ITEMS_OPTION } from '../../constants/listItemsOptions';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import Button from '../button/Button';
import Delete from '../delete/Delete';
import Modal from '../modal/Modal';
import Purchase from '../purchase/Purchase';
import Text from '../text/Text';
import Title from '../title/Title';
import {
	ListAddedContainer,
	ListButtons,
	ListFlex,
	ListImage,
	ListItem,
	PurchaseIcon
} from './styles';

const RecordListItem = ({
	record,
	isYours,
	isInCart,
	seller,
	type,
	sellerId
}) => {
	const [content, setContent] = useState();
	const navigate = useNavigate();
	const date = record.date.split(',');
	return (
		<ListItem>
			<ListImage
				src={record.productImage}
				onClick={ev => {
					navigate('/product-info', {
						state: {
							currentRecord: record,
							isYours: isYours,
							isInCart: isInCart,
							seller: seller
						}
					});
				}}
			/>
			<ListFlex>
				<div>
					<Text type={TEXTS_TYPES.FIELD}>{record.title}</Text>
					<Text type={TEXTS_TYPES.FIELD}>{record.price} €</Text>
				</div>
				<ListAddedContainer>
					<Title type={TITLES_TYPES.SUBTITLE}>Added on:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{date[0]}</Text>
				</ListAddedContainer>
			</ListFlex>
			{type === LIST_ITEMS_OPTION.CART && (
				<>
					<PurchaseIcon
						{...ICONS.creditCard}
						onClick={() =>
							showModal(
								setContent,
								<Purchase
									record={record}
									setContent={setContent}
									sellerId={sellerId}
								/>
							)
						}
					/>
				</>
			)}
			{type === LIST_ITEMS_OPTION.USER_PRODUCTS && (
				<ListButtons>
					<Button type={BUTTONS.ICON} src={ICONS.edit}></Button>
					<Button
						type={BUTTONS.ICON}
						src={ICONS.trash}
						action={() =>
							showModal(
								setContent,
								<Delete id={record._id} setContent={setContent} />
							)
						}
					></Button>
				</ListButtons>
			)}
			<Modal>{content}</Modal>
		</ListItem>
	);
};

const showModal = (setContent, component) => {
	setContent(component);
};
export default RecordListItem;
