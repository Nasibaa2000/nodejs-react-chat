import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return( 
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='707a68a3-1df0-4dc9-93c3-5c9da062b453'
            // eslint-disable-next-line react/prop-types
            username={props.user.username}
            // eslint-disable-next-line react/prop-types
            secret={props.user.secret}
            style={{height: '100%'}}
            />
    </div>)
}

export default ChatsPage
