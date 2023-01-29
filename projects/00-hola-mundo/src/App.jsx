import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    
    return (
        <section className='App'>
            <TwitterFollowCard 
            initialIsFollowing={true} 
            userName="midudev">
            Miguel Ángel Durán
            
            </TwitterFollowCard> 

            <TwitterFollowCard 
            isFollowing={false} 
            userName="pheralb" 
            > 
            Pablo Hernandez
            </TwitterFollowCard>

       </section>
    )
}

