
import { faUser , faCogs , faTicketAlt , faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import SettingSide from '../../../components/SettingSide';
import SettingUser from '../../../components/SettingUser';

export default function UserSetting() {
  return (
    <div className="setting">
      <div className="setting-inner">
        <div className="setting-right">
          <SettingSide active={1}/>
        </div>
        <div className="setting-left">
          <div className="setting-left-inner">
            <SettingUser/>
          </div>
        </div>
      </div>
    </div>
  )
}
