import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="b7720cec-1932-4799-88af-e92d92a19e9c"
            userName="jj"
            userSecret="sembilan900"
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />
    )
}

export default App