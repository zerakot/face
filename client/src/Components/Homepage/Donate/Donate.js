import {ReactComponent as DonateSvg} from '../medias/donate.svg';
import {ReactComponent as BmcSvg} from '../medias/bmc-logo.svg';
import {ReactComponent as PatroniteSvg} from '../medias/patronite-logo.svg';
import './Donate.css';

export default function Donate() {
	return (
		<div className="donate" id="donate">
			<div className="support">
				<h2>
					Are you grateful? Support me
					<svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" />
					</svg>
				</h2>
				<div className="methods">
					<div className="method" style={{backgroundColor: '#FFDD00'}}>
						<BmcSvg />
					</div>
					<div className="method" style={{backgroundColor: '#262626'}}>
						<PatroniteSvg />
					</div>
				</div>
			</div>

			<DonateSvg />
		</div>
	);
}
