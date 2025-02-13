import { Button } from '@/components/ui/button'
import { Keyboard, KeyboardOff, Mic, MicOff, Video, VideoOff, History, LogOut, Settings } from 'lucide-react'
import styles from './index.module.less'

interface ToolbarProps {
  isKeyboardOn: boolean;
  isListening: boolean;
  isVideoOn: boolean;
  onShowChatbox: () => void;
  onToggleListening: () => void;
  onToggleVideo: () => void;
  onShowHistory: () => void;
  onLogout: () => void;
  onShowConfig: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ isKeyboardOn, isListening, isVideoOn,onShowChatbox, onToggleListening, onToggleVideo, onShowHistory, onLogout, onShowConfig }) => {
  return (
    <div className={styles.toolbar}>
      <Button
        onClick={onShowChatbox}
        variant="ghost"
        title={isKeyboardOn ? "关闭键盘" : "开启键盘"}
      >
        {isKeyboardOn ? <KeyboardOff className="h-6 w-6" /> : <Keyboard className="h-6 w-6" />}
      </Button>
      <Button
        onClick={onToggleListening}
        title={isListening ? "闭麦" : "开麦"}
      >
        {isListening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
      </Button>
      <Button
        onClick={onToggleVideo}
        variant="ghost"
        title={isVideoOn ? "关闭视频" : "开启视频"}
      >
        {isVideoOn ? <VideoOff className="h-6 w-6" /> : <Video className="h-6 w-6" />}
      </Button>
      <Button
        onClick={onShowHistory}
        variant="ghost"
        title="历史记录"
      >
        <History className="h-6 w-6" />
      </Button>
      <Button
        onClick={onShowConfig}
        variant="ghost"
        title="模型配置"
      >
        <Settings className="h-6 w-6" />
      </Button>
      <Button
        onClick={onLogout}
        variant="ghost"
        title="登出系统"
      >
        <LogOut className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default Toolbar 