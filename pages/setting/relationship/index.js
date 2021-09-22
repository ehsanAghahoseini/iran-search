
import { faUser , faCogs , faTicketAlt , faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import SettingSide from '../../../components/SettingSide';
import SettingRelationship from '../../../components/SettingRelationship';


export default function UserRelationship() {


  return (
    <div className="setting">
      <div className="setting-inner">
        <div className="setting-right">
          <SettingSide active={2}/>
        </div>
        <div className="setting-left">
          <div className="setting-left-inner">
            <SettingRelationship/>
          </div>
        </div>
      </div>
    </div>
  )
}
