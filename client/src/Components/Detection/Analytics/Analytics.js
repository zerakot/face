import {useDispatch, useSelector} from 'react-redux';
import {toggleAnalyticsVisiblity} from '../../../redux/analyticsManager';
import Charts from './Charts/Charts';
import './Analytics.css';

export default function Analytics() {
	const dispatch = useDispatch();
	const {analyticsVisibility, logs} = useSelector((state) => state.analytics);

	return (
		<div className={'analytics' + (analyticsVisibility ? ' collapsed' : '')}>
			<button className="default-button toggleAnalyticsVisibility" onClick={() => dispatch(toggleAnalyticsVisiblity())} disabled={logs < 2} title={logs < 2 ? 'Not enough data' : ''}>
				{analyticsVisibility ? 'Hide analytics' : 'Show analytics'}
			</button>

			{analyticsVisibility && <Charts logs={logs} />}
		</div>
	);
}
