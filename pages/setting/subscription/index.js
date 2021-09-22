
import { faUser , faCogs , faTicketAlt , faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import SettingSide from '../../../components/SettingSide';
import SettingChart from '../../../components/SettingChart';

export default function UserSubscription() {
  return (
    <div className="setting">
      <div className="setting-inner">
        <div className="setting-right">
          <SettingSide active={3}/>
        </div>
        <div className="setting-left">
          <div className="setting-left-inner">
            <SettingChart/>
          </div>
        </div>
      </div>
    </div>
  )
}
