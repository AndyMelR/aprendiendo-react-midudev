import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import './index.css'

export function App(){
    const formatUserName = (userName) =>`@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName}
            initialIsfollowing= {true} 
            userName="ameleror" 
            name="Andrea Melero" />
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            
            userName="midudev" 
            name="Miguel Ángel Durán" />
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            
            userName="pheralb" 
            name="Pablo Hernandez" />
            <TwitterFollowCard 
            formatUserName={formatUserName}
            
            userName="vxnder" 
            name="Vanderhart" />
        </section>
    )
}