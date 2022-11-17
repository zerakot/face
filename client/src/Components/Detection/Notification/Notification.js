import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReactComponent as InfoSvg} from '../../../medias/info.svg';
import {ReactComponent as CloseSvg} from '../../../medias/close.svg';
import {hideNotification} from '../../../redux/notificationManager';
import './Notification.css';

export default function Notification() {
	const dispatch = useDispatch();
	const {notificationData} = useSelector((state) => state.notifications);

	useEffect(() => {
		const hideTimeout = setTimeout(() => {
			dispatch(hideNotification());
		}, notificationData.delay || 10000);
		return () => clearTimeout(hideTimeout);
	}, [notificationData]);

	return (
		<div className="notification">
			<InfoSvg className="infoIcon" />
			<button className="close" onClick={() => dispatch(hideNotification())}>
				<CloseSvg />
			</button>

			<div className="title">{notificationData.title}</div>
			{notificationData.description && <div className="description">{notificationData.description}</div>}
		</div>
	);
}
